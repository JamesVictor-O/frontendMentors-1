// for personal information

let Name=document.querySelector(".name");
let email=document.querySelector(".email");
let phoneNumber=document.querySelector(".phoneNumber");


let plans=document.querySelectorAll(".show")
let indexNum=[1];

// giving the number section some functionalities

function numFuctionality(){
    let Numbers=document.querySelectorAll(".numb");
  
Numbers.forEach((numb,index)=>{
    // give the numb elements a data set

    numb.setAttribute("data-set",`${index}`)

    numb.addEventListener("click",(e)=>{
        let slide=e.target.getAttribute("data-set");
        slider(slide)
        showProgress(slide)
    })
})
}

numFuctionality()

// show the progress on the number page
function showProgress(slide){
    document.querySelectorAll(".numb").forEach(dot=>{
        dot.classList.remove("active")
    })
    document.querySelector(`.numb[data-set="${slide}"]`).classList.add("active");
};
showProgress(0)


// for the pages to be able to slide
let currentslide=0;

let sliders=document.querySelectorAll(".page")
let maxslid=sliders.length;

function slider(slid){
    sliders.forEach((slide, i)=>{
        slide.style.transform=`translateX(${100 * (i-slid)}%)`;
     })
}

slider(0)


function slideFoward(){
    currentslide === maxslid-1 ? currentslide=0 : currentslide++;
    slider(currentslide)
    showProgress(currentslide)

}

function slideBackward(){
    currentslide === 0 ? currentslide=maxslid -1 : currentslide--;
    slider(currentslide)
    showProgress(currentslide)
}

document.addEventListener("keydown", (e)=>{
  e.key === "ArrowRight" && slideBackward();

  e.key === "ArrowLeft" && slideBackward();
//    if(e.key==="ArrowRight"){
//     slideFoward()
//    }
})

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


nextButton.addEventListener("click", ()=>{
    slideFoward()
    checkPersonal();
    // showProgress()
})
backButton.addEventListener("click",()=>{
    // showProgress()
    slideBackward(currentslide)
    
})
