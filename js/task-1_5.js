"use strict";
let deliveryCountry = prompt("Страна доставки ?");
let deliveryPrice;
let message;
if (deliveryCountry === null) {
  alert("Доставка отменена");
} else {
  let deliveryCountryTransformed = deliveryCountry.toLowerCase();
  switch (deliveryCountryTransformed) {
    case "китай":
      deliveryPrice = 100;
      break;
    case "чили":
      deliveryPrice = 250;
      break;
    case "австралия":
      deliveryPrice = 170;
      break;
    case "индия":
      deliveryPrice = 80;
      break;
    case "ямайка":
      deliveryPrice = 120;
      break;
    default:
      deliveryCountry = null;
      break;
  }
  if (deliveryCountry === null) {
    message = "В вашей стране доставка не доступна";
  } else {
    message = `Доставка в ${deliveryCountry} будет стоить ${deliveryPrice} кредитов`;
  }
}
alert(message);
