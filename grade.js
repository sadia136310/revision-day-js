// ৩.কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ + পাবে নাকি অন্য কোন গ্রেড পাবে। 

function gradeCalculation(marks) {
    if (marks >= 80 && marks <= 100) {
        console.log('A+');
    }
    else if (marks >= 70 && marks <= 80) {
        console.log('A');
    }
    else if (marks >= 60 && marks <= 70) {
        console.log('B');
    }
    else if (marks >= 50 && marks <= 60) {
        console.log('C');
    }
    else if (marks >= 40 && marks <= 50) {
        console.log('D');
    }
    else {
        console.log('Fail');
    }
}
const myGrade = gradeCalculation(75);
console.log(myGrade);