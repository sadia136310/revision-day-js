var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

// ৬.উপরে এর  এরে  থেকে যেখানে  ৫ টা  ফ্রেন্ড  এর  নাম  এর  মধ্যে   বড়ো  নাম  কোন  ফ্রেন্ড  এর  খুঁজে  বের  করা

// var temp = friends[0];

// for (var i = 0; i < friends.length; i++) {

//     var element = friends[i];
//     if (element.length > temp.length) {
//         temp = element;
//     }
// }

// console.log(temp);




// var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
// // 8. উপরের  আরে  থেকে  সব  থেকে  বড়ো  নম্বর  কোনটা  বের  করো
// var temp = numbers[0];
// for (var i = 0; i < numbers.length; i++) {
//     var element = numbers[i];
//     if (element > temp) {
//         temp = element;
//     }
// }
// console.log(temp);



// var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

// ৭. উবের  পরের  এরে  থেকে  ডুপ্লিকেট  নম্বর  গুলা  বাদ  দিয়ে  উনিক  নম্বর  গুলা বের  করতে    হবে 
function removeDuplicate(numbers) {

    const unique = []
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i];
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}
const numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

const numIs = removeDuplicate(numbers);
console.log(numIs);