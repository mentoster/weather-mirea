from django.http.response import JsonResponse
from django.shortcuts import render, redirect
from .models import todo, todomonth, todoweek


# def index(request):
# return render(request, 'tasks/index.json')


def index(request):

    # do something with the your data
    data = {
        "departments": [
            {
                "company": [
                    {
                        "id": 0,
                        "name": "Проект для Digital Прорыва",
                        "img": "",
                        "profiles": [
                            {
                                "id": 0,
                                "name": "Макаров Дмитрий ",
                                "img": "https://i.pinimg.com/736x/a6/99/be/a699be54cdaaaff16e653ecf4581dc76--john-wick-beautiful-people.jpg",
                                "position": "бухгалтер",
                                "phone": "8(916)-205-35-80",
                                "email": "NeoMatrix@mos.ru",
                                "tasks": [
                                    {
                                        "id": 0,
                                        "deadline": "19.10.2020",
                                        "title": "Оформить и разослать приказ о надбавках к зарплате",
                                        "tags": "документы",
                                        "color": "yellow",
                                        "body": " 1.Взять образец приказа\n2.Оформить его на каждого сотрудника\n3.Спросить подпись у каждого сотрудника\n4.Готово!"
                                    }
                                ]
                            },
                            {
                                "id": 0,
                                "name": "Макаров Дмитрий ",
                                "img": "https://i.pinimg.com/736x/a6/99/be/a699be54cdaaaff16e653ecf4581dc76--john-wick-beautiful-people.jpg",
                                "position": "бухгалтер",
                                "phone": "8(916)-205-35-80",
                                "email": "NeoMatrix@mos.ru",
                                "tasks": [
                                    {
                                        "id": 0,
                                        "deadline": "20.10.2020",
                                        "title": "Оформить и разослать приказ о надбавках к зарплате",
                                        "tags": "документы",
                                        "color": "yellow",
                                        "body": " 1.Взять образец приказа\n2.Оформить его на каждого сотрудника\n3.Спросить подпись у каждого сотрудника\n4.Готово!"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": 1,
                        "name": "бухгалтерия",
                        "img": "",

                        "profiles": [
                            {
                                "id": 0,
                                "name": "Иван Иванов",
                                "img": "https://i.pinimg.com/736x/a6/99/be/a699be54cdaaaff16e653ecf4581dc76--john-wick-beautiful-people.jpg",
                                "position": "бухгалтер",
                                "phone": "8(916)-205-35-80",
                                "email": "NeoMatrix@mos.ru",
                                "tasks": [
                                    {
                                        "id": 0,
                                        "deadline": "21.10.2020",
                                        "title": "Оформить и разослать приказ о надбавках к зарплате",
                                        "tags": "документы",
                                        "color": "yellow",
                                        "body": " 1.Взять образец приказа\n2.Оформить его на каждого сотрудника\n3.Спросить подпись у каждого сотрудника\n4.Готово!"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "name": "Проверяющие Хакатон",
                        "img": "",
                        "tasks": [{}],
                        "profiles": [
                            {
                                "id": 0,
                                "name": "Админ Админович",
                                "img": "https://i.pinimg.com/736x/a6/99/be/a699be54cdaaaff16e653ecf4581dc76--john-wick-beautiful-people.jpg",
                                "position": "к сожелению не админ",
                                "phone": "8(916)-415-71-35",
                                "email": "NewUser@mos.ru",
                                "tasks": [
                                    {
                                        "id": 0,
                                        "deadline": "18.10.2020",
                                        "title": "Оформить и разослать приказ о надбавках к зарплате",
                                        "tags": "документы",
                                        "color": "yellow",
                                        "body": " 1.Взять образец приказа\n2.Оформить его на каждого сотрудника\n3.Спросить подпись у каждого сотрудника\n4.Готово!"
                                    }
                                ]
                            },
                            {
                                "id": 1,
                                "name": "Валерий Степанищев",
                                "img": "https://i.pinimg.com/736x/a6/99/be/a699be54cdaaaff16e653ecf4581dc76--john-wick-beautiful-people.jpg",
                                "position": "expert",
                                "phone": "8(916)-205-35-80",
                                "email": "Stepanischev_V@mail.ru",
                                "tasks": [
                                    {
                                        "id": 0,
                                        "deadline": "22.10.2020",
                                        "title": "Провести хакатон",
                                        "tags": "документы",
                                        "color": "yellow",
                                        "body": " 1.Взять образец приказа\n2.Оформить его на каждого сотрудника\n3.Спросить подпись у каждого сотрудника\n4.Готово!"
                                    }
                                ]
                            },
                            {
                                "id": 2,
                                "name": "Татьяна Поспелова",
                                "img": "https://runet-id.com/files/photo/39/397723_200.jpg",
                                "position": "tracker",
                                "phone": "8(903)-266-18-26",
                                "email": "pospelova_t@mail.ru",
                                "tasks": [
                                    {
                                        "id": 0,
                                        "deadline": "23.10.2020",
                                        "title": "Провести хакатон",
                                        "tags": "документы",
                                        "color": "yellow",
                                        "body": " 1.Взять образец приказа\n2.Оформить его на каждого сотрудника\n3.Спросить подпись у каждого сотрудника\n4.Готово!"
                                    }
                                ]
                            },
                            {
                                "id": 3,
                                "name": "Ирина Гольмгрейн",
                                "img": "https://runet-id.com/files/photo/8/87215_200.jpg",
                                "position": "expert",
                                "phone": "8(925)-322-13-37",
                                "email": "irina@66.ru",
                                "tasks": [
                                    {
                                        "id": 0,
                                        "deadline": "24.10.2020",
                                        "title": "Провести хакатон",
                                        "tags": "документы",
                                        "color": "yellow",
                                        "body": " 1.Взять образец приказа\n2.Оформить его на каждого сотрудника\n3.Спросить подпись у каждого сотрудника\n4.Готово!"
                                    }
                                ]
                            },
                            {
                                "id": 4,
                                "name": "Арина Мальцева",
                                "img": "https://runet-id.com/files/photo/194/1942122_200.jpg",
                                "position": "expert",
                                "phone": "8(988)-777-19-84",
                                "email": "",
                                "tasks": [
                                    {
                                        "id": 0,
                                        "deadline": "25.10.2020",
                                        "title": "Провести хакатон",
                                        "tags": "документы",
                                        "color": "yellow",
                                        "body": " 1.Взять образец приказа\n2.Оформить его на каждого сотрудника\n3.Спросить подпись у каждого сотрудника\n4.Готово!"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "name": "Департамент цифрового развития",
                        "img": "",
                        "tasks": [{}],
                        "profiles": [
                            {
                                "id": 0,
                                "name": "Лилия Олеговна",
                                "img": "https://content.foto.my.mail.ru/mail/lilik_p/_myphoto/h-1.jpg",
                                "position": "Заместитель руководителя департамента",
                                "phone": "8(473)-212-65-03",
                                "email": "lpodoprihina@govvrn.ru",
                                "tasks": [
                                    {
                                        "id": 0,
                                        "deadline": "27.10.2020",
                                        "title": "Провести хакатон",
                                        "tags": "документы",
                                        "color": "yellow",
                                        "body": " 1.Взять образец приказа\n2.Оформить его на каждого сотрудника\n3.Спросить подпись у каждого сотрудника\n4.Готово!"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "name": "Планово-экономический отдел",
                        "img": "",
                        "tasks": [{}],
                        "profiles": [
                            {
                                "id": 0,
                                "name": "Дмитрий Макаров",
                                "img": "https://i.pinimg.com/736x/a6/99/be/a699be54cdaaaff16e653ecf4581dc76--john-wick-beautiful-people.jpg",
                                "position": "Profi своего дела",
                                "phone": "8(916)-703-57-87",
                                "email": "FreeMail@mos.ru",
                                "tasks": [
                                    {
                                        "id": 0,
                                        "deadline": "26.10.2020",
                                        "title": "Оформить и разослать приказ о надбавках к зарплате",
                                        "tags": "документы",
                                        "color": "yellow",
                                        "body": " 1.Взять образец приказа\n2.Оформить его на каждого сотрудника\n3.Спросить подпись у каждого сотрудника\n4.Готово!"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "account": [
            {
                "email": "Vioteo@yandex.ru",
                "password": "batya",
            },
            {
                "email": "dimamakarov1941@yandex.ru",
                "password": "server",
            },
            {
                "email": "email",
                "password": "password",
            },
            {
                "email": "@admin",
                "password": "123456",
            },
        ]

    }

    # just return a JsonResponse
    return JsonResponse(data)
