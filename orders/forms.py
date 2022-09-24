from .models import Agreement_Orders

from django import forms

class Agreement_Orders_form(forms.ModelForm):
    class Meta:
        model = Agreement_Orders
        fields = "__all__"