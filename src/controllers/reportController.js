const PDFDocument = require("pdfkit");

const professorModel = require("../models/professorModel");

const exportProfessorPDF = async (req, res) => {
    try {
        const professores = await professorModel.getProfessores()

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=professores.pdf")

        const doc = new PDFDocument();
        doc.pipe(res);

        //Titulo
        doc.fontSize(20).text("Relatório de Professores", { align: "center" });
        doc.moveDown();

        //Cabeçalho
        doc.fontSize(12).text("Id | nome | email", { underline: true });
        doc.moveDown(0.5);

         //Add dados dos Professores
        professores.forEach((professor) => {
            doc.text(
                `${professor.id} | ${professor.nome} |  ${professor.email}`
            );
        });

        doc.end();

    } catch (error) {
        res.status(500).json({ message: "Erro ao gerar o PDF"}); 
    }
};

module.exports = {exportProfessorPDF};