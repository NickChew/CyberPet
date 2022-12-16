class pet {
  constructor() {
    this.petName = petName;
    this.health = 100;
    this.hungry = 100;
  }

  //Method
  feed() {
    this.hungry <= 5;
    this.health <= 10;
  }
}

document.getElementById("submitBtn").addEventListener("click", () => {
  let chosenAnimal = null;

  document.querySelectorAll(".choice").forEach((element) => {
    if (element.checked) {
      chosenAnimal = element.value;
    }
  });
});

if (chosenAnimal === "cat") {
  console.log("THE CAT HEALTH STUFF ETC");
} else if (chosenAnimal === "Dog") {
  console.log("THE DOG HEALTH STUFF ETC");
} else if (chosenAnimal === "Rabbit") {
  console.log("THE Rabbit HEALTH STUFF ETC");
} else if (chosenAnimal === "Parrot") {
  console.log("THE PARROT HEALTH STUFF ETC");
}
