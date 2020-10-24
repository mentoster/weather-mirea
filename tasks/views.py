from django.http.response import JsonResponse
from django.shortcuts import render, redirect
from .models import todo, todomonth, todoweek
import time

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

    context = {
        "NowDate": days[time.localtime().tm_wday] +
        time.strftime(
            ", %d, "+months[time.localtime().tm_mon]+" %Y г.", time.localtime())

    }
    return render(request, 'tasks/index.html', context)
