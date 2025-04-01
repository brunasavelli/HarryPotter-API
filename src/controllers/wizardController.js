const wizardModel = require("../models/wizardModel");

const getAllWizards = async (req, res) => {
    try {
        const wizards = await wizardModel.getWizards();
        res.json(wizards);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar bruxos." });
    }
};

const getWizard = async (req, res) => {
    try {
        const wizard = await wizardModel.getWizardById(req.params.id);
        if (!wizard) {
            return res.status(404).json({ message: "Bruxo não encontrado." });
        }
        res.json(wizard);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar bruxo." });
    }
};

const createWizard = async (req, res) => {
    try {
        const { name, house_id } = req.body;
        const newWizard = await wizardModel.createWizard(name, house_id);
        res.status(201).json({ message: "Bruxo criado com sucesso!" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar bruxo." });
    }
};

const updateWizard = async (req, res) => {
    try {
        const { name, house_id } = req.body;
        const updatedWizard = await wizardModel.updateWizard(req.params.id, name, house_id);
        if (!updatedWizard) {
            return res.status(404).json({ message: "Bruxo não encontrado." });
        }
        res.status(200).json({ message: "Bruxo atualizado com sucesso!" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar bruxo." });
    }
};

const deleteWizard = async (req, res) => {
    try {
        const message = await wizardModel.deleteWizard(req.params.id);
        res.status(200).json({ message: "Bruxo deletado com sucesso!" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar bruxo." });
    }
};

module.exports = { getAllWizards, getWizard, createWizard, updateWizard, deleteWizard };
