// for personal information

let Name=document.querySelector(".name");
let email=document.querySelector(".email");
let phoneNumber=document.querySelector(".phoneNumber");

let plan_selected;

let sucessClases=[]


let plans=document.querySelectorAll(".show");
let all_Input=document.querySelector(".personal");
console.log(all_Input)
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
       sum_1.textContent=plan_selected;

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
        let sumMenu=document.querySelector(".summary-menu");
        addClass.classList.add("clicked")
    let onLine=document.querySelector(".Ads");
    let onLine2=onLine.querySelector(".clicked");
    let inText=onLine2.querySelector(".online-dis p").childNodes[0].textContent
    // //    summary
    // let sum1=document.querySelectorAll(".add-sum p")[0].childNodes[0]
    // sum1.textContent=inText

    let newElem=` <div>
    <div class="add-sum">
        <p>${inText} <span>+$1/mon</span></p>
    </div>
</div>`
sumMenu.appendChild(newElem)

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
    // moveTotheNext()
    // showProgress()
})
backButton.addEventListener("click",()=>{
    // showProgress()
    slideBackward(currentslide);   
})
