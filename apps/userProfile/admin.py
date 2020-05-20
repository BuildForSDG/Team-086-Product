from django.contrib import admin

# Register your models here.
from .models import Profile

# UserProfile will be visble on admin page
admin.site.register(Profile)