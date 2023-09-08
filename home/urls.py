from django.urls import path
from .views import (
    home,
    alcohol_suggest,


)

urlpatterns = [

    path('', home, name='home'),
    path('alcohol_suggest', alcohol_suggest, name='alcohol_suggest'),

]