
// var next_click=document.querySelector(".next_button");
// var main_form=document.querySelectorAll(".main");
// var step_list = document.querySelectorAll(".progress-bar li");
// var num = document.querySelector(".step-number");
// let formnumber=0;


// next_click.addEventListener('click',function(){
//     if(!validateform()){
//         return false
//     }
//     formnumber++;
//     if(formnumber > 6){
//     formnumber = 6;
//     }
//     updateform();
//     progress_forward();
// });


// var back_click=document.querySelectorAll(".back_button");
// back_click.forEach(function(back_click_form){
//     back_click_form.addEventListener('click',function(){
//        formnumber--;
//        if(formnumber<0){
//         formnumber = 0;
//        }
//        if(formnumber<6 && next_click.classList.contains("hidden")){
//         document.querySelector(".submit_button").classList.add("hidden");
//         next_click.classList.remove("hidden");
//         }
//        updateform();
//        progress_backward();
//        contentchange();
//     });
// });

// var username=document.querySelector("#user_name");
// var shownname=document.querySelector(".shown_name");
 

// var submit_click=document.querySelectorAll(".submit_button");
// submit_click.forEach(function(submit_click_form){
//     submit_click_form.addEventListener('click',function(){
//        shownname.innerHTML= username.value;
//        formnumber++;
//        updateform(); 
//     });
// });

// function updateform(){
//     main_form.forEach(function(mainform_number){
//         mainform_number.classList.remove('active');
//     })
//     main_form[formnumber].classList.add('active');
// } 
 
// function progress_forward(){ 
//     num.innerHTML = formnumber+1;
//     step_list[formnumber].classList.add('active');
// }  

// function progress_backward(){
//     var form_num = formnumber+1;
//     step_list[form_num].classList.remove('active');
//     num.innerHTML = form_num;
// }


const form_steps = document.querySelectorAll(".form-step");
const forms = document.querySelectorAll(".main");
var num = document.querySelector(".step-number");
var current_form = forms[0];
var current_form_number = 0;
const formContainer = document.querySelector(".formContainer")
const form_bottom_bar = document.querySelector(".form-bottom-bar");

const edit_btns = document.querySelectorAll(".edit-btn");

// form_steps.forEach((item) => {
//     item.addEventListener("click", changeForm);
// })

form_steps.forEach((item) => {
        item.addEventListener('click',function(){
        if(!validateform()){
            return false
        }
        changeForm(item);
    })
});

edit_btns.forEach((item, key) => {
    item.addEventListener('click',function(){
    // if(!validateform()){
    //     return false
    // }
    editForm(item, key);
})
});

function editForm(target, key) {
    form_steps[current_form_number].classList.remove("active");
    current_form_number = key;
    form_steps[current_form_number].classList.add("active");
    forms[key].classList.add("active");
    current_form.classList.remove("active");
    num.innerHTML = current_form_number+1;
    current_form = forms[current_form_number];
    formContainer.scrollTo(0,0);
    if(current_form.classList.contains("last-form")){
        form_bottom_bar.style.display = "none";
    }
    else{
        form_bottom_bar.style.display = "flex";
    }
}

function changeForm(target) {
    form_steps.forEach((item, key)=>{
        if(target == item){
            current_form_number = key;
            item.classList.add("active");
        }
        else{
            if(item.classList.contains("active")){
                item.classList.remove("active");
            }
        }
    })
    forms[current_form_number].classList.add("active");
    current_form.classList.remove("active");
    num.innerHTML = current_form_number+1;
    current_form = forms[current_form_number];
    formContainer.scrollTo(0,0);
    if(current_form.classList.contains("last-form")){
        form_bottom_bar.style.display = "none";
    }
    else{
        form_bottom_bar.style.display = "flex";
    }
}

var next_click=document.querySelector(".next_button");
next_click.addEventListener("click", progress_forward); 

function progress_forward(){
    if(!validateform()){
        return false
    }
    if(current_form_number < (forms.length-1)){
        current_form.classList.remove("active");
        forms[current_form_number+1].classList.add("active")
        form_steps[current_form_number].classList.remove("active");
        form_steps[current_form_number+1].classList.add("active");
        current_form_number += 1;
        num.innerHTML = current_form_number+1;
        current_form = forms[current_form_number]
        formContainer.scrollTo(0,0);
        if(current_form.classList.contains("last-form")){
            form_bottom_bar.style.display = "none";
        }
        else{
            form_bottom_bar.style.display = "flex";
        }
    }
}

 
 
function validateform(){
    let alerted = false;
    validate=true;
    var validate_inputs=document.querySelectorAll(".main.active input");
    validate_inputs.forEach(function(vaildate_input){
        vaildate_input.classList.remove('warning');
        if(vaildate_input.hasAttribute('require')){
            if(vaildate_input.value.length==0){
                validate=false;
                vaildate_input.classList.add('warning');
                if(alerted==false){
                    alert("Please Fill the required fields!!");
                    alerted = true;
                }

            }
        }
    });
    return validate;
    
}




var package_1_selector =  document.getElementById("package-1");
var package_2_selector =  document.getElementById("package-2");
var package_1_container = document.querySelector(".package-1");
var package_2_container = document.querySelector(".package-2");

if(package_1_selector.checked){
    package_1_container.classList.add("selected");
}
if(package_2_selector.checked){
    package_2_container.classList.add("selected");
}


package_1_selector.onchange = () => {
    package_1_container.classList.add("selected");
    if(package_2_container.classList.contains("selected")){
        package_2_container.classList.remove("selected");
    }
}

package_2_selector.onchange = () => {
    package_2_container.classList.add("selected");
    if(package_1_container.classList.contains("selected")){
        package_1_container.classList.remove("selected");
    }
}


var tenant_selector =  document.getElementById("tenant-type");
var owner_selector =  document.getElementById("owner-type");
var tenant_container = document.querySelector(".tenant-type");
var owner_container = document.querySelector(".owner-type");

if(tenant_selector.checked){
    tenant_container.classList.add("selected");
}
if(owner_selector.checked){
    owner_container.classList.add("selected");
}


tenant_selector.onchange = () => {
    tenant_container.classList.add("selected");
    if(owner_container.classList.contains("selected")){
        owner_container.classList.remove("selected");
    }
}

owner_selector.onchange = () => {
    owner_container.classList.add("selected");
    if(tenant_container.classList.contains("selected")){
        tenant_container.classList.remove("selected");
    }
}



const preview_agreement = document.getElementById("preview-agreement");
const close_preview = document.getElementById("close-preview");
const preview_panel = document.getElementById("preview-panel");

preview_agreement.addEventListener("click", ()=>{
    preview_panel.classList.remove("preview-hidden");
})
close_preview.addEventListener("click", ()=>{
    preview_panel.classList.add("preview-hidden");
})