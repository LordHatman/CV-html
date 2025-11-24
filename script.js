// script.js
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('printPdfBtn');
  if (!btn) return;

  btn.addEventListener('click', function () {
    // Use the browser's print dialog (you choose "Save as PDF")
    window.print();
  });
});