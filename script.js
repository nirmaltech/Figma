
const totalPriceElement = document.getElementById("total-price");
const radioButtons = document.querySelectorAll("input[name='unit']");

const prices = {
  unit1: "$10.00 USD",
  unit2: "$18.00 USD",
  unit3: "$24.00 USD",
};

radioButtons.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    const selected = event.target.id;
    totalPriceElement.textContent = prices[selected];
  });
});
