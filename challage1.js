// for personal information

let Name=document.querySelector(".name");
let email=document.querySelector(".email");
let phoneNumber=document.querySelector(".phoneNumber");

let plan_selected;
let sucessClases=[]

let plans=document.querySelectorAll(".show");
let all_Input=document.querySelector(".personal");

// for buttons
let nextButton=document.querySelector(".next");
let backButton=document.querySelector(".back");


// function moveTotheNext(){
//     let sucess=all_Input.querySelectorAll(".success");
//      if(sucess.length==3){
//         slideFoward()
//      }      
// }


let indexNum=[1];
// for selecting plans
 function selectPlan(){
   let plans=document.querySelectorAll(".show");
   plans.forEach((plan)=>{
      plan.addEventListener("click",()=>{
        const current=document.querySelector(".clicked");
        if(current){
            current.classList.remove("clicked");
        }
       plan.classList.add("clicked")
       let presnt=document.querySelector(".clicked");

    //    to keep updating the summary
    plan_selected=presnt.querySelector(".show h2").childNodes[0].textContent;
    planAmount=presnt.querySelector(".show h2 span").textContent;

      let sum_1=document.querySelector(".subscrib p").childNodes[0]
       sum_1.textContent=plan_selected + "(monthly)";

       let sum_2=document.querySelectorAll(".subscrib p")[1];
       sum_2.textContent=planAmount;
      })
     
   })
 }
 
selectPlan()
 


 
// for check boxes 
 
let boxes=document.querySelectorAll('input[name="my-checkbox"]')
function checkBox(){
    
    boxes.forEach(box=>{
        box.addEventListener("click",(e)=>{
           boxes.forEach(newBox=>{
            let removeClass = newBox.parentElement.parentElement;
            removeClass.classList.remove("clicked")
           })
        let addClass=e.target.parentElement.parentElement;
        let sumMenu=document.querySelector(".add-sum");
        addClass.classList.add("clicked")
    let onLine=document.querySelector(".Ads");
    let onLine2=onLine.querySelector(".clicked");
    let inText=onLine2.querySelector(".online-dis p").childNodes[0].textContent;
    let inamount=onLine2.querySelector(".onth").textContent;
    let newElem=""
     newElem +=`
        <p>${inText} <span>${inamount}</span></p>
    `
sumMenu.innerHTML=newElem

        })
        box.addEventListener("change",()=>{
            boxes.forEach(otherBox=>{
                if(otherBox !== box){
                    otherBox.checked=false;
                }
            })
        })
    })
}


checkBox()

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
    // currentslide === maxslid-1 ? return : currentslide++;
    if(currentslide === maxslid-1){
        return
    }else{
        currentslide++
    }
    slider(currentslide)
    showProgress(currentslide)
  summit()
}

function slideBackward(){
    if(currentslide === 0){
        return
    }else{
        currentslide--
    }
    slider(currentslide)
    showProgress(currentslide)
   summit() 
}
function summit(){
    if(currentslide==3){
      nextButton.innerHTML=`<button class="submit">submit</button>`
    }
    if(currentslide<=2){
        nextButton.innerHTML=`<button>Next</button>`
    }
    if(currentslide>=1){
        backButton.style.visibility="visible";
    }else{
        backButton.style.visibility="hidden";
    }
}

function sub(){
    const labelCheckbox=document.querySelectorAll(".radio_btn label input")
    console.log(labelCheckbox)
    labelCheckbox.forEach(lable =>(
        lable.addEventListener("click",()=>{
           console.log(lable.parentElement.textContent.trim())
        })
    ))
}

sub()
document.addEventListener("keydown", (e)=>{
  e.key === "ArrowRight" && slideBackward();

  e.key === "ArrowLeft" && slideBackward();
})




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

function finalStage(e){
    
}
// for buttons 
let btnIn=0;

nextButton.addEventListener("click", (e)=>{
    slideFoward()
    checkPersonal();
 nextButton.querySelector(".submit").addEventListener("click",(e)=>{
    
       if(e.target.textContent=="submit"){
        let sum_1=document.querySelector(".sum-1");
        let sum_2=document.querySelector(".thanks");
        sum_1.style.display="none";
        sum_2.style.display="block";
       }
    })


})
backButton.addEventListener("click",(e)=>{
    // showProgress()
    slideBackward(currentslide);
    if(e.target.textContent=="back"){
        let sum_1=document.querySelector(".sum-1");
        let sum_2=document.querySelector(".thanks");
        sum_1.style.display="block";
        sum_2.style.display="none";
       }
})
