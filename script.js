const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
];
// 1. Print Developers
function printDeveloper() {
    const res = data.filter((e) => (e.profession == 'developer'))
    console.log(res)

}

// 2. Add Data
function addData() {
data.forEach((e)=>{e.country="Bharat"})
console.log(data);
}

// 3. Remove Admins
function removeAdmin() {
    // const res = data.filter((e) => (e.profession !== 'admin'))
    // console.log(res)

for (let i = 0; i < data.length; i++) {
    const e = data[i];
    if (e.profession == 'admin') {
        return delete e.profession
    }
console.log(data);
}
}

// 4. Concatenate Array
function concatenateArray() {
    const cusArray = [];
    cusArray.push(data);
    console.log(cusArray);
}

// 5. Average Age
function averageAge() {
    let filteredData = data.filter((e) => e.age)
   let  avg = filteredData.reduce((r, c) => r + c.age, 0) / filteredData.length;      
console.log(avg);
}


// 6. Age Check
function checkAgeAbove25() {
    const res = data.filter((e) => (e.age > 25))
    console.log(res)
}


// 7. Unique Professions
function uniqueProfessions() {
for (let i = 0; i < data.length; i++) {
    const element = data[i].profession;
    console.log(element);
}
}

// 8. Sort by Age
function sortByAge() {
data.sort((a,b)=>a.age-b.age)
console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
    const res = data.filter((e) => {
        if(e.name == 'john'){
          return  e.profession = 'manager'
        }
    })
    console.log(data)
}


// 10. Profession Count
function getTotalProfessions() {
    let counter = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].profession) 
      counter++;
    }
    console.log(counter);
}