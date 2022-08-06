//simple interest calculate:::::

function simpleInterest(principleAmount, time, rateOfInterest) {
    const interest = (principleAmount * rateOfInterest * time) / 100;
    return interest;
}

const interestIs = simpleInterest(1000, 2, 5);
console.log(interestIs);