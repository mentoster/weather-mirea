
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('aboutUs', views.aboutUs, name='aboutUs'),
    path('onWeek', views.onWeek, name='onWeek'),
    path('onMonth', views.onMonth, name='onMonth'),
    path('userComment', views.userComment, name='userComment'),
]
