from django.urls import path

from. import views

urlpatterns = [
    path("", views.index, name="index"),
    path("stefano", views.stefano, name="stefano"),
    path("<str:name>", views.greet, name="greet")
]