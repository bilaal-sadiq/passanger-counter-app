
let countEl = document.getElementById("count-el")
let count = 0 

function increment() {
    count += 1
    countEl.innerText = count
    
}

function save() {


    
    console.log(count)
}

save()

 

// let welcomeEl = document.getElementById("welcome-el")

// let myName = "Bilaal"
// let greeting = "Welcome Back "



// function welcome() {
//     myGreeting = greeting + myName + " 👋🏻"
//     welcomeEl.innerText = myGreeting
// }

// welcome()