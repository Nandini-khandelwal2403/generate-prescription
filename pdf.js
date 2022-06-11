function generatePdf() {
    const element = document.querySelector('.generate');

    var opt = {
        margin: 0,
        filename: 'myfile.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf()
        .set(opt).from(element)
        .save();
};
