from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics, status
from rest_framework.generics import ListAPIView, CreateAPIView
# Create your views here.


def home(request, format=None):
    data = {"name": "rajiv", "age": "22"}
    return render(request, "./frontend/base.html")
