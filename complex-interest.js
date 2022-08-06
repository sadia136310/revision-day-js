// complex interest calculate ::::

function complexInterest(principleAmount, time, rateOfInterest) {
    // A = P(1 + r / n)nt
    const interest = principleAmount * (1 + (rateOfInterest / 100));
    return interest;
}

const interestIs = complexInterest(1000, 2, 5);
console.log(interestIs);