
import requests
import json
from pprint import pprint

url = 'http://wttr.in/{}?format=j1&lang=ru'
weather = requests.get(url.format("moscow")).json()
# temperature = weather['current_condition']['temp_C']
# result = f'Сегодня {temperature} градусов'
# pprint(weather['nearest_area'])
# pprint(weather['current_condition'])
print(weather['current_condition'][0]['weatherDesc'][0]['value']
      )
