// Loops
// 1. for loop
// 2. for each
// 3. while
// 4. map

// 1. for loop

const studentsArray = [
  {id: 1, name: "John", field: "Doctor"},
  {id: 2, name: "Nelly", field: "software engineer"},
  {id: 3, name: "Jason", field: "Doctor"},
  {id: 4, name: "Sean", field: "software engineer"},
  {id: 5, name: "Michael", field: "Doctor",}
]
// set counter ; 
for(let i = 0; i < studentsArray.length; i = i + 1) {
  console.log(studentsArray[i].id)
}


// 2. for each

studentsArray.forEach((item, index) => {
  console.log(index, item)
})


// 3. Map
const newArray = studentsArray.map((item, index) => {
  console.log(index, item)
})

// map one liner
studentsArray.map(() => `<h2> item ${item.field}</h2>`)
