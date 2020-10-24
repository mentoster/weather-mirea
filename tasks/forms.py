from .models import Task
from django.forms import ModelForm


class TaskForm(forms.ModelForm):
    """Form definition for Task."""

    class Meta:
        """Meta definition for Taskform."""

        model = Task
        fields = ('title', 'task')
