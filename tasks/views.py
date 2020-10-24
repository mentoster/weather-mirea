from django.http.response import JsonResponse
from django.shortcuts import render, redirect
from .models import todo, todomonth, todoweek
import time

# def index(request):
# return render(request, 'tasks/index.json')


def index(request):
    context = {
        "timenow": time.strftime("%H:%M", time.localtime())
    }
    return render(request, 'tasks/index.html', context)
