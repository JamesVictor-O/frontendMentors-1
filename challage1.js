// for personal information

let Name=document.querySelector(".name");
let email=document.querySelector(".email");
let phoneNumber=document.querySelector(".phoneNumber");
 
let stepNumber=0;



// fo


// for buttons
let nextButton=document.querySelector(".next");
let backButton=document.querySelector(".back");


// for error massage
function error(element,massage){
    let Parent=element.parentElement;
      if(Parent.classList.contains("success")){
        Parent.classList.remove("success")
      }
      Parent.classList.add("error");
      const passage=Parent.querySelector("p");
      passage.textContent= massage;
}
// for correct information

function correct(element,massage){
    let Parent=element.parentElement;
      if(Parent.classList.contains("error")){
        Parent.classList.remove("error")
      }
      Parent.classList.add("success");
      const passage=Parent.querySelector("p");
      passage.textContent= massage;
}

 function checkPersonal(){
    // for name
    let nameValue=Name.value;
    if(nameValue ==""){
       error(Name,"name can not be blank")
    }else if(nameValue.trim().length < 5 || nameValue.trim().length > 15 ){
        error(Name,"min of 5 and max of 15")
    }else{
        correct(Name)
    }

    // for email
    let emailValue=email.value;
    if(emailValue.trim()==""){
         error(email,"please input email");
    }else if(!emailValue.trim().endsWith("@gmail.com")){
        error(email, "input a Valid email")
    }else{
        correct(email)
    }

    // for phone number
    let number=phoneNumber.value;
    if(number.trim()==""){
        error(phoneNumber,"phone number cant be empty")
    }else if(number.trim().length<10 || number.trim().length>11){
       error(phoneNumber,"number not valid")
    }else{
        correct(phoneNumber)
    }
}

let Steps=document.querySelectorAll(".one");
// for showing progress in the steps menu
function showProgress(){
    let Steps=document.querySelectorAll(".one");
    let step=Steps[stepNumber].parentElement;
    step.classList.add("ground")
     
    let Allpages=document.querySelectorAll(".page");
    let page=Allpages[stepNumber];
    page.classList.remove("hidden")

}
let Allpages=document.querySelectorAll(".page");
    let page=Allpages[stepNumber]
console.log(page=Allpages[stepNumber])


nextButton.addEventListener("click", ()=>{
    checkPersonal()
    showProgress()
    
    // if(stepNumber !== 3){
    //     stepNumber++;
    // }
    stepNumber++;
    console.log(stepNumber)
})
backButton.addEventListener("click",()=>{
    showProgress()
    stepNumber--;
    console.log(stepNumber)
})
