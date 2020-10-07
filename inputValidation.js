// import person from "./validationChild.js"

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const enroll = document.querySelector("#enroll");
const number = document.querySelector("#number");
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");



//validating the Name
name.addEventListener("blur", validateName);

function validateName (){
    const value = name.value;
    const re = /^[a-zA-z ]{2,20}$/;
    const validName = document.querySelector(".valid-name");
    if(!re.test(value)){
        validName.classList.add("invalid")
        validName.id = "invalid-name";
    }else{
        validName.classList.remove("invalid")
        validName.removeAttribute("id")
    }
}



//validating the Email
email.addEventListener("blur", validateEmail);

function validateEmail (){
    const value = email.value;
    const re = /^[a-zA-z0-9\.-_]+@[a-zA-z0-9\.-_]+\.[a-zA-Z]{2,5}$/;
    const validEmail = document.querySelector(".valid-email");
    if(!re.test(value)){
        // console.log("invalid");
        validEmail.classList.add("invalid")
        validEmail.id = "invalid-email";
    }else{
        // console.log("valid");
        validEmail.classList.remove("invalid");
        validEmail.removeAttribute("id");
    }
}



//validating the Number
number.addEventListener("blur", validateNumber);

function validateNumber (){
    const value = number.value;
    const re = /^[0-9]{10}$/;
    const validNumber = document.querySelector(".valid-number");
    if(!re.test(value)){
        validNumber.classList.add("invalid")
        validNumber.id = "invalid-number";
    }else{
        validNumber.classList.remove("invalid");
        validNumber.removeAttribute("id");

    }
}



//validating the Enrollment Number
enroll.addEventListener("blur", validateEnrollmentNumber);

function validateEnrollmentNumber (){
    const value = enroll.value;
    const re = /^1[89]STUCHH010([0-9]{3})$/i;
    const validEnroll = document.querySelector(".valid-enroll");
    if(!re.test(value)){
        validEnroll.classList.add("invalid")
        validEnroll.id = "invalid-enroll";
    }else{
        validEnroll.classList.remove("invalid");
        validEnroll.removeAttribute("id");


    }
}

//submitting the from also validating
btn.addEventListener("click",submitValidate);
let people = [];

function submitValidate(){
    let invalidElements = container.children
    for (let i=0;i<invalidElements.length;i++){
        if(invalidElements[i].children.length === 3){
            // console.log(invalidElements[i].children)
            let child = invalidElements[i].children;
            for(let j=0;j<child.length;j++){
                // console.log(child[j])
                let superchild = child[j]
                if (superchild.classList.contains("invalid")){
                    alert("Oops! Invalid inputs ")
                }
            }
        }
    }
    let id = people.length;
    class person {
        constructor(name,email,number, enroll,id){
            this.name = name;
            this.email = email;
            this.number = number;
            this.enroll = enroll;
            this.id = id;
        }

    }
    
     const newPerson = new person(name.value, email.value, number.value, enroll.value, id)
    people.push(newPerson)
    newMember(newPerson)

}

function newMember (person){
    const tRow = document.createElement("div");
    const table = document.querySelector(".table");
    tRow.className = "t-row";
    // console.log(tRow)

    //id row 
    const id = document.createElement("div");
    id.className = "id";
    id.classList.add("td")
    id.appendChild(document.createTextNode(`${person.id}`))
    // console.log(id)
    //name row
    const name = document.createElement("div");
    name.className = "name";
    name.classList.add("td")
    name.appendChild(document.createTextNode(`${person.name}`))
    // console.log(name)
    //enrollment row 
    const enrollment = document.createElement("div");
    enrollment.className = "enrollment";
    enrollment.classList.add("td")
    enrollment.appendChild(document.createTextNode(`${person.enroll}`))
    // console.log(enrollment)
    //email row 
    const email = document.createElement("div");
    email.className = "email";
    email.classList.add("td")
    email.appendChild(document.createTextNode(`${person.email}`))
    // console.log(email)
    //number row 
    const number = document.createElement("div");
    number.className = "number";
    number.classList.add("td")
    number.appendChild(document.createTextNode(`${person.number}`))
    // console.log(number);

    //apppending all div 
    tRow.appendChild(id)
    tRow.appendChild(name)
    tRow.appendChild(enrollment)
    tRow.appendChild(email)
    tRow.appendChild(number)
    table.appendChild(tRow)
    // console.log(table)

}
