from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from orders import views


urlpatterns = [
    path("",views.index,name='index'),
    path("price/",views.price,name='price'),
    path("test/",views.test,name='test'),
    path("fetch_data/",views.fetch_data,name='fetch_data'),
    path("fetch_data/<int:id>/",views.fetch_data_id,name='fetch_data_id'),
    path("update_data/",views.update_data,name='update_data'),
    path("delete_data/<str:id>/",views.delete_data,name='delete_data'),

    path("add_agreement/", views.add_agreement, name="add_agreement"),
    path("admin_add_agreement/", views.admin_add_agreement, name="admin_add_agreement"),

    path("unpaid_agreements/", views.fetch_unpaid_agreements, name="unpaid_agreements"),

    path("pages/", views.pages, name="pages"),
    path("page/<str:url>/",views.render_page,name='render_page'),
    path("add_page/", views.add_page, name="add_page"),
    path("delete_page/<str:pk>/", views.delete_page, name="delete_page"),

    path("admin_panal/",views.admin_panal,name='admin_panal'),
    path("getfile/",views.getfile,name='getfile'),
    path("order_page/<int:id>/",views.order_page,name='order_page'),
    path("handlerequest/<str:id>/<str:user_id>/",views.handlerequest,name='handlerequest'), 

    path("paytm_info/", views.paytm_info, name="paytm-info"),

    path("logout/", views.logout_view, name="logout"),
   
    # path("all_students/<str:division>/<str:year>",views.all_students,name ='all_students'),     
    
    path("my_bookings/", views.my_bookings, name="my_bookings"),
    path('generateinvoice/<int:pk>/', views.GenerateInvoice.as_view(), name = 'generateinvoice'),
      
    # path("html/<str:pk>/", views.html, name="html"),
    path("coupon/", views.coupon, name="coupon"),
    path("add_coupon/", views.add_coupan, name="add_coupan"),
    path("delete_coupon/<str:id>/", views.delete_coupon, name="delete_coupon"),
    path("check_coupon/", views.check_coupon, name="check_coupon"),


    path("cout_data/", views.cout_data, name="cout_data"),
    path("data_number/<int:number>/", views.data_number, name="data_number"),
]
