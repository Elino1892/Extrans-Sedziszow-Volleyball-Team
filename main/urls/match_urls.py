from django.urls import path
from main.views import match_views as views


urlpatterns = [
  path('', views.getMatches, name="matches"),
  path('round/', views.getMatchesWithRound, name="matches-round"),
  path('last/', views.getLastMatches, name="last-matches"),
  path('delete/<str:pk>/', views.deleteMatch, name="delete-match"),
  path('update/<str:pk>/', views.updateMatch, name="match-update"),
  path('create/', views.createMatch, name="match-create"),
  path('<str:pk>/', views.getMatch, name="match"),
]