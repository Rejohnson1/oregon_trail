(function () {

    /*
    * Interfaces
    */

    //interface describing what attributes and methods a traveler should have
    interface ITraveler {
        food: number;
        name: string;
        isHealthy: boolean;

        //when implemented, There should be 50% chance to increase the traveler's food by 100.
        //return the travelers new food value
        hunt(): number;

        //when implemented, we should check to see if the traveler has a food supply of 20
        //If they do then we should consume 20 of the available food supply
        //If they don't have 20 food then we should change isHealthy to false
        //return the travelers health after attempting to eat
        eat(): boolean;

    }

    //interface describing attributes and methods a wagon should have
    interface IWagon {
        capacity: number;
        passengerArray: Traveler[];

        //when implemented, we should add the traveler to the wagon if the capacity permits
        //this function should return the string "added" on success and "sorry" on failure
        addPassenger(traveler: Traveler): string;

        //this should return true if there is at least one unhealthy person in the wagon
        //if everyone is healthy false should be returned
        isQuarantined(): boolean;

        //Return the total amount of food among all passengers of the wagon.
        getFood(): number;

    }


    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface

    class Traveler implements ITraveler {
        food: number;
        name: string;
        isHealthy: boolean;

        constructor(food: number, name: string, isHealthy: boolean) {
            this.food = food;
            this.name = name;
            this.isHealthy = isHealthy;
        }

        getisHealthy(): boolean {
            return this.isHealthy;
        }

        setisHealthy(isHealthy: boolean): void {
            this.isHealthy = isHealthy;
        }

        getfood(): number {
            return this.food;
        }

        setfood(food: number): void {
            this.food = food;
        }

        hunt(): number {
            if (Math.random() > .5) {
                this.food = this.food + 100;
            }
            return this.food
        }

        eat(): boolean {
            if (this.food >= 20) {
                this.food = this.food - 20;
            } else if (this.food < 20) {
                this.isHealthy = false;
            }
            return this.isHealthy;
        }

    }
    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    class Wagon implements IWagon {
        capacity: number;
        passengerArray: Traveler[];


        constructor(capacity: number, passengerArray: Traveler[]) {
            this.capacity = capacity;
            this.passengerArray = passengerArray;
        }

        addPassenger(traveler: Traveler): string {
            if (this.passengerArray.length < this.capacity && Math.random() > .5) {
                this.passengerArray.push(traveler)
                return "added"
            }
            else {
                return "sorry"
            }
        }

        isQuarantined() { //need to add a condition to only look at the travelers if they are on the wagon
            return this.passengerArray.some(traveler => !traveler.isHealthy)

            // for (let traveler of this.passengerArray) {
            //     if (!traveler.isHealthy) {
            //         return true
            //     }
            // }
            // return false
        }

        getFood() { //need to add a condition to only add the food for those folks on the wagon
            return this.passengerArray
                .map(traveler => traveler.getfood())
                .reduce((acc, val) => acc + val);
        }
    }

    /*
     Create wagon with an empty passenger list and a capacity of 4.
     Make 3 of 5 the travelers eat by calling their eat methods
     Make the remaining 2 travelers hunt
     Run the isQuarantined method for the wagon 
     Run the getFood method for the wagon
     the return values of all the methods should be displayed in the console using console.log()
     the console.log statements should not live inside any methods on the objects 
    */

    const wagon = new Wagon(4, []);
    const travelerOne = new Traveler(85, "Axl", true);
       wagon.addPassenger(travelerOne)
       travelerOne.eat()
       console.log(`Name: ${travelerOne.name}  Food: ${travelerOne.food}  Health Status: ${travelerOne.isHealthy}`); //need to add whether they were added to the wagon or not

    const travelerTwo = new Traveler(90, "Slash", true);
        wagon.addPassenger(travelerTwo)
        travelerTwo.eat()
        console.log(`Name: ${travelerTwo.name}  Food: ${travelerTwo.food}  Health Status: ${travelerTwo.isHealthy}`);

    const travelerThree = new Traveler(50, "Duff", true);
        wagon.addPassenger(travelerThree)
        travelerThree.hunt()
        console.log(`Name: ${travelerThree.name}  Food: ${travelerThree.food}  Health Status: ${travelerThree.isHealthy}`);

    const travelerFour = new Traveler(20, "Izzy", true);
        wagon.addPassenger(travelerFour)
        travelerFour.hunt()
        console.log(`Name: ${travelerFour.name}  Food: ${travelerFour.food}  Health Status: ${travelerFour.isHealthy}`);

    const travelerFive = new Traveler(60, "Steven", true);
        wagon.addPassenger(travelerFive)
        travelerFive.eat()
        console.log(`Name: ${travelerFive.name}  Food: ${travelerFive.food}  Health Status: ${travelerFive.isHealthy}`);

    console.log(wagon.passengerArray)

    wagon.isQuarantined()
        console.log(`Is the wagon quarantined: ${wagon.isQuarantined()}`);

    wagon.getFood()
        console.log(`Wagon Food: ${wagon.getFood()}`);

})();