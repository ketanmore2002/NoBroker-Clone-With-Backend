from django.shortcuts import render,redirect

from .models import *

from django.contrib.admin.views.decorators import staff_member_required

from django.http import JsonResponse ,HttpResponse
from django.core import serializers
from django.views.decorators.csrf import csrf_exempt

from django.contrib.auth.decorators import login_required

from paytm import Checksum


from .forms import Agreement_Orders_form
from django.template.loader import render_to_string

# Create your views here.

def index (request):
    # dynamic_pages = page.objects.all()
    # dynamic_pages = list(dynamic_pages)
    # dynamic_pages.reverse()
    Agreement_Orders.objects.all().delete()
    # for i in range(700):
        # Agreement_Orders.objects.create(payment_status="paid")
    return render (request , 'landing_page.html')


@login_required()
def price(request):

    if request.method == 'POST':

        first_name = request.POST.get('year', None)

        middle_name = request.POST.get('year', None)
 
        last_name = request.POST.get('year', None)
 
        status = request.POST.get('year', None)
 

        type_of_package = request.POST.get('package-type', None)
 
        agreement_duration= request.POST.get('year', None)
 
        agreement_startdate = request.POST.get('year', None)
 
        monthly_rent_amount = request.POST.get('year', None)
 
        refundable_deposit_amount = request.POST.get('year', None)
 
        # rent_fix = models.CharField(max_length=30) 
        i_am = request.POST.get('year', None)
 
        type_of_property = request.POST.get('year', None)
 
        house_number = request.POST.get('year', None)
 
        building_number = request.POST.get('year', None)
 
        locality = request.POST.get('year', None)
 
        number_of_bedrooms = request.POST.get('year', None)
 
        number_of_bathrooms = request.POST.get('year', None)
 
        road_street = request.POST.get('year', None)
 
        property_pincode = request.POST.get('year', None)
 
        district = request.POST.get('year', None)
 
        property_number_type = request.POST.get('year', None)
 
        property_number = request.POST.get('year', None)
 
        flat_house_bluiltup_area = request.POST.get('year', None)
 
        bluit_area_unit = request.POST.get('year', None)
 
        property_use = request.POST.get('year', None)
 
        gallary_area = request.POST.get('year', None)
 
        gallary_area_unit= request.POST.get('year', None)
 
        praking_area = request.POST.get('year', None)
 
        praking_area_unit = request.POST.get('year', None)
 

        landlord_party_entity_type = request.POST.get('year', None)
 
        landlord_first_name = request.POST.get('year', None)

        landlord_middle_name = request.POST.get('year', None)
 
        landlord_age = request.POST.get('year', None)
 
        landlord_gender = request.POST.get('year', None)
 
        landlord_occupation = request.POST.get('year', None)
 
        landlord_phone_number = request.POST.get('year', None)
 
        landlord_aadhar_number = request.POST.get('year', None)
 
        landlord_pan_number = request.POST.get('year', None)
 
        landlord_email = request.POST.get('year', None)
 
        landlord_build_name = request.POST.get('year', None)
 
        landlord_flat_house_number = request.POST.get('year', None)
 
        landlord_floor_number = request.POST.get('year', None)
 
        landlord_road_street = request.POST.get('year', None)
 
        landlord_pincode = request.POST.get('year', None)
 
        landlord_village_city = request.POST.get('year', None)
 
        landlord_district = request.POST.get('year', None)
 
        landlord_state = request.POST.get('year', None)
 
        landlord_executing_through = request.POST.get('year', None)
 

        tenent_party_entity_type = request.POST.get('year', None)
 
        tenent_first_name = request.POST.get('year', None)

        tenent_middle_name = request.POST.get('year', None)
 
        tenent_age = request.POST.get('year', None)
 
        tenent_gender = request.POST.get('year', None)
 
        tenent_occupation = request.POST.get('year', None)
 
        tenent_phone_number = request.POST.get('year', None)
 
        tenent_aadhar_number = request.POST.get('year', None)
 
        tenent_pan_number = request.POST.get('year', None)
 
        tenent_email = request.POST.get('year', None)
 
        tenent_build_name = request.POST.get('year', None)
 
        tenent_flat_house_number = request.POST.get('year', None)
 
        tenent_floor_number = request.POST.get('year', None)
 
        tenent_road_street = request.POST.get('year', None)
 
        tenent_pincode = request.POST.get('year', None)
 
        tenent_village_city = request.POST.get('year', None)
 
        tenent_district = request.POST.get('year', None)
 
        tenent_state = request.POST.get('year', None)
 
        tenent_executing_through = request.POST.get('year', None)
 

        non_refundable_amount = request.POST.get('year', None)
 
        maintaiance_paid_by = request.POST.get('year', None)
 
        minimum_lockin_period = request.POST.get('year', None)
 
        notice_period = request.POST.get('year', None)
 

        stamp_and_registration_fee_paid_by = request.POST.get('year', None)
 
        miscellaneous = request.POST.get('year', None)

        # Agreement_Orders.objects.create(request.POST)


        # return redirect('/order_page/'+str(obj.id))

        # print(obj.id)


    # obj = Agreement_Orders()
    # obj.save()
    # form = Agreement_Orders_form(instance=obj)
    return render (request , 'form.html')




def test (request):
    return render(request , 'base.html')


@login_required()
def add_agreement(request):
    
    if request.method == "POST":
        # print(request.POST)
        # print(request.user.first_name)
        # print(request.user.last_name)
        form = Agreement_Orders_form(request.POST or None)
        if form.is_valid():
            obj = form.save()
            return redirect ("/order_page/" + str(obj.pk))
        else:
            # print("Something is Wrong")
            return HttpResponse("Something is wrong")


@login_required()
def admin_add_agreement(request):
    # print(request.POST)
    if request.method == "POST":
        form = Agreement_Orders_form(request.POST or None)
        if form.is_valid():
            obj = form.save()
            return HttpResponse("Agreement Created Successfully!!!")
        else:
            # print("Something is Wrong")
            return HttpResponse("Something is wrong")



@staff_member_required
def fetch_data (request) :
    data = Agreement_Orders.objects.all().filter(payment_status="paid")
    qs_json = serializers.serialize('json', data)
    return HttpResponse(qs_json, content_type='application/json')

@staff_member_required
def fetch_unpaid_agreements (request) :
         
    data = Agreement_Orders.objects.filter(payment_status="unpaid")
    qs_json = serializers.serialize('json', data)
    # print(type(request))
    return HttpResponse(qs_json, content_type='application/json')


# @csrf_exempt
@staff_member_required
def update_data (request):
    if request.method == 'POST':
        id = request.POST.get('id', None)
        status = request.POST.get('status', None)
        csrfmiddlewaretoken = request.POST.get('csrfmiddlewaretoken', None)
        Agreement_Orders.objects.filter(id=id).update(status = status)
        
        return HttpResponse("Agreement Successfully Updated!!!!")
    else :
        return HttpResponse("Post request not yet recieved!")



# @csrf_exempt
@staff_member_required
def delete_data (request, id):
    # if request.method == 'POST':
    #     id = request.POST.get('id', None)
    Agreement_Orders.objects.filter(id=id).delete()
        
    return HttpResponse("Agreement Successfully Deleted!!!!")
    # else :
    #     return HttpResponse("Post request not yet recieved!")


@staff_member_required
def fetch_data_id (request,id):
    data = Agreement_Orders.objects.filter(id=id)
    # data = page.objects.all()
    qs_json = serializers.serialize('json', data)
    return HttpResponse(qs_json, content_type='application/json')


def pages(request):
    data = page.objects.all()
    qs_json = serializers.serialize('json', data)
    return HttpResponse(qs_json, content_type='application/json')


@staff_member_required
def render_page (request,url):
    data = page.objects.get(url=url)
    dynamic_pages = page.objects.all()
    dynamic_pages = list(dynamic_pages)
    dynamic_pages.reverse()
    return render(request, "dynamic_page.html", {"data": data, "dynamic_pages": dynamic_pages[0:7]})
    

@staff_member_required
def add_page(request):
    url = request.POST["url"]
    title = request.POST["title"]
    text = request.POST["text"]

    obj = page.objects.create(url=url, title=title, text=text)
    obj.save()
    return HttpResponse(obj.pk)



@staff_member_required
def delete_page(request, pk):
    obj = page.objects.get(id=pk)
    obj.delete()
    return HttpResponse("Page Deleted Successfully!!!")



@staff_member_required
def admin_panal (request):
    paidAgreements = Agreement_Orders.objects.all().filter(payment_status="paid").order_by('-id')
    unpaidAgreements = Agreement_Orders.objects.all().filter(payment_status="unpaid").order_by('-id')
    data = paytm_auth.objects.get(id=1)
    merchant_key = data.MERCHANT_KEY
    merchant_id = data.MERCHANT_ID
    return render (request,"adminpanel.html", {"paidAgreements": paidAgreements, "unpaidAgreements":unpaidAgreements, "merchant_key": merchant_key, "merchant_id" : merchant_id}) 





import csv
# @login_required(login_url='/')
@staff_member_required
def getfile(request):  
    response = HttpResponse(content_type='text/csv')  
    response['Content-Disposition'] = 'attachment; filename="docs.csv"'  
    orders_db = Agreement_Orders.objects.all()  
    writer = csv.writer(response)  
    for order in orders_db:  
        writer.writerow([order.first_name,order.last_name,order.status,order.package_type,order.agreement_duration,order.agreement_start_date,order.monthly_rent_amount,order.refundable_deposit_amount,order.user_type,order.property_type,order.property_house_number,order.property_building_name,order.property_locality,order.property_bedrooms,order.property_bathrooms,order.property_road_street,order.property_pincode,order.property_district,order.property_number_type,order.property_number,order.property_bluiltup_area,order.property_bluiltup_area_unit,order.property_use,order.property_gallary_area,order.property_gallary_area_unit,order.property_parking_area,order.property_parking_area_unit,order.landlord_party_entity_type,order.landlord_party_type, order.landlord_first_name,order.landlord_middle_name,order.landlord_last_name, order.landlord_age,order.landlord_gender,order.landlord_occupation,order.landlord_phone_number,order.landlord_aadhar_number,order.landlord_pan_number,order.landlord_email,order.landlord_building_name,order.landlord_flat_house_number,order.landlord_floor_number,order.landlord_road_street,order.landlord_pincode,order.landlord_city,order.landlord_district,order.landlord_state,order.landlord_executing_through,order.tenant_party_entity_type,order.tenant_party_type, order.tenant_first_name,order.tenant_middle_name,order.tenant_last_name,order.tenant_age,order.tenant_gender,order.tenant_occupation,order.tenant_phone_number,order.tenant_aadhar_number,order.tenant_pan_number,order.tenant_email,order.tenant_building_name,order.tenant_flat_house_number,order.tenant_floor_number,order.tenant_road_street,order.tenant_pincode,order.tenant_city,order.tenant_district,order.tenant_state,order.tenant_executing_through,order.non_refundable_amount,order.maintaiance_paid_by,order.minimum_lockin_period,order.notice_period,order.stamp_and_registration_fee_paid_by,order.miscellaneous, order.total_amount, order.payment_status])  
    return response  




@csrf_exempt
@login_required(login_url='/')
def order_page(request, id):


    cred = paytm_auth.objects.all()[0]

    orders_placed = Agreement_Orders.objects.get(id=id)     

    param_dict = {

        'MID': cred.MERCHANT_ID,
        'ORDER_ID': str(orders_placed.id),
        'TXN_AMOUNT': str(orders_placed.total_amount),
        'CUST_ID': str(request.user.id),
        'INDUSTRY_TYPE_ID': 'Retail',
        'WEBSITE': 'WEBSTAGING',
        'CHANNEL_ID': 'WEB',
        # 'CALLBACK_URL': 'http://127.0.0.1:8000/handlerequest/' + str(orders_placed.id) + str("/") + str(request.user.id)+str("/"),
        'CALLBACK_URL': 'https://www.tenantly.in/handlerequest/' + str(orders_placed.id) + str("/") + str(request.user.id)+str("/"),


    }

    param_dict['CHECKSUMHASH'] = Checksum.generate_checksum(param_dict, cred.MERCHANT_KEY)
    
    return render(request, 'pay.html', {'param_dict': param_dict})


from django.contrib.auth.models import User
@csrf_exempt
def handlerequest(request, id, user_id):

    cred = paytm_auth.objects.all()[0]

    user = User.objects.get(id=user_id)

    
    orders_placed = Agreement_Orders.objects.get(id=id)

    form = request.POST
    response_dict = {}
    for i in form.keys():
        response_dict[i] = form[i]
        if i == 'CHECKSUMHASH':
            checksum = form[i]

    verify = Checksum.verify_checksum(response_dict, cred.MERCHANT_KEY, checksum)

    if verify:
        if response_dict['RESPCODE'] == '01':
            
            Agreement_Orders.objects.filter(id=id).update(payment_status="paid")
            
            return render(request, 'order_successful.html', {'id': id})
        else:
            return render(request, 'order_fail_page.html')
    # return render(request, 'order_fail.page.html', {'response': response_dict})
    return render(request, 'order_fail_page.html')



import json

@staff_member_required
def paytm_info(request):
    if request.method == "POST":
        new_merchant_key = request.POST["merchant_key"]
        new_merchant_id = request.POST["merchant_id"]
        data = paytm_auth.objects.get(id=1)
        data.MERCHANT_KEY = new_merchant_key
        data.MERCHANT_ID = new_merchant_id
        data.save()
        return HttpResponse("Successfully changed the data!!!")
    else:
        data = paytm_auth.objects.all()
        new_data = {"merchant_key": data[0].MERCHANT_KEY, "merchant_id": data[0].MERCHANT_ID}
        qs_json = json.dumps(new_data)
        return HttpResponse(qs_json, content_type='application/json')



from django.contrib.auth import logout

@login_required(login_url='/')  # redirect when user is not logged in
def logout_view(request):

    logout(request)
    return redirect('/')





# @login_required()
def my_bookings(request):
    if request.user.is_authenticated:
        data = Agreement_Orders.objects.filter(user_name=request.user.username,user_id=request.user.id)
    else:
        data = {}
    return render(request, "bookings.html", {"data": data})




# for generating pdf invoice
from io import BytesIO
from django.http import HttpResponse
from django.template.loader import get_template
from xhtml2pdf import pisa
import os



def fetch_resources(uri, rel):
    path = os.path.join(uri.replace(settings.STATIC_URL, ""))
    return path

def render_to_pdf(template_src, context_dict={}):
    template = get_template(template_src)
    html  = template.render(context_dict)
    result = BytesIO()
    pdf = pisa.pisaDocument(BytesIO(html.encode("utf-8")), result)#, link_callback=fetch_resources)
    if not pdf.err:
        return HttpResponse(result.getvalue(), content_type='application/pdf')
    return None




from django.views.generic import  View

class GenerateInvoice(View):
    
    def get(self, request, pk, *args, **kwargs):
        try:
            order_db = Agreement_Orders.objects.get(id = pk)  
              #you can filter using order_id as well
        except:
            return HttpResponse("505 Not Found")
        data = {
            'agreement_duration': str(order_db.agreement_duration),
            'agreement_start_date': str(order_db.agreement_start_date),
            'monthly_rent_amount' : str(order_db.monthly_rent_amount),
            'refundable_deposit_amount' : str(order_db.refundable_deposit_amount),
            # 'date': str(order_db.date),
            # 'name': order_db.full_name,
            # 'order': order_db,
            # 'amount': order_db.total_amount,
            # 'state':order_db.state,
            # 'total_states': order_db.total_states,
            # 'pri':pri
        }
        pdf = render_to_pdf('agreement.html',data )
        # return HttpResponse(pdf, content_type='application/pdf')

        # force download
        if pdf:
            response = HttpResponse(pdf, content_type='application/pdf')
            filename = "Invoice_%s.pdf" %(['order_id'])
            content = "inline; filename='%s'" %(filename)
            #download = request.GET.get("download")
            #if download:
            content = "attachment; filename=%s" %(filename)
            response['Content-Disposition'] = content
            return response
        return HttpResponse("Not found")


# @staff_member_required
# def html (request,pk):
#     try:
#             order_db = Agreement_Orders.objects.get(id = pk)  
#               #you can filter using order_id as well
#     except:
#             return HttpResponse("505 Not Found")

#     data = {
#             'agreement_duration': str(order_db.agreement_duration),
#             'agreement_start_date': str(order_db.agreement_start_date),
#             'monthly_rent_amount' : str(order_db.monthly_rent_amount),
#             # 'date': str(order_db.date),
#             # 'name': order_db.full_name,
#             # 'order': order_db,
#             # 'amount': order_db.total_amount,
#             # 'state':order_db.state,
#             # 'total_states': order_db.total_states,
#             # 'pri':pri
#         }

#     return render(request, "agreement.html",data) 



def coupon (request):

    data = coupon_model.objects.all()
    qs_json = serializers.serialize('json', data)
    return HttpResponse(qs_json, content_type='application/json')



def delete_coupon (request, id):
    data = coupon_model.objects.filter(id = id).delete()
    # qs_json = serializers.serialize('json', data)
    return HttpResponse("Coupon Successfully Deleted !!!")


def check_coupon (request):

    if request.method == 'POST':
        code = request.POST.get('code', None)     
        obj = coupon_model.objects.filter(coupon_code = code)
        qs_json = serializers.serialize('json', obj)
        return HttpResponse(qs_json, content_type='application/json')
        
        # if coupon_model.objects.filter(coupon_code = code).exists():
        #     obj = coupon_model.objects.get(coupon_code = code)
        #     return HttpResponse(str(obj.amount))
        # else:
        #     return HttpResponse(None)
   


def add_coupan(request):

    coupon_name = request.POST["coupon_name"]
    coupon_code = request.POST["coupon_code"]
    amount = request.POST["amount"]
    
    obj = coupon_model.objects.create(coupon_name=coupon_name, amount=amount, coupon_code = coupon_code)
    obj.save()
    return HttpResponse(obj.pk)






@staff_member_required
def cout_data (request):
    obj = Agreement_Orders.objects.all().filter(payment_status="paid").count()
    return HttpResponse(obj)



@staff_member_required
def data_number (request, number):
    # num = request.POST["num"]
    data = Agreement_Orders.objects.all().filter(payment_status="paid").order_by("-id")[:number][::-1]
    # data = Agreement_Orders.objects.all().filter(payment_status="paid")[:number]
    qs_json = serializers.serialize('json', data)
    return HttpResponse(qs_json, content_type='application/json')