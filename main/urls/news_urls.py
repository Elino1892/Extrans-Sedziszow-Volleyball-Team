from django.urls import path
from main.views import news_views as views


urlpatterns = [
  path('', views.getNews, name="news"),
  path('delete/<str:pk>/', views.deleteNews, name="delete-news"),
  path('update/<str:pk>/', views.updateNews, name="news-update"),
  path('create/', views.createNews, name="news-create"),
  path('upload/', views.uploadImage, name="image-upload"),

  path('<str:pk>/comments/', views.createNewsComment, name="create-comment"),
  path('comments/delete/<str:pk>/', views.deleteComment, name="delete-comment"),
  path('last/', views.getLastViews, name='last-views'),

  path('<str:pk>/', views.getSingleNews, name="single-news"),
]