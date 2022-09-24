


$("#sidebarToggleMenu").click(
    ()=>{
        if($("#accordionSidebar").hasClass("d-none")){
            $("#accordionSidebar").removeClass("d-none");
        }else{
            $("#accordionSidebar").addClass("d-none");
        }
    }
)

function makeAlert(type, message){
    if(type=="success"){
        $("#alert_success").removeClass("d-none");
        $("#alert_success").text(message);
        setTimeout(() => {
            $("#alert_success").addClass("d-none");
            $("#alert_success").text("");
        }, 3000);
    }
    if(type=="fail"){
        $("#alert_danger").removeClass("d-none");
        $("#alert_danger").text(message);
        setTimeout(() => {
            $("#alert_danger").addClass("d-none");
            $("#alert_danger").text("");
        }, 3000);
    }
}






// Dynamic Page Form Section
const create_dynamic_pages_btn = document.getElementById("create-dynamic-pages");
const dynamic_page_form_container = document.getElementById("dynamic-page-form");

create_dynamic_pages_btn.addEventListener("click", ()=>{
    if(dynamic_page_form_container.classList.contains("d-none")){
        dynamic_page_form_container.classList.remove("d-none");
        dynamic_page_form_container.classList.add("d-block");
    }else{
        dynamic_page_form_container.classList.remove("d-block");
        dynamic_page_form_container.classList.add("d-none");
    }
})



const dashboard = document.querySelector(".link-1");
const unpaid_agree = document.querySelector(".link-2");
const dynamic_page = document.querySelector(".link-3");
const coupon_page = document.querySelector(".link-5");
const detail_page = document.querySelector(".detail-page");

const nav_items = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");
// const page_title = document.querySelector(".page-name");
var current_page = 0;
var prev_page = 0;

dashboard.addEventListener("click", loadDashboard);
unpaid_agree.addEventListener("click", loadUnpaid_Agree);
dynamic_page.addEventListener("click", loadDynamic_page);
coupon_page.addEventListener("click", loadCoupon_page);


const close_detail_page = document.getElementById("close-detail-page");

close_detail_page.addEventListener("click", CloseDetailPage)

// function CloseDetailPage(){
//     $(".detail-page").addClass("d-none");
// }

// function load_detail_page(){
//     $(".detail-page").removeClass("d-none");
// }


function CloseDetailPage(){
    pages[4].classList.add("d-none");
    pages[prev_page].classList.remove("d-none");
    nav_items[prev_page].classList.add("active");
    current_page = prev_page;
}

function load_detail_page(){
    if(pages[4].classList.contains("d-none")){
        pages[4].classList.remove("d-none");
    }
    if(current_page != 4){
        pages[current_page].classList.add("d-none");
    }
    nav_items[current_page].classList.remove("active");
    prev_page = current_page;
    current_page = 4;
}


function loadDashboard(){
    if(pages[0].classList.contains("d-none")){
        pages[0].classList.remove("d-none");
    }
    if(current_page != 0){
        pages[current_page].classList.add("d-none");
    }
    nav_items[current_page].classList.remove("active");
    prev_page = current_page;
    current_page = 0;
    nav_items[current_page].classList.add("active");
}

function loadUnpaid_Agree(){
    if(pages[2].classList.contains("d-none")){
        pages[2].classList.remove("d-none");
    }
    if(current_page != 2){
        pages[current_page].classList.add("d-none");
    }
    nav_items[current_page].classList.remove("active");
    prev_page = current_page;
    current_page = 2;
    nav_items[current_page].classList.add("active");
    // get_unpaid_agreements();
}

function loadDynamic_page(){
    if(pages[3].classList.contains("d-none")){
        pages[3].classList.remove("d-none");
    }
    if(current_page != 3){
        pages[current_page].classList.add("d-none");
    }
    nav_items[current_page].classList.remove("active");
    prev_page = current_page;
    current_page = 3;
    nav_items[current_page].classList.add("active");
    // page_title.innerHTML = "Dynamic Pages";
}


function loadCoupon_page(){
    if(pages[1].classList.contains("d-none")){
        pages[1].classList.remove("d-none");
    }
    if(current_page != 1){
        pages[current_page].classList.add("d-none");
    }
    nav_items[current_page].classList.remove("active");
    prev_page = current_page;
    current_page = 1;
    nav_items[current_page].classList.add("active");
}


// Create Agreement Form
const createAgreement = document.getElementById("createAgreement");
createAgreement.addEventListener("click", loadAgreementForm);

$("#closeAgreementForm").click(
    function CloseAgreementForm(){
        pages[5].classList.add("d-none");
        pages[prev_page].classList.remove("d-none");
        nav_items[prev_page].classList.add("active");
        current_page = prev_page;
    }
)



function loadAgreementForm(){
    if(pages[5].classList.contains("d-none")){
        pages[5].classList.remove("d-none");
    }
    if(current_page != 5){
        pages[current_page].classList.add("d-none");
    }
    nav_items[current_page].classList.remove("active");
    prev_page = current_page;
    current_page = 5;
}



// DashBoard Section

// var CURRENT_AGREEMENT_NUMBER = 0;

// $(document).ready(()=>{
//     CURRENT_AGREEMENT_NUMBER = $("#agreement-table tr").length;
// })

var myinterval;

function get_agreements(){

    CURRENT_AGREEMENT_NUMBER = $("#agreement-table tr").length;
    let TOTAL_AGREEMENT_NUMBER = 0;

    $.get("/cout_data/", function(data, status, xhr){
        if(status == "success"){
            TOTAL_AGREEMENT_NUMBER = parseInt(data);

            let MISSING_AGREEMENTS = TOTAL_AGREEMENT_NUMBER - CURRENT_AGREEMENT_NUMBER;

            if(MISSING_AGREEMENTS > 0){

                clearInterval(myinterval);
                let url = "/data_number/" + MISSING_AGREEMENTS + "/"
                $.get(url, (data, status)=>{
                    if(status == "success"){
                        // console.log(data);
                        data.forEach(element => {
                            let child = `<tr><td>${element.pk}</td>
                                <td>${element.fields.first_name} ${element.fields.last_name}</td>
                                <td>${element.fields.agreement_start_date}</td>
                                <td>${element.fields.status}</td>
                                <td>${element.fields.total_amount}</td>
                                <td>${element.fields.payment_status}</td>
                                <td class="page-detail text-primary" style="cursor:pointer;" onclick="detail_page_info(${element.pk})">Details</td>
                                <td class="page-detail text-danger" style="cursor:pointer;" onclick="delete_agreement(this, ${element.pk})">Delete</td></tr>`
                                
                            $("#agreement-table").prepend(child);
                        });
                    }
                })
                CURRENT_AGREEMENT_NUMBER += MISSING_AGREEMENTS;
                myinterval = setInterval(get_agreements, 6000)
            }
        }
    })

    // $("#agreement-table").empty();
    // const table_rows = $("#agreement-table tr td:first-child");
    // let row_ids = []
    // for(let i=0; i<table_rows.length; i++){
    //     row_ids.push(table_rows[i].innerText);
    // }
    // let url = "/fetch_data/"
    // $.get(url, function(data, status, xhr){
    //     if(status == "success"){
    //         data.forEach(element => {
    //             if(! row_ids.includes(String(element.pk))){
    //                 let child = `<tr><td>${element.pk}</td>
    //                     <td>${element.fields.first_name} ${element.fields.last_name}</td>
    //                     <td>${element.fields.agreement_start_date}</td>
    //                     <td>${element.fields.status}</td>
    //                     <td>${element.fields.total_amount}</td>
    //                     <td>${element.fields.payment_status}</td>
    //                     <td><p class="page-detail text-primary" style="cursor:pointer;" onclick=detail_page_info(${element.pk})>Details</p></td>
    //                     <td><p class="page-detail text-danger" style="cursor:pointer;" onclick=delete_agreement(${element.pk})>Delete</p></td>`
                        
    //                 $("#agreement-table").prepend(child);
    //             }
    //         });
    //     }else{
    //         let message = "Error: " + xhr.status + ": " + xhr.statusText + "-" + "Please, Refresh the page"
    //         makeAlert("fail", message);
    //     }
    // })
}

myinterval = setInterval(get_agreements, 6000);



function delete_agreement(element, agreement_id){
    let get_url = "/delete_data/"+agreement_id+"/";
    element.parentNode.style.display = "none";
    // $("#spinner").css("display", "flex");
    $.get(get_url, (data, status)=>{
        if(status=="success"){
            makeAlert("success", data)
            element.parentNode.style.display = "none";
        }
        else{
            makeAlert("fail", "Something went wrong.")
        }
    })
    
}



// Unpaid Agreements Section
function get_unpaid_agreements(){
    $("#unpaidAgreement-table").empty();
    const table_rows = $("#unpaidAgreement-table tr td:first-child");
    let row_ids = []
    for(let i=0; i<table_rows.length; i++){
        row_ids.push(table_rows[i].innerText);
    }
    let url = "/unpaid_agreements/"
    $.get(url, function(data, status, xhr){
        if(status == "success"){
            data.forEach(element => {
                if(! row_ids.includes(element.pk)){
                    
                    let child = `<tr><td>${element.pk}</td>
                        <td>${element.fields.first_name} ${element.fields.last_name}</td>
                        <td>${element.fields.agreement_start_date}</td>
                        <td>${element.fields.status}</td>
                        <td>${element.fields.total_amount}</td>
                        <td><p class="page-detail text-primary" style="cursor:pointer;" onclick=detail_page_info(${element.pk})>Details</p></td>`
                        
                    $("#unpaidAgreement-table").prepend(child);
                }
            });
        }else{
            // alert("Error: " + xhr.status + ": " + xhr.statusText + "<br>" + "Refresh the page");
            let message = "Error: " + xhr.status + ": " + xhr.statusText + "-" + "Please, Refresh the page"
            makeAlert("fail", message);
        }
    })
}
// get_unpaid_agreements();




// Coupon Page Section

const create_coupon_btn = document.getElementById("create-coupon");
const coupon_form_container = document.getElementById("coupon-page-form");

create_coupon_btn.addEventListener("click", ()=>{
    if(coupon_form_container.classList.contains("d-none")){
        coupon_form_container.classList.remove("d-none");
        coupon_form_container.classList.add("d-block");
    }else{
        coupon_form_container.classList.remove("d-block");
        coupon_form_container.classList.add("d-none");
    }
})

$("#coupon-form").submit(function(event){
    event.preventDefault();
    let url = "/add_coupon/";
    $("#spinner").removeClass("d-none");
    $("#spinner").addClass("d-flex");
    $.post(url,
        {
            coupon_name : $("#couponName").val(),
            coupon_code : $("#couponCode").val(),
            amount : $("#couponAmount").val(),
            csrfmiddlewaretoken: $("#csrftoken_coupon").val()
        },
        (data, status)=>{
            if(status == "success"){
                // console.log(data);
                let coupon_id = data
                let child = `<tr>
                    <td>${$("#couponName").val()}</td>
                    <td>${$("#couponCode").val()}</td>
                    <td>${$("#couponAmount").val()}</td>
                    <td class="text-center page-delete text-danger" style="cursor: pointer;"  onclick="delete_coupon(this, ${coupon_id})">Delete</td>
                </tr>`;
                $("#coupon-table").prepend(child);
                $("#spinner").addClass("d-none");
                $("#spinner").removeClass("d-flex");
                makeAlert("success", "Coupon Created Successfully")
                $("#couponName").val("");
                $("#couponCode").val("");
                $("#couponAmount").val("");
            }
        }
    );
    // alert("Page Created Successfully");
    
    // get_coupon();
})

function get_coupon(){
    $("#coupon-table").empty();
    let url = "/coupon/";
    $.get(url, function(data, status, xhr){
        if(status == "success"){
            data.forEach(element => {
                let child = `<tr><td>${element.fields.coupon_name}</td>
                    <td>${element.fields.coupon_code}</td>
                    <td>${element.fields.amount}</td>
                    <td class="text-center page-delete text-danger" style="cursor: pointer;"  onclick="delete_coupon(this, ${element.pk})">Delete</td></tr>`;
                $("#coupon-table").prepend(child);
            });
        }else{
            // alert("Error: " + xhr.status + ": " + xhr.statusText + "<br>" + "Refresh the page");
            let message = "Error: " + xhr.status + ": " + xhr.statusText + "-" + "Please, Refresh the page"
            makeAlert("fail", message);
        }
    })
}
get_coupon();


function delete_coupon(element, coupon_id){
    $("#spinner").removeClass("d-none");
    $("#spinner").addClass("d-flex");
    let url = "/delete_coupon/"+ coupon_id;
    $.get(url, function(data, status){
        if (status == "success"){
            $("#spinner").addClass("d-none");
            $("#spinner").removeClass("d-flex");
            makeAlert("success", data);
            element.parentNode.style.display = "none";
        }else{
            makeAlert("fail", "Something Went Wrong")
        }
    });
}



// Dynamic Page Section

$("#dynamic-form").submit(function(event){
    event.preventDefault();
    $("#spinner").removeClass("d-none");
    $("#spinner").addClass("d-flex");
    let url = "/add_page/";
    $.post(url,
        {
            title : $("#pageTitle").val(),
            url : $("#pageURL").val(),
            text : $("#desc").val(),
            csrfmiddlewaretoken: $("#csrftoken").val()
        },
        (data, status) => {
            if(status == "success"){

                let child = `<tr><td>${data}</td>
                    <td>${$("#pageTitle").val()}</td>
                    <td><a href="/page/${$("#pageURL").val()}"> tenantly.in/page/${$("#pageURL").val()}</a></td>
                    <td class="text-center page-delete text-danger" style="cursor: pointer;"  onclick="delete_page(this, ${data})">Delete</td></tr>`;
                $("#dynamic-table").prepend(child);

                $("#spinner").addClass("d-none");
                $("#spinner").removeClass("d-flex");
                makeAlert("success", "Page Created Successfully")
                $("#pageTitle").val("");
                $("#pageURL").val("");
                $("#desc").val("");
                // get_dynamic_pages();
            }
        }
    );
    // alert("Page Created Successfully");
    
})



function get_dynamic_pages(){
    $("#dynamic-table").empty();
    let url = "/pages/";
    $.get(url, function(data, status, xhr){
        if(status == "success"){
            data.forEach(element => {
                let child = `<tr><td>${element.pk}</td>
                    <td>${element.fields.title}</td>
                    <td><a href="/page/${element.fields.url}"> tenantly.in/page/${element.fields.url}</a></td>
                    <td class="text-center page-delete text-danger" style="cursor: pointer;"  onclick="delete_page(this, ${element.pk})">Delete</td></tr>`;
                $("#dynamic-table").prepend(child);
            });
        }else{
            let message = "Error: " + xhr.status + ": " + xhr.statusText + "<br>" + "Refresh the page";
            makeAlert("fail", message);
        }
    })
}
get_dynamic_pages();


function delete_page(element, page_id){
    $("#spinner").removeClass("d-none");
    $("#spinner").addClass("d-flex");
    let url = "/delete_page/"+page_id;
    $.get(url, function(data, status){
        if (status == "success"){
            // alert(data);
            $("#spinner").addClass("d-none");
            $("#spinner").removeClass("d-flex");
            makeAlert("success", data);
            element.parentNode.style.display = "none";
            // get_dynamic_pages();
        }else{
            // alert("Something Went Wrong!!!!");
            makeAlert("fail", "Something Went Wrong.")
        }
    });
}




// Detail Page Section

function detail_page_info(agreement_id){
    $("#spinner").removeClass("d-none");
    $("#spinner").addClass("d-flex");


    $("#detailagreement_table").empty();
    $("#detailproperty_table").empty();
    $("#detaillandlord_table").empty();
    $("#detailtenant_table").empty();

    $("#detailUsername").html("");
    $("#detailUsertype").html("");
    $("#detailType").html("");
    $("#detailDate").html("");
    $("#detailPayment").html("");
    $("#detailDuration").html("");
    $("#contactNumber").html("");


    const url = "/fetch_data/"+agreement_id+"/"
    $.get(url, (data, status)=>{
        if(status=="success"){

            $("#hidden_id").val(data[0].pk);


            data = data[0].fields
            let agreement_data = new Map();
            let property_data = new Map();
            let tenant_data = new Map();
            let landlord_data = new Map();

            for(let key in data){
                if(key.includes("property")){
                    let value = data[key];
                    key = key.replace("property_", "").replaceAll("_", " ");
                    property_data.set(key, value);
                }
                else if(key.includes("tenant")){
                    let value = data[key];
                    key = key.replace("tenant_", "").replaceAll("_", " ")
                    tenant_data.set(key, value);
                }
                else if(key.includes("landlord")){
                    let value = data[key];
                    key = key.replace("landlord_", "").replaceAll("_", " ")
                    landlord_data.set(key, value);
                }
                else{
                    let value = data[key];
                    key = key.replaceAll("_", " ")
                    agreement_data.set(key, value);
                }
            }

            

            const username = data.first_name + " " + data.last_name;
            $("#detailUsername").html(username);
            $("#detailUsertype").html(data.user_type);
            $("#detailType").html(data.package_type);
            $("#detailDate").html(data.agreement_start_date);
            $("#detailPayment").html(data.payment_status);
            $("#detailDuration").html(data.agreement_duration);
            $("#contactNumber").html(data.contact_number);

            
            const optionValue = data.status;
            $("#detailStatus").empty();
            if(optionValue == "Submitted"){
                const x = `<option selected value="Submitted">Submitted</option>
                <option value="Processing">Processing</option>
                <option value="Registered">Registered</option>
                <option value="Expired">Expired</option>`
                $("#detailStatus").append(x);
            }else if(optionValue == "Processing"){
                const x = `<option value="Submitted">Submitted</option>
                <option selected value="Processing">Processing</option>
                <option value="Registered">Registered</option>
                <option value="Expired">Expired</option>`
                $("#detailStatus").append(x);
            }else if(optionValue == "Registered"){
                const x = `<option value="Submitted">Submitted</option>
                <option value="Processing">Processing</option>
                <option selected value="Registered">Registered</option>
                <option value="Expired">Expired</option>`
                $("#detailStatus").append(x);
            }else{
                const x = `<option value="Submitted">Submitted</option>
                <option value="Processing">Processing</option>
                <option value="Registered">Registered</option>
                <option selected value="Expired">Expired</option>`
                $("#detailStatus").append(x);
            }

            agreement_data.forEach((key, value)=>{
                let child = `<tr>
                    <td width="60%" class="px-2 px-md-5 text-bold" style="text-transform: capitalize; font-size: 1.2rem; color: black;">${value}</td>
                    <td >${key}</td>
                </tr>`
                $("#detailagreement_table").append(child);
            })

            property_data.forEach((key, value)=>{
                let child = `<tr>
                    <td width="60%" class="px-2 px-md-5 text-bold" style="text-transform: capitalize; font-size: 1.2rem; color: black;">${value}</td>
                    <td >${key}</td>
                </tr>`
                $("#detailproperty_table").append(child);
            })

            landlord_data.forEach((key, value)=>{
                let child = `<tr>
                    <td width="60%" class="px-2 px-md-5 text-bold" style="text-transform: capitalize; font-size: 1.2rem; color: black;">${value}</td>
                    <td >${key}</td>
                </tr>`
                $("#detaillandlord_table").append(child);
            })

            tenant_data.forEach((key, value)=>{
                let child = `<tr>
                    <td width="60%" class="px-2 px-md-5 text-bold" style="text-transform: capitalize; font-size: 1.2rem; color: black;">${value}</td>
                    <td >${key}</td>
                </tr>`
                $("#detailtenant_table").append(child);
            })

            $("#spinner").addClass("d-none");
            $("#spinner").removeClass("d-flex");
            
        }
    })
    window.scrollTo(0, 0);
    load_detail_page();
}


function changeStatus(){
    $("#spinner").removeClass("d-none");
    $("#spinner").addClass("d-flex");

    const agree_id = $("#hidden_id").val();
    const agree_status = $("#detailStatus").val()

    $.post("/update_data/",
    {
        "id": $("#hidden_id").val(),
        "status": $("#detailStatus").val(),
        "csrfmiddlewaretoken" : $("#staus_csrf_token").val()

    }, (data, status)=>{
        if(status=="success"){

            let isChanged = false;
            const paid_agreements_table = $("#agreement-table tr");

            for(let i=0; i<paid_agreements_table.length; i++){
                const row_id =  $($(paid_agreements_table[i]).children()[0]).text();
                if(row_id == agree_id){
                    $( $(paid_agreements_table[i]).children()[3] ).text(agree_status);
                    isChanged = true;
                    break;
                }
            }

            if(!isChanged){
                const unpaid_agreements_table = $("#unpaidAgreement-table tr");
                for(let i=0; i<unpaid_agreements_table.length; i++){
                    const row_id =  $($(unpaid_agreements_table[i]).children()[0]).text();
                    if(row_id == agree_id){
                        $( $(unpaid_agreements_table[i]).children()[3] ).text(agree_status);
                        isChanged = true;
                        break;
                    }
                }
            }

            $("#spinner").addClass("d-none");
            $("#spinner").removeClass("d-flex");
            makeAlert("success", data);
        }else{
            $("#spinner").addClass("d-none");
            $("#spinner").removeClass("d-flex");
            makeAlert("fail", "Something went Wrong. Please try again.");
        }
    })
}







// Merchant info Form

function get_merchant_data(){
    let url = "/paytm_info/"
    $.get(url, function(data, status, xhr){
        if(status == "success"){
            $("#merchantKey").val(data.merchant_key);
            $("#merchantID").val(data.merchant_id);
        }else{
            let message = "Error: " + xhr.status + ": " + xhr.statusText + "<br>" + "Refresh the page";
            makeAlert("fail", message);
        }
    })
}
// get_merchant_data();


$("#merchant_form_submit").click(function(event){
    // event.preventDefault();
    let url = "/paytm_info/";
    $.post(url,
        {
            merchant_key : $("#merchantKey").val(),
            merchant_id : $("#merchantID").val(),
            csrfmiddlewaretoken: $("#merchant_form_csrftoken").val()
        },
        function(data, status){
            if(status){
                // alert(data)
                makeAlert("success", data);
            }
            else{
                // alert("Somethong Went Wrong!!!")
                makeAlert("fail", "Somethong Went Wrong.")
            }
            get_merchant_data();
        }
    );
    
})




// Submit Agreement Creation Form
createAgreement1
const submitAgreementForm1 = document.getElementById("createAgreement1");
const submitAgreementForm2 = document.getElementById("createAgreement1");


$("#agreementCreationForm").on("submit", function (e) {
    var dataString = $(this).serialize();

    $("#spinner").removeClass("d-none");
    $("#spinner").addClass("d-flex");

    $.ajax({
      type: "POST",
      url: "/admin_add_agreement/",
      data: dataString,
      success: function () {
        $("#spinner").addClass("d-none");
        $("#spinner").removeClass("d-flex");
        makeAlert("success", "Agreement Successfully created.");
      }
    });
 
    e.preventDefault();
});

// submitAgreementForm1.addEventListener("click", (event)=>{
//     event.preventDefault();
//     $("#agreementCreationForm").submit();
//     console.log("working");
// })
// submitAgreementForm2.addEventListener("click", (event)=>{
//     event.preventDefault();
//     $("#agreementCreationForm").submit();
// })



// Calculate Total Amount
var original_amount = null;
var total_amount = 2000;
var a = 0;
var b = 0;
var c = 0;


$("#refundable-deposit-amount, #monthly-rent-amount, #agreement-duration").keyup(calculateTotalAmount);

$("#non-refundable-deposit").keyup(()=>{
    let non_refundable_amount =  parseInt($("#non-refundable-deposit").val());
    b = non_refundable_amount;

    total_amount =  (0.0025 * (a+b+c) + 2000).toFixed(2);

    $("#totalPrice").text(total_amount);
    $("#total_amount").val(String(total_amount));
    $("#payment_total_amount").text(total_amount);
    $("#payable_amount").text(total_amount);
    $("#stampDutyFee").text((total_amount - 2000).toFixed(2));
    original_amount = total_amount;
})


function calculateTotalAmount(){
    // console.log("Enter function");
    if($("#refundable-deposit-amount").val() && $("#monthly-rent-amount").val() && $("#agreement-duration").val()){
        let refundable_amount = parseInt($("#refundable-deposit-amount").val())
        let monthly_rent = parseInt($("#monthly-rent-amount").val())
        let duration = parseInt( $("#agreement-duration").val() )
        let years = (duration / 12);

        a = monthly_rent * duration;
        c = (10 * refundable_amount * years) / 100

        total_amount = (0.0025 * (a+b+c) + 2000).toFixed(2);

        $("#totalPrice").text(total_amount);
        $("#total_amount").val(String(total_amount));
        $("#payment_total_amount").text(total_amount);
        $("#payable_amount").text(total_amount);
        $("#stampDutyFee").text((total_amount - 2000).toFixed(2));
        original_amount = total_amount;
    }
}

