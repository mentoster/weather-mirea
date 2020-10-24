import time
days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Субботу', 'Воскресенье'
        ]
months = [
    'января', 'февраля', 'марта', 'апреля', 'майя', 'июнь', 'июля', 'августа', 'сентября',
    'октября', 'ноября', 'декабря'
]

print(days[time.localtime().tm_wday] +
      time.strftime(",%d,"+months[time.localtime().tm_mon]+" %Y г.", time.localtime()))
