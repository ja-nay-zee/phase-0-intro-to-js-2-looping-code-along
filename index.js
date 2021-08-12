// Code your solutions in this file

function writeCards(names, event) {
    const messages = []
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return messages
} 

function countDown(number) {
    while (number >= 0) {
    console.log(number)
    number--
    }      
}

// console.log("hello")

// const names = ['Lisa', 'Kaitlin', 'Jan'];
// // const event = [birthday]

// function writeCards(names) {
//     for(let y = 0; y < names.length; y++) {
//         console.log(`Thank you, ${names[y]}, for the wonderful birthday gift! `)
//     }
// }


// function countDown(number) 
//         while (number >= 0) {
//         console.log(number)
//         number--
//     }
// }