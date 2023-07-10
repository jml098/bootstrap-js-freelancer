const discountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

const BACKEND_PRICE = 20.5;
const FRONTEND_PRICE = 15.5;
const ANALYSIS_PRICE = 33.6;
const DISCOUNT = 25;

function handleSubmit(e) {
  e.preventDefault();

  const inputType = parseInt(document.getElementById("inputType").value);
  const hours = parseInt(document.getElementById("inputHours").value);
  const discountCode = document.getElementById("inputCode").value;

  let price;

  if (!inputType || !hours) {
    alert("Ci sono campi non compilati!");
    return;
  }

  switch (inputType) {
    case 1:
      price = (hours * BACKEND_PRICE).toFixed(2);
      break;

    case 2:
      price = (hours * FRONTEND_PRICE).toFixed(2);
      break;

    case 3:
      price = (hours * ANALYSIS_PRICE).toFixed(2);
      break;

    default:
      break;
  }

  const discountCodeIndex = discountCodes.findIndex(
    (code) => discountCode == code
  );

  if (discountCodeIndex >= 0) {
    price *= 1 - 25 / 100;
    discountCodes.splice(discountCodeIndex, 1);
    document.getElementById("inputCode").classList.remove("text-danger");
    document.getElementById("inputCode").classList.add("text-success");
  } else {
    document.getElementById("inputCode").classList.add("text-danger");
    document.getElementById("inputCode").classList.remove("text-success");
  }

  document.getElementById("price").innerHTML = price;
}
