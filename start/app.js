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
    console.log("MOVING");
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

const player1 = new Player("brittney");
const player2 = new Player("aleksandra");

class Cheater extends Player {
  constructor(name, startingMoney) {
    super(name);
    this.position = 10;
    this.money = startingMoney;
  }
}

const liarCheater = new Cheater("Filipe", 500);

class Human {
  constructor() {
    this.lives = 1;
  }

  screamYolo() {
    console.log(`YOLO`);
  }
}

const human = new Human();
human.screamYolo();

class NotSmartHuman extends Human {
  screamYolo() {
    console.log(
      `Sounds right, lets try to become target at atomic detonation target practices`
    );
  }
}

const notSoSmart = new NotSmartHuman();
console.log("notSoSmart:", notSoSmart);
notSoSmart.screamYolo();

class SmartHuman extends Human {
  constructor(name) {
    super();
    this.name = name;
  }
}

class VerySmartHuman extends SmartHuman {
  saySmartThing() {
    console.log(`Uuuuh, elementary, uuuh, indeed`);
  }
}

const watson = new VerySmartHuman("John Watson");
console.log("watson:", watson);
// VerySmartHuman (saySmartThing M., lives P., name P.)
// Very Smart Human comes from Smart HUman
// Smart Human (name P., lives P.)
// Smart Human comes from Human
// Human (lives P)

// A new property (isStudying)
class WantsToBeSmarter extends VerySmartHuman {
  constructor(isStudying, name) {
    super(name);
    this.isStudying = isStudying;
  }

  wantsToParty() {
    return false;
  }
}

// WantsToBeSmarter (saySmartThing M., wantsToParty M., lives P., name P., isStudying P.)

class DoesntHaveTimeToBeSmarter extends VerySmartHuman {
  isBuildingFuture() {
    return true;
  }
}

// DoesntHaveTimeToBeSmarter (saySmartThing M., isBuildingFuture M., lives P., name P.,)

class Student extends WantsToBeSmarter {
  // field
  constructor(name, field) {
    super(true, name);
    this.field = field;
  }
}

const newStudent = new Student("nelli", "webdev");
console.log("newStudent:", newStudent);

class Ironhacker extends Student {
  constructor(name, favoriteLab) {
    super(name, "webdev");
    this.favoriteLab = favoriteLab;
  }
}

const ironhacker = new Ironhacker("hugo", "functions and arrays");
const gizem = new Ironhacker("gizem", "clue");
console.log("gizem:", gizem);

class BreakoutRoom {
  constructor() {
    this.room = [
      new Ironhacker("brittney", "instagram clone"),
      new Ironhacker("tom", "clue"),
      new Ironhacker("luca manzo", "css spotify"),
    ];
  }
}

console.log(new BreakoutRoom());

/* 
   Connect Four
   class -> Board
   class (2 instances) -> Player
   class Little Circles
*/
