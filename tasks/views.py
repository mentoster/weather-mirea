from django.http.response import JsonResponse
from django.shortcuts import render, redirect
from .models import todo, todomonth, todoweek
import time
# import requests
# def index(request):
# return render(request, 'tasks/index.json')


def index(request):
    days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Субботу', 'Воскресенье'
            ]
    months = [
        'января', 'февраля', 'марта', 'апреля', 'майя', 'июнь', 'июля', 'августа', 'сентября',
        'октября', 'ноября', 'декабря'
    ]
    # среда, 21 октября 2020 г.
    # url = 'http://wttr.in/{}?format=j1&lang=ru'
    # weather = requests.get(url.format("moscow")).json()
    # url = weather['current_condition'][0]['weatherDesc'][0]['value'].split(
    # ' ')[0].replace(',', '')
    context = {
        "NowDate": days[time.localtime().tm_wday] +
        time.strftime(
            ", %d "+months[time.localtime().tm_mon-1]+" %Y г.", time.localtime()),
        "backgroundUrl": "https://source.unsplash.com/1920x1080?"+"snow"
    }
    return render(request, 'tasks/index.html', context)
