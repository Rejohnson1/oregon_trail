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
            }
            else if (this.food < 20) {
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
            if (this.passengerArray.length < this.capacity && Math.random() > .5) {
                this.passengerArray.push(traveler);
                return "added";
            }
            else {
                return "sorry";
            }
        };
        Wagon.prototype.isQuarantined = function () {
            return this.passengerArray.some(function (traveler) { return !traveler.isHealthy; });
            //javascript for each loop - uses "let" and "of"
            // for (let traveler of this.passengerArray) {
            //     if (!traveler.isHealthy) {
            //         return true
            //     }
            // }
            // return false
        };
        Wagon.prototype.getFood = function () {
            return this.passengerArray
                .map(function (traveler) { return traveler.getfood(); })
                .reduce(function (acc, val) { return acc + val; });
        };
        return Wagon;
    }());
    //  alt version
    // let sum: number = 0
    // for (let traveler of this.passenterArray) {
    //  sum += traveler.food
    /*
     Create wagon with an empty passenger list and a capacity of 4.
     Make 3 of 5 the travelers eat by calling their eat methods
     Make the remaining 2 travelers hunt
     Run the isQuarantined method for the wagon
     Run the getFood method for the wagon
     the return values of all the methods should be displayed in the console using console.log()
     the console.log statements should not live inside any methods on the objects
    */
    var wagon = new Wagon(4, []);
    var travelerOne = new Traveler(60, "Axl", true);
    wagon.addPassenger(travelerOne);
    travelerOne.eat();
    console.log("Name: " + travelerOne.name + "  Food: " + travelerOne.food + "  Health Status: " + travelerOne.isHealthy); //need to add whether they were added to the wagon or not
    var travelerTwo = new Traveler(70, "Slash", true);
    wagon.addPassenger(travelerTwo);
    travelerTwo.eat();
    console.log("Name: " + travelerTwo.name + "  Food: " + travelerTwo.food + "  Health Status: " + travelerTwo.isHealthy);
    var travelerThree = new Traveler(80, "Duff", true);
    wagon.addPassenger(travelerThree);
    travelerThree.hunt();
    console.log("Name: " + travelerThree.name + "  Food: " + travelerThree.food + "  Health Status: " + travelerThree.isHealthy);
    var travelerFour = new Traveler(90, "Izzy", true);
    wagon.addPassenger(travelerFour);
    travelerFour.hunt();
    console.log("Name: " + travelerFour.name + "  Food: " + travelerFour.food + "  Health Status: " + travelerFour.isHealthy);
    var travelerFive = new Traveler(100, "Steven", true);
    wagon.addPassenger(travelerFive);
    travelerFive.eat();
    console.log("Name: " + travelerFive.name + "  Food: " + travelerFive.food + "  Health Status: " + travelerFive.isHealthy);
    console.log(wagon.passengerArray);
    wagon.isQuarantined();
    console.log("Is the wagon quarantined: " + wagon.isQuarantined());
    wagon.getFood();
    console.log("Wagon Food: " + wagon.getFood());
})();
