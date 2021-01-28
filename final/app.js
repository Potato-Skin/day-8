// OOP - Object Oriented Programming
// OOP is one of the biggest paradigms in computer programming
// the main idea is the encapsulation of login

// lets see the problem first:
const student1 = {
  name: "Tadej",
  in: "Canary Islands",
  isAlive: true,
  latinLanguage: false,
};

const student2 = {
  name: "Luis",
  in: "Madrid",
  isAlive: true,
  latinLanguage: true,
};

// for now, this is fine
// but lets now add some logic:
// in objects you can have have functions

const student3 = {
  name: "Khrystyna",
  in: "Ukraine",
  isAlive: true,
  latinLanguage: false,
  moveBack() {
    this.in = "Netherlands";
  },
};

console.log(`${student3.name} right now is in ${student3.in}`);
student3.moveBack();
console.log(`${student3.name} right now is in ${student3.in}`);

// WOW, a lot of syntax there, what is that moveBack thing there, and what is that `this` keyword. Lets decypher it.

// move back is a key in the student3 object and the `this` keyword, in that context is referencing student3.

// lets envision the worst game ever created - monopoly:

const BOARD_SIZE = 16;

// const player1 = {
//   name: "brittney",
//   money: 200,
//   startingPosition: 0,
// };
// const player2 = {
//   name: "ola",
//   money: 200,
//   startingPosition: 0,
// };

function roleDice() {
  return Math.ceil(Math.random() * 6);
}

// we have two players, a board with 16 places to walk, and a role dice function that gives out a number between 1 and 6

// how would we code the movement of the players?

// we would have to add the same function several times to each player.

// const player1 = {
//   name: "brittney",
//   money: 200,
//   startingPosition: 0,
//   move() {
//     this.startingPosition += roleDice();
//   },
// present() {
// console.log(`Hey there, I am ${this.name}`)
// }
// };

// const player2 = {
//   name: "ola",
//   money: 200,
//   startingPosition: 0,
//   move() {
//     this.startingPosition += roleDice();
//   },
// present() {
// console.log(`Hey there, I am ${this.name}`)
// }
// };

// now we are getting repetition. But we can make this funciton even more complex. what happens whenever the position is higher than the boad itself, what should we do?
// maybe we should reset the starting position to 0 + whatever is missing and add money

// const player1 = {
//   name: "brittney",
//   money: 200,
//   startingPosition: 0,
//   move() {
//     const steps = roleDice();
//     const newSpot = this.startingPosition + steps;
//     if (newSpot > BOARD_SIZE) {
//       this.startingPosition = 0 + newSpot - BOARD_SIZE;
//       this.money += 200;
//     } else {
//       this.startingPosition = newSpot;
//     }
//   },
// present() {
// console.log(`Hey there, I am ${this.name}`)
// }
// };

// const player2 = {
//   name: "ola",
//   money: 200,
//   startingPosition: 0,
//   move() {
//     const steps = roleDice();
//     const newSpot = this.startingPosition + steps;
//     if (newSpot > BOARD_SIZE) {
//       this.startingPosition = 0 + newSpot - BOARD_SIZE;
//       this.money += 200;
//     } else {
//       this.startingPosition = newSpot;
//     }
//   },
// present() {
// console.log(`Hey there, I am ${this.name}`)
// }
// };

// these constraints are the same for all players, theoretically, right?
// so how can we encapsulate this logic and just make it once?
// OOP -> classes

class Player {
  constructor(name) {
    this.name = name;
    this.money = 200;
    this.startingPosition = 0;
  }

  move() {
    const steps = roleDice();
    const newSpot = this.startingPosition + steps;
    if (newSpot > BOARD_SIZE) {
      this.startingPosition = 0 + newSpot - BOARD_SIZE;
      this.money += 200;
    } else {
      this.startingPosition = newSpot;
    }
  }
  present() {
    console.log(`Hey there, I am ${this.name}`);
  }
}

const player1 = new Player("brittney");
const player2 = new Player("ola");

// now the constraints are the same, and all the logic is defined for all players

player1.move();
player2.move();
player1.present();

// LETS go back to the thing that was said above - the theoretically

class Cheater extends Player {
  constructor(name) {
    super(name);
    this.money = 10000;
  }

  move() {
    const steps = roleDice();
    const newSpot = this.startingPosition + steps;
    if (newSpot > BOARD_SIZE) {
      this.startingPosition = 0 + newSpot - BOARD_SIZE;
      this.money += 200;
    } else {
      this.startingPosition = newSpot;
    }

    this.money += 10;
  }
}

const cheater = new Cheater("Filipe");
cheater.move();
cheater.move();
cheater.move();
cheater.move();
cheater.move();
console.log("cheater:", cheater);
cheater.present();

const potatoSkins = [
  "aleksandra",
  "filipe",
  "frankie",
  "gizem",
  "john",
  "khrystyna",
  "tadej",
  "tom",
  "ola",
  "brittney",
  "hugo",
  "luca janssens",
  "luca manzon",
  "luis",
  "nelli",
  "andre",
];

const allPlayers = potatoSkins.map(function (player) {
  return new Player(player);
});
console.log("allPlayers:", allPlayers);

allPlayers.forEach(function (user) {
  user.move();
  user.move();
  user.move();
  user.move();
  user.move();
  user.move();
  user.move();
  user.move();
  user.move();
  user.move();
  user.move();
  user.move();
  user.move();
  user.move();
  user.move();
});
console.log("allPlayers:", allPlayers);

// the idea behind using classes is that we can really have the whole logic in one main area, and then deal with smaller chunks

class Human {
  constructor() {
    this.lives = 1;
  }

  screamYolo() {
    console.log(`YOLO`);
  }
}

class NotSmartHumanBeing extends Human {
  screamYolo() {
    console.log(
      `Sounds right, lets try to become target at atomic detonation target practices`
    );
  }
}

// the class above is literally the same as Human, but the screamYolo is overriden
// we dont need to write constructor or super -> because they are literally the same

class SmartHumanBeing extends Human {
  constructor(name) {
    super(); // here it gets all the properties from the Human
    this.name = name;
  }

  screamYolo() {
    console.log(
      `Listen, I am a smart human being. Smart human beings dont scream YOLO`
    );
  }
}
// here, similar to Human. Different screamYolo method, and now takes a name in its construction
// normal human: const human = new Human()
// smarthuman: const smartHuman = new SmartHuman("Jellyfish")

class WantsToBeSmarter extends SmartHumanBeing {
  constructor(isStudying, name) {
    super(name); //needs to be in order. smart human being takes `name` in its constructor
    this.isStudying = isStudying;
  }

  wantsToParty() {
    console.log("Not really. I need all my brain cells");
  }
}

// const wantsToBeSmarter = new WantsToBeSmarter(true, "Octopus")
// methods available: screamYolo, name, isStudying, wantsToParty

class DoesntHaveTimeToBeSmarter extends SmartHumanBeing {
  /* 
   constructor(name) {
     super(name) -> to call human and smart human being
   }
   */
  isBuildingFuture() {
    return true;
  }
}

//  once again, no constructor, because it has the same logic and no extra property:
// const elonMusk = new DoesntHaveTimeToBeSmarter("Elon")
// methods and properties: screamYolo, name, isBuildingFuture

class Student extends WantsToBeSmarter {
  constructor(isStudying, name, field) {
    super(isStudying, name);
    this.field = field;
  }
}

class Ironhacker extends Student {
  constructor(name, favoriteLab) {
    super(true, name, "webdev");
    this.favoriteLab = favoriteLab;
  }

  graduate() {
    console.log("On my way to!");
  }
}

class BreakoutRoom {
  constructor() {
    this.room = [
      new Ironhacker("hugo", "functions and arrays"),
      new Ironhacker("nelli", "instagram clone"),
    ];
  }
}

const breakoutRoom = new BreakoutRoom();

breakoutRoom.room.forEach(function (student) {
  student.screamYolo();
});
