// for personal information

let Name=document.querySelector(".name");
let email=document.querySelector(".email");
let phoneNumber=document.querySelector(".phoneNumber");


let plans=document.querySelectorAll(".show")
let indexNum=[1];

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

// to check if the personal details option is correctly field
 function checkPersonal(){
    // for name
    let nameValue=Name.value;
    nameValue =="" ? error(Name,"name can not be blank") : nameValue.trim().length < 5 || nameValue.trim().length > 15 ?  error(Name,"min of 5 and max of 15"): correct(Name);
    // if(nameValue ==""){
    //    error(Name,"name can not be blank")
    // }else if(nameValue.trim().length < 5 || nameValue.trim().length > 15 ){
    //     error(Name,"min of 5 and max of 15")
    // }else{
    //     correct(Name)
    // }

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

// when you click on the plan options
plans.forEach((items,index)=>{
    items.addEventListener("click", ()=>{
     indexNum.pop()
     indexNum.push(index)
    //  if(indexNum.length <= 1){

    //     // items.classList.contains("clicked") ? items.classList.remove("clicked") : items.classList.add("clicked");
    
      

    })
})

console.log(plans)


nextButton.addEventListener("click", ()=>{
    checkPersonal()
    showProgress()
})
backButton.addEventListener("click",()=>{
    showProgress()
    
})
