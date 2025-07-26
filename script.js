function calculateThresholds() {
    const maxPoints = parseFloat(document.getElementById('maxPoints').value);
    if (isNaN(maxPoints) || maxPoints < 0) {
        alert('Wprowadź poprawny numer!');
        return;
    }

    const thresholds = [
        { grade: 6, percent: 95},
        { grade: 5, percent: 90},
        { grade: 4, percent: 75},
        { grade: 3, percent: 50},
        { grade: 2, percent: 35},
        { grade: '2 dostosowanie', percent: 25}
    ];

    let resultHTML = `<h2>Próg:</h2><ul>`;
    thresholds.forEach(t => {
        const pointValue = (t.percent / 100) * maxPoints;
        resultHTML += `<li>Ocena ${t.grade}: od ${Math.ceil(pointValue)} punktów</li>`;

    });
    resultHTML += `</ul>`;

    document.getElementById('result').innerHTML = resultHTML;
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('maxPoints');
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      calculateThresholds();
    }
  });
});