const optionsBtns = document.querySelectorAll(".options button");
const optionsinput = document.querySelector(".options input").value;
const errMessage = document.querySelector(".err-msg");

const bill = document.getElementById("bill");
const people = document.getElementById("numOfPeople");

const resultPerson = document.querySelector(".result-person");
const resultTotal = document.querySelector(".result-total");

const resetBtn = document.querySelector(".reset");

optionsBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    calculateTip(btn.textContent);
  });
});

function calculateTip(tip) {
  const billAmount = bill.value;
  const numOfPeople = people.value;

  if (numOfPeople === "0") {
    people.style.border = "4px solid #ff944d";
    errMessage.style.display = "inline-block";
    return;
  } else {
    errMessage.style.display = "none";
    people.style.border = "none";
  }

  console.log(billAmount, numOfPeople);
  const tipAmoutPerPerson = (+billAmount * tip) / 100;
  const tipTotalPerPerson = tipAmoutPerPerson * +numOfPeople;
  addDomValue(tipAmoutPerPerson, tipTotalPerPerson);
}

function addDomValue(amountperson, totalPerson) {
  resultPerson.textContent = `$${amountperson}`;
  resultTotal.textContent = `$${totalPerson}`;
}

resetBtn.addEventListener("click", () => {
  bill.value = "";
  people.value = "0";
  resultPerson.textContent = `$${0.0}`;
  resultTotal.textContent = `$${0.0}`;
});
