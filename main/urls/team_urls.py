from django.urls import path
from main.views import team_views as views


urlpatterns = [
  path('', views.getTeams, name="teams"),
  path('delete/<str:pk>/', views.deleteTeam, name="delete-team"),
  path('update/<str:pk>/', views.updateTeam, name="team-update"),
  path('upload/', views.uploadImage, name="image-upload"),
  path('create/', views.createTeam, name="tean-create"),
  path('<str:pk>/', views.getTeam, name="team"),
  
]