"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/users/', include('main.urls.user_urls')),
    path('api/news/', include('main.urls.news_urls')),
    path('api/players/', include('main.urls.player_urls')),
    path('api/groups/', include('main.urls.group_urls')),
    path('api/teams/', include('main.urls.team_urls')),
    path('api/table/', include('main.urls.table_urls')),
    path('api/matches/', include('main.urls.match_urls')),
    path('api/sponsors/', include('main.urls.sponsor_urls')),
    path('api/previous-clubs/', include('main.urls.previousClub_urls')),
    path('api/players-previous-clubs/', include('main.urls.playerPreviousClub_urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)