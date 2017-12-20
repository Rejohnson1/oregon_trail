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
                if(this.food < 20){
                    this.isHealthy = false;
                }
            } else {
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
            let message: string = "sorry";
            if (this.passengerArray.length < this.capacity) {
                this.passengerArray.push(traveler);
                message = "added";
            }
            return message;
        };

        isQuarantined() { 
            return this.passengerArray.some(traveler => !traveler.isHealthy)
         }
        
        getFood(): number {
            let sum: number = 0;
            for (let traveler of this.passengerArray) {
                sum += traveler.food;
            }
            return sum;
        };
     }
        
    const wagon = new Wagon(4, []);
    const travelerOne = new Traveler(Math.round(Math.random() * 100), "Axl", true);
    const travelerTwo = new Traveler(Math.round(Math.random() * 100), "Slash", true);
    const travelerThree = new Traveler(Math.round(Math.random() * 100), "Duff", true);
    const travelerFour = new Traveler(Math.round(Math.random() * 100), "Izzy", true);
    const travelerFive = new Traveler(Math.round(Math.random() * 100), "Steven", true);

    travelerOne.eat()
    travelerTwo.eat()
    travelerThree.eat()
    travelerFour.hunt()
    travelerFive.hunt()
    console.log(`Name: ${travelerOne.name}  Food: ${travelerOne.food} Health: ${ travelerOne.isHealthy}`); 
    console.log(`Name: ${travelerTwo.name}  Food: ${travelerTwo.food} Health: ${ travelerTwo.isHealthy}`);
    console.log(`Name: ${travelerThree.name}  Food: ${travelerThree.food} Health: ${travelerThree.isHealthy}`);
    console.log(`Name: ${travelerFour.name}  Food: ${travelerFour.food} Health: ${travelerFour.isHealthy}`);
    console.log(`Name: ${travelerFive.name}  Food: ${travelerFive.food} Health: ${travelerFive.isHealthy}`);

    let passengers = [travelerOne, travelerTwo, travelerThree, travelerFour, travelerFive];
     for (let passenger of passengers) {
         if (Math.random() > 0.5) {
             console.log(`${passenger.name} ${wagon.addPassenger(passenger)}`);
         } else {
             console.log(`${passenger.name} is walking`)
         }
     }

   //console.log(passengers)

    console.log(`Is the wagon quarantined: ${wagon.isQuarantined()}`);

    console.log(`Wagon Food: ${wagon.getFood()}`);

})();