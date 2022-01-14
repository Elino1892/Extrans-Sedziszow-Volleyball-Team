from turtle import title
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser

from django.contrib.auth.models import  User
from main.serializers import NewsSerializer, UserSerializer

from main.models import News

from datetime import datetime
import babel.dates


@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getNews(request):
  news = News.objects.all()
  serializer = NewsSerializer(news, many = True)

  for newsItem in serializer.data:
    user = User.objects.get(id=newsItem['user'])
    user_serializer = UserSerializer(user, many=False)
    newsItem['user'] = f"{user_serializer.data['name']} {user_serializer.data['last_name']}" 
    time = newsItem['createdAt'][:16]
    time_data = datetime.strptime(time, '%Y-%m-%dT%H:%M')
    newsItem['createdAt'] = babel.dates.format_datetime(time_data, 'EEEE, d MMMM yyyy | H:mm', locale='pl_PL')

  return Response(serializer.data)


@api_view(['GET'])
def getSingleNews(request, pk):
    news = News.objects.get(id = pk)
    serializer = NewsSerializer(news, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createNews(request):
    user = request.user
    data = request.data

    news = News.objects.create(
      user = user,
      title = data['title'],
      subtitle = data['subtitle'],
      description = data['description'],
    )

    serializer = NewsSerializer(news, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateNews(request, pk):
    data = request.data
    news = News.objects.get(id=pk)

    news.title = data['title']
    news.subtitle = data['subtitle']
    news.description = data['description']

    news.save()

    serializer = NewsSerializer(news, many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteNews(request,pk):
  news = News.objects.get(id = pk)
  news.delete()
  return Response('Artykuł usunięty')


@api_view(['POST'])
def uploadImage(request):
    data = request.data
    news_id = data['news_id']
    news = News.objects.get(id=news_id)
    news.image = request.FILES.get('image')
    news.save()

    return Response('Zdjęcie zostało przesłane')