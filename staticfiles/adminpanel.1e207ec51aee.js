
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
const detail_page = document.querySelector(".detail-page");

const nav_items = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");
// const page_title = document.querySelector(".page-name");
var current_page = 0;
var prev_page = 0;

dashboard.addEventListener("click", loadDashboard);
unpaid_agree.addEventListener("click", loadUnpaid_Agree);
dynamic_page.addEventListener("click", loadDynamic_page);


const close_detail_page = document.getElementById("close-detail-page");

close_detail_page.addEventListener("click", CloseDetailPage)

function CloseDetailPage(){
    pages[3].classList.add("d-none");
    pages[prev_page].classList.remove("d-none");
    nav_items[prev_page].classList.add("active");
    current_page = prev_page;
}

function load_detail_page(){
    if(pages[3].classList.contains("d-none")){
        pages[3].classList.remove("d-none");
    }
    if(current_page != 3){
        pages[current_page].classList.add("d-none");
    }
    nav_items[current_page].classList.remove("active");
    prev_page = current_page;
    current_page = 3;
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
    get_unpaid_agreements();
}

function loadDynamic_page(){
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
    page_title.innerHTML = "Dynamic Pages";
}





// DashBoard Section
function get_agreements(){
    // $("#agreement-table").empty();
    const table_rows = $("#agreement-table tr td:first-child");
    let row_ids = []
    for(let i=0; i<table_rows.length; i++){
        row_ids.push(table_rows[i].innerText);
    }
    let url = "/fetch_data/"
    $.get(url, function(data, status, xhr){
        if(status == "success"){
            data.forEach(element => {
                if(! row_ids.includes(String(element.pk))){
                    let child = `<tr><td>${element.pk}</td>
                        <td>${element.fields.first_name} ${element.fields.middle_name} ${element.fields.last_name}</td>
                        <td>${element.fields.agreement_startdate}</td>
                        <td>${element.fields.status}</td>
                        <td>${element.fields.total_amount}</td>
                        <td>${element.fields.payment}</td>
                        <td><p class="page-detail text-primary" style="cursor:pointer;" onclick=detail_page_info(${element.pk})>Details</p></td>
                        <td><p class="page-detail text-danger" style="cursor:pointer;" onclick=delete_agreement(${element.pk})>Delete</p></td>`
                        
                    $("#agreement-table").append(child);
                }
            });
        }else{
            alert("Error: " + xhr.status + ": " + xhr.statusText + "<br>" + "Refresh the page");
        }
    })
}
get_agreements();
var get_agreements_interval = setInterval(get_agreements, 5000);


function delete_agreement(agreement_id){
    let get_url = "/delete_data/"+agreement_id+"/";
    $.get(get_url, (data, status)=>{
        if(status=="success"){
            alert(data)
            clearInterval(get_agreements_interval);
            $("#agreement-table").empty();
            let url = "/fetch_data/"
            $.get(url, function(data, status, xhr){
                console.log(data);
                if(status == "success"){
                    data.forEach(element => {
                            let child = `<tr><td>${element.pk}</td>
                                <td>${element.fields.first_name} ${element.fields.middle_name} ${element.fields.last_name}</td>
                                <td>${element.fields.agreement_startdate}</td>
                                <td>${element.fields.status}</td>
                                <td>${element.fields.total_amount}</td>
                                <td>${element.fields.payment}</td>
                                <td><p class="page-detail text-primary" style="cursor:pointer;" onclick=detail_page_info(${element.pk})>Details</p></td>
                                <td><p class="page-detail text-danger" style="cursor:pointer;" onclick=delete_agreement(${element.pk})>Delete</p></td>`
                                
                            $("#agreement-table").append(child);
                    });
                }else{
                    alert("Error: " + xhr.status + ": " + xhr.statusText + "<br>" + "Refresh the page");
                }
            });
            var get_agreements_interval = setInterval(get_agreements, 5000);
        }
        else{
            alert("Something went wrong!!!");
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
                        <td>${element.fields.first_name} ${element.fields.middle_name} ${element.fields.last_name}</td>
                        <td>${element.fields.agreement_startdate}</td>
                        <td>${element.fields.status}</td>
                        <td>${element.fields.total_amount}</td>
                        <td><p class="page-detail text-primary" style="cursor:pointer;" onclick=detail_page_info(${element.pk})>Details</p></td>`
                        
                    $("#unpaidAgreement-table").append(child);
                }
            });
        }else{
            alert("Error: " + xhr.status + ": " + xhr.statusText + "<br>" + "Refresh the page");
        }
    })
}
get_unpaid_agreements();




// Dynamic Page Section


$("#dynamic-form").submit(function(event){
    event.preventDefault();
    let url = "/add_page/";
    $.post(url,
        {
            title : $("#pageTitle").val(),
            url : $("#pageURL").val(),
            text : $("#desc").val(),
            csrfmiddlewaretoken: $("#csrftoken").val()
        },
    );
    alert("Page Created Successfully");
    $("#pageTitle").val("");
    $("#pageURL").val("");
    $("#desc").val("");
    get_dynamic_pages();
})



function get_dynamic_pages(){
    $("#dynamic-table").empty();
    let url = "/pages/";
    $.get(url, function(data, status, xhr){
        if(status == "success"){
            data.forEach(element => {
                let child = `<tr><td>${element.pk}</td>
                    <td>${element.fields.title}</td>
                    <td>/${element.fields.url}</td>
                    <td class="text-center"><p class="page-delete text-danger" style="cursor: pointer;"  onclick=delete_page(${element.pk})>Delete</p></td></tr>`;
                $("#dynamic-table").append(child);
            });
        }else{
            alert("Error: " + xhr.status + ": " + xhr.statusText + "<br>" + "Refresh the page");
        }
    })
}
get_dynamic_pages();


function delete_page(page_id=2){
    let url = "/delete_page/"+page_id;
    $.get(url, function(data, status){
        if (status == "success"){
            alert(data);
            get_dynamic_pages();
        }else{
            alert("Something Went Wrong!!!!");
        }
    });
}




// Detail Page Section

function detail_page_info(agreement_id){
    $("#detail-table").empty();
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

            $("#agreement-table").empty();
            $("#property-table").empty();
            $("#landlord-table").empty();
            $("#tenant-table").empty();

            const username = data.first_name + " " + data.last_name;
            $("#detailUsername").html(username);
            $("#detailUsertype").html(data.user_type);
            $("#detailType").html(data.package_type);
            $("#detailDate").html(data.agreement_start_date);
            $("#detailPayment").html(data.payment_status);

            
            const optionValue = data.status;

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
                    <td width="60%" class="px-2 px-md-5 text-bold" style="text-transform: capitalize; font-weight: bold;">${value}</td>
                    <td >${key}</td>
                </tr>`
                $("#agreementdetail-table").append(child);
            })

            property_data.forEach((key, value)=>{
                let child = `<tr>
                    <td width="60%" class="px-2 px-md-5 text-bold" style="text-transform: capitalize; font-weight: bold;">${value}</td>
                    <td >${key}</td>
                </tr>`
                $("#property-table").append(child);
            })

            landlord_data.forEach((key, value)=>{
                let child = `<tr>
                    <td width="60%" class="px-2 px-md-5 text-bold" style="text-transform: capitalize; font-weight: bold;">${value}</td>
                    <td >${key}</td>
                </tr>`
                $("#landlord-table").append(child);
            })

            tenant_data.forEach((key, value)=>{
                let child = `<tr>
                    <td width="60%" class="px-2 px-md-5 text-bold" style="text-transform: capitalize; font-weight: bold;">${value}</td>
                    <td >${key}</td>
                </tr>`
                $("#tenant-table").append(child);
            })
            
        }
    })
    window.scrollTo(0, 0);
    load_detail_page();
}







// Merchant info Form

function get_merchant_data(){
    let url = "/paytm_info/"
    $.get(url, function(data, status, xhr){
        if(status == "success"){
            $("#merchantKey").val(data.merchant_key);
            $("#merchantID").val(data.merchant_id);
        }else{
            alert("Error: " + xhr.status + ": " + xhr.statusText + "<br>" + "Refresh the page");
        }
    })
}
get_merchant_data();


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
                alert(data)
            }
            else{
                alert("Somethong Went Wrong!!!")
            }
            get_merchant_data();
        }
    );
    
})
