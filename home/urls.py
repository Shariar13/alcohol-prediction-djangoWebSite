from django.urls import path
from .views import (
    home,
    alcohol_suggest,
    home1,
    feedback,
    thank_you,
    loading_screen,


)

urlpatterns = [

    path('', home, name='home'),
    path('alcohol_suggest', alcohol_suggest, name='alcohol_suggest'),
    path('home1', home1, name='home1'),
    path('feedback', feedback, name='feedback'),
    path('thank_you', thank_you, name='thank_you'),
    path('loading_screen', loading_screen, name='loading_screen'),

]