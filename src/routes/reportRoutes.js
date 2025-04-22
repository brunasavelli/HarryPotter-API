const express = require("express");
const router = express.Router();
const apiKeyMiddleware = require("./../config/apiKey");

const reportController = require("./../controllers/reportController");

//Rota para exportar CSV
router.use(apiKeyMiddleware);
router.get("/report/csv", reportController.exportWizardCSV);

//Rota para o PDF

router.get("/report/pdf", reportController.exportWizardPDF);

module.exports = router;