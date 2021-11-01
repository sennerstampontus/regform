//Set variable for Element ID
    const firstName = document.getElementById("firstName");
    const errorFirstName = document.getElementById("firstName-error");
    const lastName = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const sendButton = document.getElementById("sendBtn");
    const yearInput = document.getElementById("year");
    const monthInput = document.getElementById("month");
    const dayInput = document.getElementById("day");
    const rowInput = document.getElementById("row")
    const pnrInput = document.getElementById("pnr")
    const ortInput = document.getElementById("ort")
    const passwordInput = document.getElementById("")
    

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

let calcMonth = (thisMonth, inputMonth) => {

    if(inputMonth > thisMonth) {
        return true
    }

    
return false
}

console.log(fullYear)

// Check var
let check = false



function validate(e, description, regEx, checkAge, inputMonth) {

    const error = document.getElementById(`${e.target.id}-error`);
    const isValid = document.getElementById(`${e.target.id}`);
    let currentMonth = calcMonth (month, e.target.value)

    if(regEx) {
        // check = true
        isValid.classList.add("is-valid")
        isValid.classList.remove("is-invalid")
        error.innerText = ""

        // console.log(yearInput.value)
    }

else {
        // check = false
        isValid.classList.add("is-invalid")
        error.innerText =`${description}`
    }

    
    if (checkAge <= 18){
        console.log(checkAge)
        currentMonth = calcMonth(month, inputMonth)

        if(!currentMonth){
            // console.log(inputMonth)
        }
    }
    // else
    //     console.log(checkAge)

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
    let currentMonth = calcMonth (year, monthInput.value)


    validate(e, description, numberRegEx, currentAge, currentMonth)
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
    
    const description = `Ange en gilltig e-postaddress`
    const passRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.exec(`${e.target.value}`);

    
    validate(e, description, passRegEx)
})

confirmPasswordInput.addEventListener("keyup", function(e){
    
    const description = `Ange en gilltig e-postaddress`
    const passRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.exec(`${e.target.value}`);

    
    validate(e, description, passRegEx)
})
