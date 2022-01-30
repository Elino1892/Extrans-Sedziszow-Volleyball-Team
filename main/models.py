from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class News(models.Model):
  id = models.AutoField(primary_key=True)
  image = models.ImageField(null=True, blank=True)
  title = models.CharField(max_length=200, blank=True, null=True)
  subtitle = models.CharField(max_length=200, blank=True, null=True)
  description = models.TextField(blank=True, null=True)
  createdAt = models.DateTimeField(auto_now_add=True)
  user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)

  def __str__(self):
    return f"{self.title}"
  
  class Meta:
        verbose_name_plural = "Aktualności"


class Comment(models.Model):
  id = models.AutoField(primary_key=True)
  text = models.TextField(blank=True, null=True, max_length=1000)
  createdAt = models.DateTimeField(auto_now_add=True)
  user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
  news = models.ForeignKey(News, on_delete=models.SET_NULL, null=True)
  
  def __str__(self):
    return f"{self.text}"
  
  class Meta:
        verbose_name_plural = "Komentarze"

class Sponsor(models.Model):
  id = models.AutoField(primary_key=True)
  name = models.CharField(max_length=200, null=True, blank=True)
  link = models.CharField(max_length=200, null=True, blank=True)
  image = models.ImageField(null=True, blank=True)
  group = models.CharField(max_length=200, null=True, blank=True)

  def __str__(self):
    return f"{self.name}"

  class Meta:
        verbose_name_plural = "Sponsorzy"


class Group(models.Model):
  id = models.AutoField(primary_key=True)
  name = models.CharField(max_length=200, blank=True, null=True)

  def __str__(self):
    return f"{self.name}"

  class Meta:
        verbose_name_plural = "Grupy"


class Player(models.Model):
  id = models.AutoField(primary_key=True)
  first_name = models.CharField(max_length=50)
  last_name = models.CharField(max_length=100)
  year_of_join = models.IntegerField(null=True, blank=True)
  image = models.ImageField(null=True, blank=True)
  background = models.ImageField(null=True, blank=True)
  height = models.IntegerField(blank=True, null=True, default=0)
  weight = models.IntegerField(blank=True, null=True, default=0)
  range_in_attack = models.IntegerField(blank=True, null=True, default=0)
  range_in_block = models.IntegerField(blank=True, null=True, default=0)
  date_of_birth = models.DateField(null=True, blank=True)
  number = models.IntegerField(blank=True, null=True, default=0)
  description = models.TextField(blank=True, null=True)
  group = models.ForeignKey(Group, on_delete=models.SET_NULL, null=True)

  def __str__(self):
    return f"{self.first_name} {self.last_name}"
  
  class Meta:
        verbose_name_plural = "Członkowie zespołu"


class Previous_Club(models.Model):
  id = models.AutoField(primary_key=True)
  name = models.CharField(max_length=100)
  

  def __str__(self):
    return f"{self.name}"
  
  class Meta:
        verbose_name_plural = "Poprzednie kluby"

class Player_Previous_Club(models.Model):
  id = models.AutoField(primary_key=True)
  player = models.ForeignKey(Player, on_delete=models.CASCADE, null=False)
  previous_club = models.ForeignKey(Previous_Club, on_delete=models.CASCADE, null=False)
  position = models.ForeignKey(Group, on_delete=models.CASCADE, null=True)
  season = models.CharField(max_length=20, default='')
  # position = models.CharField(max_length=30, default='')


  def __str__(self):
    return f"{self.player} - {self.previous_club}"

  class Meta:
        verbose_name_plural = "Zawodnicy z poprzednimi klubami"

class Team(models.Model):
  id = models.AutoField(primary_key=True)
  name = models.CharField(max_length=100)
  logo = models.ImageField(null=True, blank=True)
  # coach = models.CharField(max_length=100)

  def __str__(self):
    return f"{self.name}"

  class Meta:
        verbose_name_plural = "Drużyny"

class Match(models.Model):
  id = models.AutoField(primary_key=True)
  date = models.DateTimeField()
  home_team_score = models.IntegerField(blank=True, null=True)
  guest_team_score = models.IntegerField(blank=True, null=True)
  hall = models.CharField(max_length=100)
  is_home = models.BooleanField(default=False)
  home_team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='home_team')
  guest_team = models.ForeignKey(Team, on_delete=models.CASCADE, related_name='guest_team')
  is_finished = models.BooleanField(default=False)
  result = models.CharField(max_length=10, blank=True, null=True)
  set_results = models.CharField(max_length=50, blank=True, null=True)
  round = models.IntegerField(blank=True, null=True, default=1)

  def __str__(self):
    return f"{self.home_team} - {self.guest_team}"

  class Meta:
        verbose_name_plural = "Mecze"

class Table(models.Model):
  id = models.AutoField(primary_key=True)
  # place = models.IntegerField(blank=True, null=True)
  points = models.IntegerField(blank=True, null=True, default=0)
  matches_played = models.IntegerField(blank=True, null=True, default=0)
  matches_won = models.IntegerField(blank=True, null=True, default=0)
  matches_lost = models.IntegerField(blank=True, null=True, default=0)
  sets_won = models.IntegerField(blank=True, null=True, default=0)
  sets_lost = models.IntegerField(blank=True, null=True, default=0)
  small_points_won = models.IntegerField(blank=True, null=True, default=0)
  small_points_lost = models.IntegerField(blank=True, null=True, default=0)
  ratio_sets = models.DecimalField(blank=True, null=True, max_digits=5, decimal_places=3, default=0)
  ratio_small_points = models.DecimalField(blank=True, null=True, max_digits=5, decimal_places=3, default=0)
  team = models.ForeignKey(Team, on_delete=models.CASCADE)

  def __str__(self):
    return f"{self.team}"

  class Meta:
        verbose_name_plural = "Tabela"

class Photo(models.Model):
  id = models.AutoField(primary_key=True)
  name = models.CharField(max_length=50)
  image = models.ImageField(null=True, blank=True)

  def __str__(self):
    return f"{self.name}"
  
  class Meta:
        verbose_name_plural = "Zdjęcia"

class Set(models.Model):
  number = models.IntegerField(blank=True, null=True)
  home_team_score_set = models.IntegerField(blank=True, null=True)
  guest_team_score_set = models.IntegerField(blank=True, null=True)
  match = models.ForeignKey(Match, on_delete=models.CASCADE, null=False, default=False)

  def __str__(self):
    return f"{self.number}"

  class Meta:
        verbose_name_plural = "Sety"
