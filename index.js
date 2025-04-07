// document.getElementById("count-el").innerText = 5

// initialise the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the html to reflect the new count

// function increment() {
//     console.log("the button was clicked")
// }


// let countEl = document.getElementById("count-el")

// let count = 0 

// function increment() {
//     count = count + 1
//     countEl.innerText = count
    
// }

// function save() {
//     console.log(count)
// }

// save()

// let message = "You have three new notifications"

// console.log(message)

let welcomeEl = document.getElementById("welcome-el")

let myName = "Bilaal"
let greeting = "Welcome Back "



function welcome() {
    myGreeting = greeting + myName + " 👋🏻"
    welcomeEl.innerText = myGreeting
}

welcome()