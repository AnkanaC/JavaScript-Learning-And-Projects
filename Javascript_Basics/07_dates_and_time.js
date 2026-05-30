//---------DATES--------//

const specificDate = new Date('2022-01-01');
console.log(specificDate);

const timestamp = Date.now();
console.log(timestamp);

const dateFromTimestamp = new Date(timestamp);
console.log(dateFromTimestamp);

const now = new Date();
console.log(now);

console.log(now.toString()); // 'Sat Jan 01 2022 00:00:00 GMT+0000 (Coordinated Universal Time)'
console.log(now.toDateString()); // 'Sat Jan 01 2022'
console.log(now.toTimeString()); // '00:00:00 GMT+0000 (Coordinated Universal Time)'
console.log(now.toISOString()); // '2022-01-01T00:00:00.000Z' - returns the date in ISO 8601 format (UTC time zone)
console.log(now.toLocaleString()); // '1/1/2022, 12:00:00 AM' - returns the date and time in a format based on the locale settings of the environment (default : Americas)
console.log(now.toLocaleDateString()); // '1/1/2022' - returns the date in a format based on the locale settings of the environment (default : Americas)
console.log(now.toLocaleTimeString()); // '12:00:00 AM' - returns the time in a format based on the locale settings of the environment (default : Americas)

//date is an object

let myCreatedDate = new Date(2026, 0, 1); // January 1, 2026 (months are zero-indexed)
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString()); // 'Thu Jan 01 2026' - returns the date in a format based on the locale settings of the environment (default : Americas)

let myDate = new Date(2025, 11, 25, 23, 59, 59); // December 25, 2025, 11:59:59 PM (months are zero-indexed)
console.log(myDate);
console.log(myDate.toLocaleString()); // 'Thu Dec 25 2025' - returns the date in a format based on the locale settings of the environment (default : Americas)