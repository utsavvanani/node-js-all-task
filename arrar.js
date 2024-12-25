var data = [
    {
        id: 1,
        name: "John",
        age: 25,
    },
    {
        id: 2,
        name: "Jane",
        age: 30,
    },
    {
        id: 3,
        name: "Bob",
        age: null,
    },
    {
        id: 4,
        name: "Alice",
        age: undefined,
    },
    {
        id: 5,
        name: null,
        age: null,
    },
    {
        id: 6,
        name: "Charlie",
        age: 0,
    }

];


const filterdata = data.filter((el)=>{
   
    return el.age !== undefined || el.age !== null || el.age !== 0 || el.age !== "" || el.age !== " ";  
})

console.log(filterdata);