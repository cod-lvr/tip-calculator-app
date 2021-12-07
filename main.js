const billAmount = document.querySelector('#bill').value;
const numOfPeople = document.querySelector('#people').value;
const optionsBtns = document.querySelectorAll('.options button');
const optionsinput = document.querySelector('.options input').value;

const resultPerson = document.querySelector('.result-person');
const resultTotal = document.querySelector('.result-total');

optionsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn.textContent);
        calculateTip(btn.textContent);
    })
});


function calculateTip(tip) {
    console.log(tip);
    if (optionsinput === "NUMBER") {
        tip = optionsinput;
    }
    // if (billAmount.length === 0 && numOfPeople.length === 0) {
    //     return;
    // }
    console.log(billAmount, numOfPeople);
    const tipAmoutPerPerson = +billAmount * +tip /100 ;
    const tipTotalPerPerson = tipAmoutPerPerson * +numOfPeople;
    console.log(tipAmoutPerPerson, tipTotalPerPerson);
   addDomValue(tipTotalPerPerson, tipTotalPerPerson);
}

function addDomValue(amountperson, totalPerson) {
    resultPerson.textContent = amountperson;
    resultTotal.textContent = totalPerson;
}