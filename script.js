import data from './data.json' with { type: "json" };

const summaryBadges = document.querySelectorAll('.summary-badge');
const resultBadge = document.querySelector('.result-score span:first-of-type');

function setDatatoTarget(arrayData, targetArray) {
    let total = 0;
    arrayData.forEach(function(e, index) {
        total += e.score;
        targetArray[index].children[0].children[0].src = e.icon;
        targetArray[index].children[0].children[1].innerText = e.category;
        targetArray[index].children[1].children[0].innerText = e.score;
    });
    resultBadge.innerHTML = Math.round(total / targetArray.length);
}

setDatatoTarget(data, summaryBadges);