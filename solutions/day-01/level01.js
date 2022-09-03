// Declare an empty array;
arr = Array();

// Declare an array with more than 5 number of elements
arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Find the length of your array
console.log(arr2.length); // use length, not length() cause length is not a function

// Get the first item, the middle item and the last item of the array
let first = arr2[0];
let middle = arr2[(arr2.length - 1) / 2];
let last = arr2[arr2.length - 1];

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
mixedDataTypes = [
    10,
    3.14159,
    NaN,
    false,
    "Avro",
    {
        Country: 'Bangladesh',
        City: 'Dhaka'
    },
    {
        Skills: ['C', 'C++', 'Java', 'Python']
    }
];

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
];

// Print the array using console.log()
console.log(itCompanies);

// Print the number of companies in the array
console.log(itCompanies.length);

// Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[(itCompanies.length - 1) / 2]);
console.log(itCompanies[itCompanies.length - 1]);

// Print out each company
for (let i = 0; i < itCompanies.length; ++i) {
    console.log(itCompanies[i]);
}

// Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; ++i) {
    console.log(itCompanies[i].toUpperCase());
}

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon are big IT companies.
console.log(`${itCompanies.join(', ')} are big IT companies.`);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
(itCompanies.indexOf('Meta')!=-1)?console.log("Meta"):console.log("Meta is not found");

// Filter out companies which have more than one 'o' without the filter method
for (let i = 0; i < itCompanies.length; ++i) {
    if(itCompanies[i].toLowerCase().indexOf('o') != itCompanies[i].toLowerCase().lastIndexOf('o'))
    {
        console.log(itCompanies[i]);
    }
}

// Sort the array using sort() method
itCompanies.sort();

// Reverse the array using reverse() method
itCompanies.reverse();

// Slice out the first 3 companies from the array
itCompanies.slice(0, 3);

// Slice out the last 3 companies from the array
itCompanies.slice(-3);

// Slice out the middle IT company or companies from the array
// slice(from, until)
// slice(middle, length-middle)
itCompanies.slice((itCompanies.length-1)/2, itCompanies.length-(itCompanies.length-1)/2)

// Remove the first IT company from the array
itCompanies.shift()

// Remove the middle IT company or companies from the array
let mid = (itCompanies.length-1)/2
itCompanies.splice(mid, 1)

// Remove the last IT company from the array
itCompanies.pop()

// Remove all IT companies
itCompanies.splice()