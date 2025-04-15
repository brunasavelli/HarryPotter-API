const wizardModel = require("../models/wizardModel");

const getAllWizards = async (req, res) => {
    try {
        const { name } = req.query;
        const wizards = await wizardModel.getWizards(name);
        res.json(wizards);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar magos." });
    }
};

const getWizard = async (req, res) => {
    try {
        const wizard = await wizardModel.getWizardById(req.params.id);
        if (!wizard) {
            return res.status(404).json({ message: "Mago não encontrado." });
        }
        res.json(wizard);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar mago." });
    }
};

const createWizard = async (req, res) => {
    try {
        const { name, house_id } = req.body;
        const photo = req.file ? req.file.filename : null;
        const newWizard = await wizardModel.createWizard(name, house_id, photo);
        res.status(201).json(newWizard);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar mago." });
    }
};

const updateWizard = async (req, res) => {
    try {
        const { name, house_id } = req.body;
        const updatedWizard = await wizardModel.updateWizard(req.params.id, name, house_id);
        if (!updatedWizard) {
            return res.status(404).json({ message: "Mago não encontrado." });
        }
        res.json(updatedWizard);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar mago." });
    }
};

const deleteWizard = async (req, res) => {
    try {
        const message = await wizardModel.deleteWizard(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar mago." });
    }
};

module.exports = { getAllWizards, getWizard, createWizard, updateWizard, deleteWizard };