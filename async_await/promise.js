console.log('Person 1: Show ticks');
console.log('Person 2: show ticks');

const wifebringticket = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('ticket');
    },3000)
})

const getpopcorn = wifebringticket.then((t)=>{
    console.log('husband: should go in ')
    console.log('wife: no i am hungary')
    return new Promise((resolve,reject)=>{
        resolve(`${t} : popcorn`)
    })
})

const getButter = getpopcorn.then((t)=>{
    console.log('husband: this is butter anything else')
    console.log('wife : I think cold Drinks is a better choice with the Popcorn');
    return new Promise((resolve,reject)=>{
        resolve(`${t}:Butter`);
    })
})

const getColdDrinks = getButter.then((t)=>{
    console.log('husband: it is your cold Drinks darling')
    console.log('wife: lets go we are so late');
    return new Promise((resolve,reject)=> {
        resolve(`${t} : ColdDrinks`);
    })
})
getColdDrinks.then((t)=>{
    console.log(t);
})
console.log('Person 4: show ticks');
console.log('Person 5: show ticks');
