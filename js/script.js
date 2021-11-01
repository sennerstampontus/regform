//Set variable for Element ID
    const form = document.getElementById("form");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const sendButton = document.getElementById("sendBtn");
    const yearInput = document.getElementById("year");
    const monthInput = document.getElementById("month");
    const dayInput = document.getElementById("day");
    const rowInput = document.getElementById("row")
    const pnrInput = document.getElementById("pnr")
    const ortInput = document.getElementById("ort")
    const passwordInput = document.getElementById("password")
    const confirmPasswordInput = document.getElementById("confirmPassword")

    

//Time var
    let today = new Date();
    let date = today.getDate();
    let month = (today.getMonth()+1)
    let year = today.getFullYear()

//Age validation var
    let currentAge
    let currentMonth
    let fullYear = `${year} ${month} ${date}`

    let calcYear = (thisYear, inputYear) => {
        let ageFromYear = thisYear - inputYear

    return ageFromYear
}

console.log(fullYear)

let confirmPassword =(thisPass, thatPass) => {
    if (thisPass === thatPass){
        return true
    }
    else{
        return false
    }
        
}

// Check var
let check = false



function validate(e, description, regEx, checkAge) {

    const error = document.getElementById(`${e.target.id}-error`);
    const isValid = document.getElementById(`${e.target.id}`);

    if(regEx) {
        // check = true
        isValid.classList.add("is-valid")
        isValid.classList.remove("is-invalid")
        error.innerText = ""

        // console.log(yearInput.value)
    }

else {
        // check = false
        isValid.classList.remove("is-valid")
        isValid.classList.add("is-invalid")
        error.innerText =`${description}`

    }

    
    if (checkAge < 18 || !regEx){
        isValid.classList.add("is-invalid")
}
    else{
        isValid.classList.remove("is-invalid")
        isValid.classList.add("is-valid")
    }
}

//Call functions through eventListener

firstName.addEventListener("keyup", function(e){
    let minLength = 2
    const description = `Förnamnet måste vara minst ${minLength} bokstäver`
    const letterRegEx = /[a-ö]{2,}/.exec(`${e.target.value}`);
    
    validate(e, description, letterRegEx)
})
lastName.addEventListener("keyup", function(e){
    let minLength = 2
    const description = `Efternamnet måste vara minst ${minLength} bokstäver`
    const letterRegEx = /[a-ö]{2,}/.exec(`${e.target.value}`);
    
    validate(e, description, letterRegEx)
})

yearInput.addEventListener("keyup", function(e){
    let minLength = 4
    const description = `Årtalet måste bestå av ${minLength} siffror`
    const numberRegEx = /(\d{4})/.exec(`${e.target.value}`);
    
    let currentAge = calcYear (year, e.target.value)

    validate(e, description, numberRegEx, currentAge)
})

monthInput.addEventListener("keyup", function(e){
    let minLength = 2
    const description = `Månad måste bestå av ${minLength} siffror`
    const numberRegEx = /(\d{2})/.exec(`${e.target.value}`);


    validate(e, description, numberRegEx)
})

dayInput.addEventListener("keyup", function(e){
    let minLength = 2
    const description = `Dag måste bestå av ${minLength} siffror`
    const numberRegEx = /(\d{2})/.exec(`${e.target.value}`);
    
    validate(e, description, numberRegEx)
})

rowInput.addEventListener("keyup", function(e){
    let minLength = 2
    const description = `Gatan måste bestå av minst ${minLength} tecken`
    const letterRegEx = /[a-ö]{2,}/.exec(`${e.target.value}`);

    
    validate(e, description, letterRegEx)
})

pnrInput.addEventListener("keyup", function(e){
    let minLength = 5
    const description = `Gatan måste bestå av ${minLength} siffror`
    const numberRegEx = /(\d{5})/.exec(`${e.target.value}`);

    
    validate(e, description, numberRegEx)
})

ortInput.addEventListener("keyup", function(e){
    let minLength = 2
    const description = `Ort måste bestå av minst ${minLength} bokstäver`
    const letterRegEx = /[a-ö]{2,}/.exec(`${e.target.value}`);

    
    validate(e, description, letterRegEx)
})

emailInput.addEventListener("keyup", function(e){
    
    const description = `Ange en gilltig e-postaddress`
    const emailRegEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.exec(`${e.target.value}`);

    
    validate(e, description, emailRegEx)
})

passwordInput.addEventListener("keyup", function(e){
    
    const description = `Ange ett gilltigt lösenord`
    const passRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.exec(`${e.target.value}`);

    
    validate(e, description, passRegEx)
})

confirmPasswordInput.addEventListener("keyup", function(e){
    let checkPass = confirmPassword(passwordInput.value, `${e.target.value}`)
    const description = `Lösenordet måste stämma överens`
    checkPass = confirmPassword(passwordInput.value, confirmPasswordInput.value)

    
    validate(e, description, checkPass)
})

let onSubmit = (e) => {
    e.preventDefault()

    const checkValidate = document.querySelectorAll(".is-valid");
    console.log(e.target.length)
    let testArray = []

    for (let i = 0; i < e.target.length - 1; i++) {
        testArray.push(e.target[i])
        if(!e.target[i].classList.contains("is-valid")){

        e.target[i].classList.add("is-invalid")

        }
        // console.log(e.target[i])
    }
  let checkArray =  testArray.map((element)=>{
      
      return (element.classList.contains("is-invalid"))

    })
    console.log(checkArray)
    // checkArray.includes(false)
    let isInvalid = checkArray.includes(true)

    if(!isInvalid){
        alert('Form submitted')
        e.default()
    }
}