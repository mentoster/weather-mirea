from django.http.response import JsonResponse
from django.shortcuts import render, redirect
from .models import todo, todomonth, todoweek


# def index(request):
# return render(request, 'tasks/index.json')


def index(request):
    return render(request, 'tasks/index.json')
