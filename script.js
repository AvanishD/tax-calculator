const taxForm = document.getElementById('tax-form');
const overlayDiv = document.getElementById('overlay');
const taxAmountParagraph = document.getElementById('tax-amount');
const closeButton = document.getElementById('close-button');

taxForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const grossIncome = parseFloat(document.getElementById('gross-income').value);
    const extraIncome = parseFloat(document.getElementById('extra-income').value) || 0;
    const deductions = parseFloat(document.getElementById('deductions').value) || 0;
    const age = parseFloat(document.getElementById('age').value);

    const taxableIncome = Math.max(grossIncome + extraIncome - deductions - 800000, 0);
    let taxRate;
    if (age < 40) {
        taxRate = 0.3;
    } else if (age < 60) {
        taxRate = 0.4;
    } else {
        taxRate = 0.1;
    }

    const taxAmount = taxableIncome * taxRate;
    const totalIncome = taxableIncome - taxAmount;

    let resultText = totalIncome.toFixed(2);
    taxAmountParagraph.textContent = resultText;
    overlayDiv.style.display = "block";

    closeButton.addEventListener('click', function() {
        overlayDiv.style.display = "none";
        taxForm.reset(); 
        taxAmountParagraph.textContent = "";
    });
});
