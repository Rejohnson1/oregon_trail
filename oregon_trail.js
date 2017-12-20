(function () {
    /*
    * Interfaces
    */
    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    var Traveler = /** @class */ (function () {
        function Traveler(food, name, isHealthy) {
            this.food = food;
            this.name = name;
            this.isHealthy = isHealthy;
        }
        Traveler.prototype.getisHealthy = function () {
            return this.isHealthy;
        };
        Traveler.prototype.setisHealthy = function (isHealthy) {
            this.isHealthy = isHealthy;
        };
        Traveler.prototype.getfood = function () {
            return this.food;
        };
        Traveler.prototype.setfood = function (food) {
            this.food = food;
        };
        Traveler.prototype.hunt = function () {
            if (Math.random() > .5) {
                this.food = this.food + 100;
            }
            return this.food;
        };
        Traveler.prototype.eat = function () {
            if (this.food >= 20) {
                this.food = this.food - 20;
                if (this.food < 20) {
                    this.isHealthy = false;
                }
            }
            else {
                this.isHealthy = false;
            }
            return this.isHealthy;
        };
        return Traveler;
    }());
    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    var Wagon = /** @class */ (function () {
        function Wagon(capacity, passengerArray) {
            this.capacity = capacity;
            this.passengerArray = passengerArray;
        }
        Wagon.prototype.addPassenger = function (traveler) {
            var message = "sorry";
            if (this.passengerArray.length < this.capacity) {
                this.passengerArray.push(traveler);
                message = "added";
            }
            return message;
        };
        ;
        Wagon.prototype.isQuarantined = function () {
            return this.passengerArray.some(function (traveler) { return !traveler.isHealthy; });
        };
        Wagon.prototype.getFood = function () {
            var sum = 0;
            for (var _i = 0, _a = this.passengerArray; _i < _a.length; _i++) {
                var traveler = _a[_i];
                sum += traveler.food;
            }
            return sum;
        };
        ;
        return Wagon;
    }());
    var wagon = new Wagon(4, []);
    var travelerOne = new Traveler(Math.round(Math.random() * 100), "Axl", true);
    var travelerTwo = new Traveler(Math.round(Math.random() * 100), "Slash", true);
    var travelerThree = new Traveler(Math.round(Math.random() * 100), "Duff", true);
    var travelerFour = new Traveler(Math.round(Math.random() * 100), "Izzy", true);
    var travelerFive = new Traveler(Math.round(Math.random() * 100), "Steven", true);
    travelerOne.eat();
    travelerTwo.eat();
    travelerThree.eat();
    travelerFour.hunt();
    travelerFive.hunt();
    console.log("Name: " + travelerOne.name + "  Food: " + travelerOne.food + " Health: " + travelerOne.isHealthy);
    console.log("Name: " + travelerTwo.name + "  Food: " + travelerTwo.food + " Health: " + travelerTwo.isHealthy);
    console.log("Name: " + travelerThree.name + "  Food: " + travelerThree.food + " Health: " + travelerThree.isHealthy);
    console.log("Name: " + travelerFour.name + "  Food: " + travelerFour.food + " Health: " + travelerFour.isHealthy);
    console.log("Name: " + travelerFive.name + "  Food: " + travelerFive.food + " Health: " + travelerFive.isHealthy);
    var passengers = [travelerOne, travelerTwo, travelerThree, travelerFour, travelerFive];
    for (var _i = 0, passengers_1 = passengers; _i < passengers_1.length; _i++) {
        var passenger = passengers_1[_i];
        if (Math.random() > 0.5) {
            console.log(passenger.name + " " + wagon.addPassenger(passenger));
        }
        else {
            console.log(passenger.name + " is walking");
        }
    }
    //console.log(passengers)
    console.log("Is the wagon quarantined: " + wagon.isQuarantined());
    console.log("Wagon Food: " + wagon.getFood());
})();
