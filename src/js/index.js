// FORM SUBMIT EVENT IS ATTACHED TO THE FORM

// ref input, button, form

// = assignment
// == equality 
// === equality and data type

window.addEventListener('load', function(e){
    const inputForm = document.querySelector('#userInputForm')
    const inputEmail = document.querySelector('#userEmail')
    const inputPassword = document.querySelector('#userPassword')
    const submit = document.querySelector('button')

    console.log(inputForm, inputEmail, inputPassword, submit)

    inputForm.addEventListener('submit', function(event){
        // type=submit triggers the submit event
        // only the form can listen for that event...
         event.preventDefault()
        let fieldValue = (inputEmail.value).trim()

        if(fieldValue === '') {
            // flash message helpful hint
            const warning = document.querySelector('.warning');
            warning.textContent = "This field requires an email!"
            console.log("true block")
        }
        else {
            const warning = document.querySelector('.warning');
            warning.textContent = ""
            console.log("false block")
        }

        console.log(fieldValue)
    })
})