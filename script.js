// for(let i = 1; i <= 31; i++) {
//     console.log(`"${i}",`);
// }

let dayArray = [];
function createDayArray() {
  for (let i; i <= 31; i++) {
    let day = {
      id: i,
      monthName: "",
      count: 0,
    };
    dayArray.push(day);
  }
}
createDayArray();

