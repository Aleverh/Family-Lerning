const today = new Date();
// console.log(`${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`);
// console.dir(today);
//
// console.log(Number(today));
// console.log(new Date(0));
// console.log(new Date(86400000));
// console.log(new Date(2019, 6, 4));
// console.log(today.getTime());
// console.log(today.getUTCHours());
// console.log(today.getHours());

// ------------------
// console.log(today);
// console.log(new Date('2011-04-11'));
// console.log(new Date(2019, 15, 4));
// console.log(Date.now());



// today.setMonth(5);
// console.log(today);
// ----------------
const date = new Date();

// Results below use the time zone of America/Los_Angeles (UTC-0800, Pacific Standard Time)

// US English uses month-day-year order
// console.log(new Intl.DateTimeFormat('en-US').format(date));
// console.log(new Intl.DateTimeFormat('en-GB', {
//     weekday: 'long', year: 'numeric', month: 'long', day: '2-digit'
// }).format(date));
// console.log(new Intl.DateTimeFormat('en-GB', {
//     weekday: 'long', year: 'numeric', month: 'long',
// }).format(date));
// console.log(new Intl.DateTimeFormat('en-US').format(date));
console.log(new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date));
console.log(new Intl.DateTimeFormat('uk', { weekday: 'long' }).format(date));
// Intl.DateTimeFormat('en-GB')

const num = 4321323.13565

// console.log(new Intl.NumberFormat('en-US', { currency: 'USD', style: 'currency' }).format(num));
// console.log(new Intl.NumberFormat('en-GB', { currency: 'EUR', style: 'currency' }).format(num));
// console.log(new Intl.NumberFormat('uk', { currency: 'UAH', style: 'currency' }).format(num));
// console.log(new Intl.NumberFormat('uk').format(num));
// console.log(new Intl.NumberFormat('ar-SY').format(num));


