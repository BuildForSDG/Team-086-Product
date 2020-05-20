from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm


class SignUpForm(UserCreationForm):

    first_name = forms.CharField(max_length=30, required=True, help_text='optional')
    email = forms.EmailField(max_length=254, help_text='Enter a valid email address')

class Meta:
    model = User
    fields = [
        'username',
        'first_name',
        'last_name',
        'email',
        'password1',
        'password2',
    ]

class UserForm(UserCreationForm):
    pass

class ProfileForm():
    pass