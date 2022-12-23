// creating global variables for pet and the interval
let pet = null;
let interval = null;
// let special=
class Cyberpet {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.hunger = 100;
    this.thirsty = 100;
  }

  drink() {
    this.health += 10;
    this.thirsty += 15;
  }

  eat() {
    this.hunger += 10;
    this.thirsty -= 7;
    this.health += 15;
  }
}

class Dog extends Cyberpet {
  constructor(name) {
    super(name);
    this.happy = 100;
  }

  playFetch() {
    this.happy += 20;
    this.thirsty -= 5;
    this.hunger -= 5;
  }
}

class Cat extends Cyberpet {
  constructor(name) {
    super(name);
    this.happy = 100;
  }

  stroke() {
    this.happy += 10;
    this.hunger -= 5;
    this.thirsty -= 5;
  }
}

class Rabbit extends Cyberpet {
  constructor(name) {
    super(name);
    this.happy = 100;
  }

  groom() {
    this.happy += 10;
    this.hunger -= 5;
    this.thirsty -= 5;
  }
}
class Parrot extends Cyberpet {
  constructor(name) {
    super(name);
    this.happy = 100;
  }

  speech() {
    this.happy += 10;
    this.hunger -= 5;
    this.thirsty -= 5;
  }
}

// function to update stats
const updateStats = () => {
  document.getElementById("hungerStat").textContent = `Hunger: ${pet.hunger}`;
  document.getElementById(
    "thirstyStat"
  ).textContent = `Thirsty: ${pet.thirsty}`;
  document.getElementById("happyStat").textContent = `Happy: ${pet.happy}`;
};

// when feed button is clicked run the eat method from the pet class and update stats
document.querySelector("#feedBtn").addEventListener("click", () => {
  pet.eat();
  updateStats();
});

document.querySelector("#thirstBtn").addEventListener("click", () => {
  pet.drink();
  updateStats();
});

document.querySelector("#specialBtn").addEventListener("click", () => {
  pet.special();
  updateStats();
});

// gets the form and adds the event listener to it that runs on the forms submit
document.getElementById("form").addEventListener("submit", (event) => {
  // this stops the form redirecting to anothe page
  event.preventDefault();
  // storing the users choice in variable
  let chosenPet = "dog";

  // checking the radio buttons to see what the user selected and store
  // setcted value in chosenPet variable
  document.querySelectorAll(".choice").forEach((element) => {
    if (element.checked) {
      chosenPet = element.value;
    }
  });
  // get the input name value
  let petName = document.getElementById("petName").value;

  // create dog or cat based on user choice and pass typed name to class
  if (chosenPet === "dog") {
    pet = new Dog(petName);
    // special=playFetch
    console.log("THE DOG HEALTH STUFF ETC");
  } else if (chosenPet === "cat") {
    pet = new Cat(petName);
    // special=stroke
    console.log("THE CAT HEALTH STUFF ETC");
  } else if (chosenPet === "rabbit") {
    pet = new Rabbit(petName);
    // special=groom
    console.log("THE Rabbit HEALTH STUFF ETC");
  } else if (chosenPet === "parrot") {
    pet = new Parrot(petName);
    // special=speech
    console.log("THE PARROT HEALTH STUFF ETC");
  }
  // display pet name
  document.getElementById("displayPetName").textContent = pet.name;

  // start the interval to reduce stats every second
  interval = setInterval(() => {
    pet.thirsty -= 10;
    pet.hunger -= 10;
    pet.happy -= 10;

    // runs function which updates stats using JS DOM
    updateStats();

    // if stat hits 0 for hunger or thirst stop the interval and display message
    if ((pet.hunger <= 0, pet.thirsty <= 0, pet.happy <= 0)) {
      clearInterval(interval);
      document.getElementById("message").textContent = "Pet died";
    }
  }, 1000);
  // hide the form and show the pet information section
  document.getElementById("petChoiceWrapper").style.display = "none";
  document.getElementById("petWrapper").style.display = "block";
});
