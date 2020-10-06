let item = prompt("Please choose from the following options: \nBurger \nSteak \nSalmon \nShrimp \nChicken")
switch (item) {
  case "Burger":
    document.write("This item costs $10.00.");
    break;
  case "Steak":
    document.write("This item costs $25.00.");
    break;
  case "Salmon":
    document.write("This item costs $20.00.");
    break;
  case "Shrimp":
    document.write("This item costs $20.00.");
    break;
  case "Chicken":
    document.write("This item costs $15.00.");
    break;
  default:
    console.log("Sorry, this option is not available.");
}