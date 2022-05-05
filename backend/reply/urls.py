from django.urls import path, include
from reply import views

urlpatterns = [
    path('', views.get_replies)
]