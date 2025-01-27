function calculate() {
    const dataInput = document.getElementById('data').value;
    const confidenceLevel = parseFloat(document.getElementById('confidence').value);
    const data = dataInput.split(',').map(Number).filter(n => !isNaN(n));

    if (data.length === 0) {
        alert("Por favor, introduce datos válidos.");
        return;
    }

    const mean = data.reduce((a, b) => a + b);