from django.urls import path
from main.views import sponsor_views as views


urlpatterns = [
  path('', views.getSponsors, name="sponsors"),
  path('delete/<str:pk>/', views.deleteSponsor, name="delete-sponsor"),
  path('update/<str:pk>/', views.updateSponsor, name="sponsor-update"),
  path('create/', views.createSponsor, name="sponsor-create"),
  path('upload/', views.uploadImage, name="image-upload"),
  path('<str:pk>/', views.getSponsor, name="sponsor"),
]