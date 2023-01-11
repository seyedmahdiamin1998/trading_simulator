from django.urls import path
from .views import tradnigSimualtorView

app_name="myApp"

urlpatterns=[
    path('', tradnigSimualtorView, name='DCalculator'),
]