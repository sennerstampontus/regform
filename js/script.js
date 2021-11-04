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
    const SubmitError = document.getElementById("sendBtn-error")

    

//Time var
    let today = new Date();
    let date = today.getDate();
    let month = (today.getMonth()+1)
    let year = today.getFullYear()


//Age validation var
    let currentAge
    let currentMonth
    let fullYear = `${year} ${month} ${date}`

//     let calcYear = (thisYear, inputYear, monthInput) => {
//         let ageFromYear = thisYear - inputYear
//         console.log(ageFromYear)
//     return ageFromYear
// }



// console.log(fullYear)

let confirmPassword =(thisPass, thatPass) => {
    if (thisPass === thatPass){
        return true
    }
    else{
        return false
    }
        
}


function validate(e, description, regEx) {

    const error = document.getElementById(`${e.target.id}-error`);
    const isValid = document.getElementById(`${e.target.id}`);

    if(regEx) {

        isValid.classList.add("is-valid")
        isValid.classList.remove("is-invalid")
        error.innerText = ""


    }

    else {
        isValid.classList.remove("is-valid")
        isValid.classList.add("is-invalid")
        error.innerText =`${description}`

    }
}

firstName.addEventListener("keyup", function(e){
    let minLength = 2
    const description = `Förnamnet måste vara minst ${minLength} bokstäver`
    const letterRegEx = /[a-ö]{2,}/i.exec(`${e.target.value}`);
    
    validate(e, description, letterRegEx)
})
lastName.addEventListener("keyup", function(e){
    let minLength = 2
    const description = `Efternamnet måste vara minst ${minLength} bokstäver`
    const letterRegEx = /[a-ö]{2,}$/i.exec(`${e.target.value}`);
    
    validate(e, description, letterRegEx)
})

yearInput.addEventListener("keyup", function(e){
    let minLength = 4
    const description = `Årtalet måste bestå av ${minLength} siffror`
    const numberRegEx = /^[\d]{4}$/.exec(`${e.target.value}`);

    
    // let currentAge = calcYear (year, e.target.value)

    validate(e, description, numberRegEx, currentAge)
})

monthInput.addEventListener("keyup", function(e){
    let minLength = 2
    const description = `Månad måste bestå av ${minLength} siffror`
    const numberRegEx = /^[\d]{2}$/.exec(`${e.target.value}`);
    validate(e, description, numberRegEx)
})

dayInput.addEventListener("keyup", function(e){
    let minLength = 2
    const description = `Dag måste bestå av ${minLength} siffror`
    const numberRegEx = /^[\d]{2}$/.exec(`${e.target.value}`);
    
    validate(e, description, numberRegEx)

})

rowInput.addEventListener("keyup", function(e){
    let minLength = 2
    const description = `Gatan måste bestå av minst ${minLength} tecken`
    const letterRegEx = /[a-ö]{2,}/i.exec(`${e.target.value}`);

    
    validate(e, description, letterRegEx)
})

pnrInput.addEventListener("keyup", function(e){
    let minLength = 5
    const description = `Gatan måste bestå av ${minLength} siffror`
    const numberRegEx = /^[\d]{5}$/.exec(`${e.target.value}`);

    
    validate(e, description, numberRegEx)
})

ortInput.addEventListener("keyup", function(e){
    let minLength = 2
    const description = `Ort måste bestå av minst ${minLength} bokstäver`
    const letterRegEx = /[a-ö]{2,}/i.exec(`${e.target.value}`);

    
    validate(e, description, letterRegEx)
})

emailInput.addEventListener("keyup", function(e){
    
    const description = `Ange en gilltig e-postaddress`
    const emailRegEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.exec(`${e.target.value}`);

    
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

    let fieldArray = []

    for (let i = 0; i < e.target.length - 1; i++) {
        fieldArray.push(e.target[i])
        if(!e.target[i].classList.contains("is-valid")){

        e.target[i].classList.add("is-invalid")
        SubmitError.innerText = "*Kontrollera fälten"
            
        }
        else
        SubmitError.innerText = ""
        
    }
    
    let calcMyYear = (thisYear, myInputYear) => {

        let errorYear = document.getElementById(`year`);

        let myYear = thisYear - myInputYear
        if(myInputYear === ""){
            fieldArray[2].element.classList.add("is-invalid")
           
        }
        return myYear
    }


    let calcMyMonth = (thisMonth, myInputMonth) => {

            let exactMonth  = 1
            let underMonth  = 2
            let overMonth   = 3

            if(myInputMonth == thisMonth){
                return exactMonth
            }

            else if(myInputMonth > thisMonth){
                return overMonth
            }

            else
                return underMonth
        }

    

    let calcMyDate = (thisDate, myInputDate) => {

        if(myInputDate <= thisDate){
            return true
        }
        
        else
            return false
    }


    let validateMyAge = () => {

        let myCalcYear = calcMyYear(year, fieldArray[2].value)
        
        if(myCalcYear === 18){
            let myCalcMonth = calcMyMonth(month, fieldArray[3].value)
            
            if(myCalcMonth === 1){
                
                let myCalcDate = calcMyDate(date, fieldArray[4].value)

                if(myCalcDate){
                    fieldArray[4].classList.replace("is-invalid", "is-valid")
                    document.getElementById("day-error").innerText = "";
                }
                else {
                    document.getElementById("day-error").innerText = 'Du måste vara över 18 år';
                    fieldArray[4].classList.replace("is-valid", "is-invalid")
                }
            }
            else if(myCalcMonth === 3){
                document.getElementById("month-error").innerText = 'Du måste vara över 18 år';
                fieldArray[3].classList.replace("is-valid", "is-invalid")
            }

            else if(myCalcMonth === 2){
                fieldArray[3].classList.replace("is-invalid", "is-valid")
                fieldArray[4].classList.replace("is-invalid", "is-valid")
                }
                
        }
           
        
        
        else if (myCalcYear < 18){
            document.getElementById("year-error").innerText = 'Du måste vara över 18 år';
            fieldArray[2].classList.replace("is-valid", "is-invalid")
        }

        else {
            fieldArray[2].classList.add("is-valid")
            fieldArray[3].classList.add("is-valid")
            fieldArray[4].classList.add("is-valid")

            fieldArray[2].classList.remove("is-invalid")
            fieldArray[3].classList.remove("is-invalid")
            fieldArray[4].classList.remove("is-invalid")
        }
         
    }

    validateMyAge()

    let checkArray =  fieldArray.map((element)=>{
    
      return (element.classList.contains("is-invalid"))

    })

    let isInvalid = checkArray.includes(true)
    
    if(!isInvalid){
        document.getElementById("day-error").innerText = "";
        document.getElementById("month-error").innerText = "";
        document.getElementById("year-error").innerText = "";
        
        setTimeout(function(){

            alert('Form submitted')
            fieldArray.forEach((element) =>{
                element.value=""
                element.classList.remove("is-valid")
                SubmitError.innerText = ""
        })

        }, 1000)
    }
}
