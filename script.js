document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("printPdfBtn");

    if (btn) {
        btn.addEventListener("click", function () {
            // Opens the print dialog (user selects “Save as PDF”)
            window.print();
        });
    }
});