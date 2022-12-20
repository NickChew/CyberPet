
// creating global variables for pet and the interval
let pet = null;
let special = null;
let interval = null;
// let special=
class Cyberpet {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.hunger = 100;
        this.thirsty = 100;
        this.happy = 100;
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
        super(name)       
    }
    playFetch() {
        pet.happy += 20;
        pet.thirsty -= 5;
        pet.hunger -= 5;
    }
}

class Cat extends Cyberpet {
    constructor(name) {
        super(name)        
    }
    stroke() {
        pet.happy += 10;
        pet.hunger -= 5;
        pet.thirsty -= 5;
    }
}

class Rabbit extends Cyberpet {
    constructor(name) {
        super(name)    
    }
    groom() {
        pet.happy += 10;
        pet.hunger -= 5;
        pet.thirsty -= 5;
    }
}








class Parrot extends Cyberpet {
    constructor(name) {
        super(name)       
    }
    speech() {
        pet.happy += 10;
        pet.hunger -= 5;
        pet.thirsty -= 5;
    }
}

// function to update stats
const updateStats = () => {
    document.getElementById('hungerStat').textContent = `Hunger: ${pet.hunger}`;
    document.getElementById('thirstyStat').textContent = `Thirsty: ${pet.thirsty}`;
    document.getElementById('happyStat').textContent = `Happy: ${pet.happy}`;
}

// when feed button is clicked run the eat method from the pet class and update stats
document.querySelector('#feedBtn').addEventListener('click', () => {
    pet.eat()
    updateStats()
})

document.querySelector('#thirstBtn').addEventListener('click', () => {
    pet.drink()
    updateStats()
})

document.querySelector('#specialBtn').addEventListener('click', () => {
    special()
    updateStats()
})

// gets the form and adds the event listener to it that runs on the forms submit
document.getElementById('form').addEventListener('submit', (event) => {
    // this stops the form redirecting to anothe page
    event.preventDefault()
    // storing the users choice in variable
    let chosenPet = 'dog'

    // checking the radio buttons to see what the user selected and store 
    // setcted value in chosenPet variable
    document.querySelectorAll('.choice').forEach((element) => {
        if(element.checked) {
            chosenPet = element.value
        }
    })
















   // get the input name value
    let petName = document.getElementById('petName').value;
    document.querySelector("#ChosenPet").src =`./images/${chosenPet}.gif`
    // create dog or cat based on user choice and pass typed name to class
    if(chosenPet === "dog"){
        pet = new Dog(petName)
        special=pet.playFetch
        console.log("THE DOG HEALTH STUFF ETC");
    } else if(chosenPet === "cat") {
        pet = new Cat(petName)
        special=pet.stroke
        console.log("THE CAT HEALTH STUFF ETC");
    } else if(chosenPet === "rabbit") {
        pet = new Rabbit(petName)
        special=pet.groom
        console.log("THE Rabbit HEALTH STUFF ETC");
    } else if(chosenPet === "parrot") {
        pet = new Parrot(petName)
        special=pet.speech
        console.log("THE PARROT HEALTH STUFF ETC");
    }

    // display pet name
    document.getElementById('displayPetName').textContent = pet.name;
    // start the interval to reduce stats every second
    interval = setInterval(() => {
        pet.thirsty -= 10;
        pet.hunger -= 10;
        pet.happy -= 10;
    // runs function which updates stats using JS DOM
        updateStats();

    // if stat hits 0 for hunger thirst or Happyness stop the interval and display message
        if(pet.hunger <=0 || pet.thirsty <=0 || pet.happy <=0){
            clearInterval(interval)
            document.getElementById('message').textContent = 'Pet died'   
        }
    }, 1000);

    // hide the form and show the pet information section
    document.getElementById('petChoiceWrapper').style.display = 'none';
    document.getElementById('petWrapper').style.display = 'block';

})

