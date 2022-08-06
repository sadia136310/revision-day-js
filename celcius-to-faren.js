// ১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 

function celciusToFaren(celcius) {
    const faren = (celcius * 9 / 5) + 32
    return faren;
}
const myFaren = celciusToFaren(37);
console.log(myFaren);