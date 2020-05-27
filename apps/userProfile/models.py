from django.db import models

# Create your models here.
from django.contrib.auth.models import User

from django.db.models.signals import post_save

from django.dispatch import  receiver


# class Page(models.Model):
#     title = models.CharField(max_length=60)
#     permalink = models.CharField(max_length=12, unique=True)
#     update_date = models.DateTimeField('Last Updated')
#     bodytext = models.TextField('Page Content', blank=True)

#     def __str__(self):
#         return self.title

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(max_length=500, blank=True)
    phone_number = models.CharField(max_length=12, blank=True)
    birth_date = models.DateField(null=True, blank = True)
    profile_image = models.ImageField(default='avartarsite.jpg', upload_to='users/', null=True, blank=True)

    def __str__(self):
        return '%s %s' % (self.user.first_name, self.user.last_name)

        
@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_userProfile(sender, instance, **kwargs):
    instance.profile.save()