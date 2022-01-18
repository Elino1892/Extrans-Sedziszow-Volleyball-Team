from django.urls import path
from main.views import playerPreviousClub_views as views


urlpatterns = [
  path('', views.getPlayerPreviousClubs, name="player-previous-clubs"),
  path('delete/<str:pk>/', views.deletePlayerPreviousClub, name="delete-player-previous-club"),
  path('update/<str:pk>/', views.updatePlayerPreviousClub, name="player-previous-club-update"),
  path('create/', views.createPlayerPreviousClub, name="player-previous-club-create"),
  path('<str:pk>/', views.getPlayerPreviousClub, name="player-previous-club"),
]