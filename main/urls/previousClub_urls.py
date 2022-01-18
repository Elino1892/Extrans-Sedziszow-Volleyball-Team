from django.urls import path
from main.views import previousClub_views as views


urlpatterns = [
  path('', views.getPreviousClubs, name="previous-clubs"),
  path('delete/<str:pk>/', views.deletePreviousClub, name="delete-previous-club"),
  path('update/<str:pk>/', views.updatePreviousClub, name="previous-club-update"),
  path('create/', views.createPreviousClub, name="previous-club-create"),
  path('<str:pk>/', views.getPreviousClub, name="previous-club"),
]