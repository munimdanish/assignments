let liberary = [
{
    title : `Book 1`,
    author : `Author A`,
    yearPublished: 2021,
},
{
    title : `Book 2`,
    author : `Author B`,
    yearPublished: 2022,
},
{
    title : `Book 3`,
    author : `Author C`,
    yearPublished: 2023,
}
];
console.log(liberary);

let newBook = {
        title : `System Design`,
        author : `Author N`,
        yearPublished: 2024,   
}
liberary.push(newBook);

let foundBook = liberary.find(book => book.title ===`System Design`);
console.log(`New book added:`,foundBook);

liberary = liberary.filter(book => book.title !==`Book 2`);
console.log(`After Removing Book 2:`, liberary);

let bookToUpdate = liberary.find(book => book.title===`Book 1`);
if (bookToUpdate) {
    bookToUpdate.yearPublished = 2023;
}
console.log(`After Updating year of Book One:`, liberary);
