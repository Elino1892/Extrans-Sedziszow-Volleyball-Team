from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class News(models.Model):
  id = models.AutoField(primary_key=True)
  image = models.ImageField(null=True, blank=True)
  title = models.CharField(max_length=200, blank=True, null=True)
  description = models.TextField(blank=True, null=True)
  createdAt = models.DateTimeField(auto_now_add=True)
  user = models.ForeignKey(User, on_delete=models.CASCADE)

class Comment(models.Model):
  id = models.AutoField(primary_key=True)
  text = models.TextField(blank=True, null=True)
  createdAt = models.DateTimeField(auto_now_add=True)
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  news = models.ForeignKey(News, on_delete=models.CASCADE)

class Sponsor(models.Model):
  id = models.AutoField(primary_key=True)
  name = models.CharField(max_length=200)
  image = models.ImageField(null=True, blank=True)
  group = models.CharField(max_length=200)

class Player(models.Model):
  id = models.AutoField(primary_key=True)
  first_name = models.CharField(max_length=50)
  last_name = models.CharField(max_length=100)
  image = models.ImageField(null=True, blank=True)
  height = models.IntegerField(blank=True, null=True)
  weight = models.IntegerField(blank=True, null=True)
  range_in_attack = models.IntegerField(blank=True, null=True)
  range_in_block = models.IntegerField(blank=True, null=True)
  date_of_birth = models.DateTimeField()
  number = models.IntegerField(blank=True, null=True)

class Group(models.Model):
  id = models.AutoField(primary_key=True)
  name = models.CharField(max_length=200, blank=True, null=True)

class Team(models.Model):
  id = models.AutoField(primary_key=True)
  name = models.CharField(max_length=100)
  image = models.ImageField(null=True, blank=True)
  coach = models.CharField(max_length=100)

class Match(models.Model):
  id = models.AutoField(primary_key=True)
  date = models.DateTimeField()
  home_team_score = models.IntegerField(blank=True, null=True)
  guest_team_score = models.IntegerField(blank=True, null=True)
  hall = models.CharField(max_length=100)
  is_home = models.BooleanField(default=False)
  home_team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='home_team')
  guest_team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='guest_team')

class Photo(models.Model):
  id = models.AutoField(primary_key=True)
  name = models.CharField(max_length=50)
  image = models.ImageField(null=True, blank=True)
  match = models.ForeignKey(Match, on_delete=models.CASCADE, null=True)

class Set(models.Model):
  number = models.IntegerField(blank=True, null=True)
  home_team_score_set = models.IntegerField(blank=True, null=True)
  guest_team_score_set = models.IntegerField(blank=True, null=True)
