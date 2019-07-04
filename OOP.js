let teslaX = {};
teslaX.make = 'Tesla';
teslaX.model = 'X';
teslaX.color = 'black';
teslaX.price = 150000;
teslaX.isAvailable = true;
teslaX.beep = beep;
teslaX.beep();

let mazda6 = {
  make: 'Mazda',
  model: '6',
  color: 'red',
  price: 18000,
  isAvailable: true,
  beep: beep
};
mazda6.beep();

function beep() {
  console.log(this.make + ' ' + this.model + ' beep-beep');
}

function Car(make, model, color, price,isAvailable) {
  this.make = make;
  this.model = model;
  this.color = color;
  this.price = price;
  this.isAvailable = isAvailable;
  // this.beep = beep;
}
Car.prototype.beep = beep;

let audiR8 = new Car('Audi', 'R8', 'white', 200000, true);
audiR8.beep();
console.log(teslaX);
console.log(teslaX.__proto__);
console.log(audiR8);
console.log(audiR8.__proto__);

class SuperCar {
  constructor(make, model, color,     price,isAvailable) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.price = price;
    this.isAvailable = isAvailable;
  }
  beep() {
    console.log(this.make + ' ' +   this.model + ' beep-beep');
  }
}

let bugattiVeyron = new SuperCar(
  'Bugatti', 'Veyron', 'silver', 500000, true
)
bugattiVeyron.beep();
console.log(bugattiVeyron);

let bugattiChiron = Object.create(bugattiVeyron);
bugattiChiron.model = 'Chiron';
bugattiChiron.price = 2500000;
bugattiChiron.beep();
console.log(bugattiChiron.__proto__.__proto__);

const bmwM5JSON = `{
  "make": "BMW",
  "model": "M5",
  "color": "blue",
  "price": 60000,
  "isAvailable": true
}`;

let bmwM5 = JSON.parse(bmwM5JSON);
bmwM5.beep = beep;
bmwM5.beep();
console.log(bmwM5);
