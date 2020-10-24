# python manage.py livereload
from os import system
commands = {
    # "@echo Start making commands\n",
    "python manage.py runserver"
    # "python manage.py migrate",
    # "python manage.py createsuperuser",
    # "python manage.py makemigrations tasks",
    # "python manage.py migrate",
    # "python manage.py collectstatic",
    # "python manage.py runserver",
    # "@echo I made my job...\n"
}
for command in commands:
    system(command)
# system("pip freeze -> requirements.txt")
