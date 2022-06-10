function generatePdf() {
    const element = document.querySelector('.generate');

    html2pdf()
        .from(element)
        .save();
};
