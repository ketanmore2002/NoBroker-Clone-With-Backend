from django.db import models

# Create your models here.


class Agreement_Orders(models.Model):
    user_name = models.CharField(max_length=30,blank=True,null=True) 
    user_id = models.CharField(max_length=30,blank=True,null=True) 
    first_name = models.CharField(max_length=30,blank=True,null=True)
    last_name = models.CharField(max_length=30,blank=True,null=True)
    status = models.CharField(max_length=30,blank=True,null=True, default="Submitted") 

    package_type = models.CharField(max_length=30,blank=True,null=True, default="Rental Agreement") 
    agreement_duration= models.CharField(max_length=30,blank=True,null=True) 
    agreement_start_date = models.CharField(max_length=30,blank=True,null=True) 
    monthly_rent_amount = models.CharField(max_length=30,blank=True,null=True) 
    refundable_deposit_amount = models.CharField(max_length=30,blank=True,null=True)
    contact_number = models.CharField(max_length=30,blank=True,null=True)
    # rent_fix = models.CharField(max_length=30) 
    user_type = models.CharField(max_length=30, blank=True, null=True)
    property_type = models.CharField(max_length=30,blank=True,null=True)
    property_house_number = models.CharField(max_length=30,blank=True,null=True) 
    property_building_name = models.CharField(max_length=30,blank=True,null=True) 
    property_locality = models.CharField(max_length=30,blank=True,null=True) 
    property_bedrooms = models.CharField(max_length=30,blank=True,null=True) 
    property_bathrooms = models.CharField(max_length=30,blank=True,null=True) 
    property_road_street = models.CharField(max_length=30,blank=True,null=True) 
    property_pincode = models.CharField(max_length=30,blank=True,null=True) 
    property_district = models.CharField(max_length=30,blank=True,null=True) 
    property_number_type = models.CharField(max_length=30,blank=True,null=True) 
    property_number = models.CharField(max_length=30,blank=True,null=True) 
    property_bluiltup_area = models.CharField(max_length=30,blank=True,null=True) 
    property_bluiltup_area_unit = models.CharField(max_length=30,blank=True,null=True) 
    property_use = models.CharField(max_length=30,blank=True,null=True) 
    property_gallary_area = models.CharField(max_length=30,blank=True,null=True) 
    property_gallary_area_unit= models.CharField(max_length=30,blank=True,null=True) 
    property_parking_area = models.CharField(max_length=30,blank=True,null=True) 
    property_parking_area_unit = models.CharField(max_length=30,blank=True,null=True) 

    landlord_party_entity_type = models.CharField(max_length=30,blank=True,null=True)
    landlord_party_type = models.CharField(max_length=30,blank=True,null=True)
    landlord_first_name = models.CharField(max_length=30,blank=True,null=True)
    landlord_middle_name = models.CharField(max_length=30,blank=True,null=True)
    landlord_last_name = models.CharField(max_length=30,blank=True,null=True)
    landlord_age = models.CharField(max_length=30,blank=True,null=True) 
    landlord_gender = models.CharField(max_length=30,blank=True,null=True) 
    landlord_occupation = models.CharField(max_length=30,blank=True,null=True) 
    landlord_phone_number = models.CharField(max_length=30,blank=True,null=True) 
    landlord_aadhar_number = models.CharField(max_length=30,blank=True,null=True) 
    landlord_pan_number = models.CharField(max_length=30,blank=True,null=True) 
    landlord_email = models.CharField(max_length=30,blank=True,null=True) 
    landlord_building_name = models.CharField(max_length=30,blank=True,null=True) 
    landlord_flat_house_number = models.CharField(max_length=30,blank=True,null=True) 
    landlord_floor_number = models.CharField(max_length=30,blank=True,null=True) 
    landlord_road_street = models.CharField(max_length=30,blank=True,null=True) 
    landlord_pincode = models.CharField(max_length=30,blank=True,null=True) 
    landlord_city = models.CharField(max_length=30,blank=True,null=True) 
    landlord_district = models.CharField(max_length=30,blank=True,null=True) 
    landlord_state = models.CharField(max_length=30,blank=True,null=True) 
    landlord_executing_through = models.CharField(max_length=30,blank=True,null=True) 

    tenant_party_entity_type = models.CharField(max_length=30,blank=True,null=True)
    tenant_party_type = models.CharField(max_length=30,blank=True,null=True)
    tenant_first_name = models.CharField(max_length=30,blank=True,null=True)
    tenant_middle_name = models.CharField(max_length=30,blank=True,null=True) 
    tenant_last_name = models.CharField(max_length=30,blank=True,null=True) 
    tenant_age = models.CharField(max_length=30,blank=True,null=True) 
    tenant_gender = models.CharField(max_length=30,blank=True,null=True) 
    tenant_occupation = models.CharField(max_length=30,blank=True,null=True) 
    tenant_phone_number = models.CharField(max_length=30,blank=True,null=True) 
    tenant_aadhar_number = models.CharField(max_length=30,blank=True,null=True) 
    tenant_pan_number = models.CharField(max_length=30,blank=True,null=True) 
    tenant_email = models.CharField(max_length=30,blank=True,null=True) 
    tenant_building_name = models.CharField(max_length=30,blank=True,null=True) 
    tenant_flat_house_number = models.CharField(max_length=30,blank=True,null=True) 
    tenant_floor_number = models.CharField(max_length=30,blank=True,null=True) 
    tenant_road_street = models.CharField(max_length=30,blank=True,null=True) 
    tenant_pincode = models.CharField(max_length=30,blank=True,null=True) 
    tenant_city = models.CharField(max_length=30,blank=True,null=True) 
    tenant_district = models.CharField(max_length=30,blank=True,null=True) 
    tenant_state = models.CharField(max_length=30,blank=True,null=True) 
    tenant_executing_through = models.CharField(max_length=30,blank=True,null=True) 

    non_refundable_amount = models.CharField(max_length=30,blank=True,null=True) 
    maintaiance_paid_by = models.CharField(max_length=30,blank=True,null=True) 
    minimum_lockin_period = models.CharField(max_length=30,blank=True,null=True) 
    notice_period = models.CharField(max_length=30,blank=True,null=True) 

    stamp_and_registration_fee_paid_by = models.CharField(max_length=30,blank=True,null=True) 
    miscellaneous = models.CharField(max_length=1000,blank=True,null=True)
    coupan = models.CharField(max_length=1000,blank=True,null=True, default="None")
    


    total_amount = models.CharField(max_length=30,blank=True,null=True, default="1000") 
    payment_status = models.CharField(max_length=30,blank=True,null=True, default="unpaid")
    

    # def __str__(self):
    #     return self.first_name+ " - " + self.last_name  


class page(models.Model):
    url = models.CharField(max_length=100,blank=True,null=True) 
    title = models.CharField(max_length=100,blank=True,null=True)
    text = models.CharField(max_length=10000,blank=True,null=True) 
    def __str__(self):
        return self.url



class paytm_auth (models.Model):

    MERCHANT_KEY = models.CharField(max_length=100,blank=True,null=True) 
    MERCHANT_ID = models.CharField(max_length=100,blank=True,null=True) 




class coupon_model (models.Model):

    coupon_name = models.CharField(max_length=100,blank=True,null=True) 
    coupon_code = models.CharField(max_length=100,blank=True,null=True) 
    amount = models.CharField(max_length=100,blank=True,null=True) 

    def __str__(self):
        return self.coupon_name
