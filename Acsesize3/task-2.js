
// #2
console.log(+'50') // Неявное
console.log(Number('100')) // Явное
console.log('' + 1) // Неявное
console.log(String(1)) // Явное
console.log(Boolean(0)) // Явное
console.log(+'0.01') // Неявное
console.log(1 + '') // Неявное
console.log(Boolean(1)) // Явное
console.log(String(001)) // Явное
console.log(Number('Hello World')) // Явное


// #3
console.log(Number(console.log))
console.log(Boolean(console.log))

console.log(Number({name:'Maxim'}))
console.log(Boolean({name:'Maxim'}))

console.log(Boolean(Symbol('key')))

console.log(Number(Number))
console.log(Boolean(Number))

console.log(Number(''))
console.log(Boolean(''))

console.log(Number(0))
console.log(Boolean(0))

console.log(Number(-10))
console.log(Boolean(-10))

console.log(Number('-105'))
console.log(Boolean('-105'))

// #4
//1 12345 -- X
//2 12345 -- X
//3 12345 -- O
//4 'false' -- O
//5 false -- O
//6 true -- O
//7 'undefined' -- O
//8 100 -- X
//9 100 -- O
//10 1 -- O

console.log(Number(' 1 2 3 4 5'))
console.log(Number('1234 5'))
console.log(Number('12345'))
console.log(String(false))
console.log(Boolean(0000000))
console.log(Boolean(0.0000001))
console.log(String(undefined))
console.log(Number('100f'))
console.log(Number('100'))
console.log(Number('000001'))

