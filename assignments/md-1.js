import hello from './md.js';
import hi, {fileName as file, multiply} from './md.js'
console.log (file);
const triple = multiply(3);
console.log(triple(5)) 



console.log(hi('huzaifa'))
function Product(title ,price){
    this.title = title
    this.price = price
    this.showDetails = function(){
        console.log(`${this.title} is Rs.${this.price}`)
    }
}
const Product1=new Product ('laptop',50000)
const Product2 = new Product('headphones',2500)
console.log('product1', Product1)
console.log('product2',Product2.showDetails())
class Book {
 constructor (title, author){
    this.title = title
    this.author = author
 }
 getDetails(){
return `${this.title} is written by ${this.author}`
 }
}
const Book1 = new Book('english','james')
const Book2 = new Book('urdu','hames')
console.log('book1',Book1)
console.log('book2',Book2)
class liberary {
    constructor(){
        this.collection = []
    }
    getBook(book){
         this.collection.push(book)
    }
    removeBook(title){
        this.collection = this.collection.filter (book => book.title !==title)
    }
    findBook (title){
        return this.collection.find(book=>book.title===title)
    }
    getBookList(){
        return this.collection
    }
}
class BankAccount {
    #balance

    constructor(initialBalance){
        this.#balance = initialBalance
    }
    getBalance(){
        return this.#balance
    }
    deposite(amount){
        this.#balance += amount
    }
}
const accout = new BankAccount(100)
accout.deposite(500)
console.log(accout.getBalance())
console.log(accout.#balance)