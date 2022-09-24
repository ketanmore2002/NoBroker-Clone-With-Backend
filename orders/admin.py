from django.contrib import admin

# Register your models here.
from .models import *

admin.site.register(Agreement_Orders)
admin.site.register(page)
admin.site.register(paytm_auth)
admin.site.register(coupon_model)