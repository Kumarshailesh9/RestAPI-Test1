console.log('person 1: show ticket');
console.log('person 2: show ticket');

const preMovie = async () => {
    const wifebringticket = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('ticket');
        },3000)
    });

    const getpopcorn =  new Promise((resolve,reject)=> resolve('popcorn'));

    const getButter =  new Promise((resolve,reject)=>{
            resolve(`Butter`);
        })
    const getcoldrink = new Promise((resolve,reject)=> resolve('coddrink'))

    let ticket = await wifebringticket;
    console.log('wife: I have ticket')
    console.log('husband: should go in ')
    console.log('wife: no I am hungary')

    let popcorn = await getpopcorn;

    console.log(`husband: I got some ${popcorn}`);
    console.log('husband : we should go in');
    console.log('wife: I need butter on my popcorn');
    
    let Butter = await getButter;
    console.log(`husband: I got some ${Butter} on popcorn`);
    console.log('husband: anything else darling?');
    console.log('wife: I need cold Drinks also');

    let colddrink = await getcoldrink;
    console.log(`husband: I got  ${colddrink} with popcorn`);
    console.log('husband: anything else darling?');
    console.log('wife: lets got we are getting late');
    console.log('husband: thank you for the reminder');
    return ticket;
}

preMovie().then((m)=>console.log(`person3 : shows ${m}`)) 

console.log('person 4: show ticket');
console.log('person 5: show ticket');



