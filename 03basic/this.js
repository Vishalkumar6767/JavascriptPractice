const user = {
    userName:"vishal Kumar",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website`);
    }
}
// user.welcomeMessage();

// user.userName = "sam";
// user.welcomeMessage();
// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()
// const chai = () =>{
//     let username = "hitesh"
//     console.log(this);
// }
// chai()

// const addTow = (num1, num2)=> num1 +num2
const addtwo = (num1, num2)=>(num1 + num2 )
console.log(5,6);

