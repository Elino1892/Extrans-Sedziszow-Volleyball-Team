from django.urls import path
from main.views import player_views as views


urlpatterns = [
  path('', views.getPlayers, name="players"),
  path('delete/<str:pk>/', views.deletePlayer, name="delete-player"),
  path('update/<str:pk>/', views.updatePlayer, name="player-update"),
  path('create/', views.createPlayer, name="player-create"),
  path('upload/', views.uploadImage, name="image-upload"),
  path('<str:pk>/', views.getPlayer, name="player"),
]