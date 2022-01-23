const books=[
    {
        booksName:"readygo0",
        ready:[
            // {unit:1,part:["A"]},
        ]
    },{
        booksName:"readygo1",
        ready:[
            {unit:1,part:["A"]},
        ]
    },{
        booksName:"readygo3",
        ready:[
            {unit:1,part:["A"]},
            {unit:2,part:["B"]},
            {unit:3,part:["C"]}
        ]
    },{
        booksName:"readygo4",
        ready:[
            {unit:1,part:["A"]},
            {unit:2,part:["A"]},
            {unit:3,part:["C"]},
            {unit:4,part:["D"]}
        ]
    },{
        booksName:"readygo6",
        ready:[
            {unit:1,part:["A"]},
            {unit:2,part:["A"]},
            {unit:3,part:["C"]},
            {unit:4,part:["D"]}
        ]
    }    
]

export function getData() {
    return books
}
export function getbookUnits(book){
    return books.find(
        item => item.booksName === book
      );
}
export function getReady(book){
    return books.find(
        item => item.booksName === book
      );
}
// export default {
//     getData,
//     getbookUnits,
// };
