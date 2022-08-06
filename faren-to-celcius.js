// 2. তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 
function farenToCencius(faren) {
    const celcius = (faren - 32) * 5 / 9
    return celcius;
}
const myCelcius = farenToCencius(98);
console.log(myCelcius);