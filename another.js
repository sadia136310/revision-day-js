// write a function that will take an array and calculate the sum of odd numbers greater than 10 and less than 50 :::::
// function getSumOfOdd() {
function getSumOfOdd(numbers) {
    let sum = 0;
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] > 10 && numbers[i] < 50) {
            sum = sum + numbers[i];
        }
    }
    return sum;
}
var numbers = [11, 15, 17, 23, 49, 43, 33, 23];
var mySum = getSumOfOdd(numbers);
console.log(mySum);
