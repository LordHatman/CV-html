// script.js
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('printPdfBtn');
  if (!btn) return;

  btn.addEventListener('click', function () {
    const cvElement = document.querySelector('.page');
    if (!cvElement) return;

    const opt = {
      margin: 0,
      filename: 'Sean_OHalloran_CV.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['css', 'legacy', 'avoid-all'] }
    };

    html2pdf().set(opt).from(cvElement).save();
  });
});