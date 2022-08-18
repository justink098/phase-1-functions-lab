function distanceFromHqInBlocks(someValue) {
    let blocks =  someValue - 42;
    if (someValue > 42){
        return blocks
    }else (someValue < 42);{
        return 42 - someValue
    }//returns the number of blocks given a value
  }// Code your solution in this file!


function distanceFromHqInFeet(someValue) {
  let feet = distanceFromHqInBlocks(someValue);
  if  (true){
    return feet * 264
  }

  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination){
        let sum = start - destination
        return sum * 264
    } else if (start < destination) {
        let sum = destination - start
        return sum * 264
    }//returns the number of feet traveled
  }


  function calculatesFarePrice(start, destination) {
    let fee = distanceTravelledInFeet(start, destination)
    let fare = fee - 400
    if(fee < 400){
        return 0
    }else if (fare < 2000){
        return fare * 2/100
    }else if (2000 < fee > 2500){
        return 25
    }else if (fee > 2500){
        return 'cannot travel that far'
    }//returns the fare for the customer
  }