from django.contrib import admin
from django.urls import path
from musicApp import views

urlpatterns = [
    path('',view=views.page, name='landing'),
    path('signup/',view=views.signup, name='signup'),
    path('about/',view=views.about, name='about'),
    path('contact/',view=views.contact, name='contacts'),
    path('courses/',view=views.courses, name='courses'),
    path('piano/', view=views.piano, name='paino'),
    path('keyboard/',view=views.keyboard, name='keyboard'),
    path('guitar/', view=views.guitar, name='guitar'),
    path('drums/',view=views.drums, name='drums'),
    path('violin/',view=views.violin, name='violin'),
]
