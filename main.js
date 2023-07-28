function greeting(name) {
              let greetings = alert(`Приветствую Вас ${name}!`)
              return greetings
}

let yourName = prompt("Введите ваше имя: ")
console.log(greeting(yourName))