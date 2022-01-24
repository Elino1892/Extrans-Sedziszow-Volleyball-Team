from django.urls import path
from main.views import table_views as views


urlpatterns = [
  path('', views.getTable, name="table"),
  path('short/', views.getShortTable, name="short-table"),
]