const student1 = {
  name: "move",
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

const student3 = {
  name: "Khrys",
  in: "Ukraine",
  isAlive: true,
  latinLanguage: false,
  moveBack() {
    console.log(this);
    this.in = "Netherlands";
  },
};

// this <- keyword has 2 possible scopes (we'll analyze the second further down the line)
console.log(`${student3.name} was in ${student3.in}`);
student3.moveBack();
console.log(`${student3.name} is in the ${student3.in}`);

const BOARD_SIZE = 16;

// const player1 = {
//   name: "Brittney",
//   money: 200,
//   startingPosition: 0,
//   sayHi() {
//     console.log(`HEEEEY, I am ${this.name}`);
//   },
//   move() {
//     const numberOfSteps = roleDice();
//     const newSpot = this.startingPosition + numberOfSteps;
//     if (newSpot > BOARD_SIZE) {
//       this.startingPosition = 0 + newSpot - BOARD_SIZE;
//       this.money += 200;
//     } else {
//       this.startingPosition += newSpot;
//     }
//   },
// };

// const player2 = {
//   name: "Aleksandra",
//   money: 200,
//   startingPosition: 0,
//   sayHi() {
//     console.log(`HEEEEY, I am ${this.name}`);
//   },
//   move() {
//     const numberOfSteps = roleDice();
//     const newSpot = this.startingPosition + numberOfSteps;
//     if (newSpot > BOARD_SIZE) {
//       this.startingPosition = 0 + newSpot - BOARD_SIZE;
//       this.money += 200;
//     } else {
//       this.startingPosition += newSpot + 5;
//     }
//   },
// };

function roleDice() {
  return Math.ceil(Math.random() * 6);
}

// 1st round

class Player {
  constructor(name) {
    this.name = name;
    this.money = 200;
    this.position = 0;
  }
  move() {
    const numberOfSteps = roleDice();
    const newSpot = this.position + numberOfSteps;
    if (newSpot > BOARD_SIZE) {
      this.position = 0 + newSpot - BOARD_SIZE;
      this.money += 200;
    } else {
      this.position += newSpot;
    }
  }
}

class FancyPlayer {
  constructor(name, fancyHi) {
    this.name = name;
    this.fancyHi = fancyHi;
  }

  move() {
    console.log(`Nope, I'm to damned fancy. Ciao!`);
  }
  sayHi() {
    console.log(this.fancyHi);
  }
}

const player1 = new Player("brittney");
const player2 = new Player("aleksandra");
const andre = new FancyPlayer("andre", "Yahuga");
andre.move();
andre.sayHi();
