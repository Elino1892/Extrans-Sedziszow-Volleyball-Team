from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework import status


from main.serializers import PlayerSerializer, GroupSerializer, PlayerPreviousClubSerializer, PreviousClubSerializer

from main.models import Player, Group, Player_Previous_Club, Previous_Club

from datetime import datetime
import babel.dates


@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getPlayers(request):
  players = Player.objects.order_by('number')
  serializer = PlayerSerializer(players, many = True)

  # for newsItem in serializer.data:
  #   user = User.objects.get(id=newsItem['user'])
  #   user_serializer = UserSerializer(user, many=False)
  #   newsItem['user'] = f"{user_serializer.data['name']} {user_serializer.data['last_name']}" 
  #   time = newsItem['createdAt'][:16]
  #   time_data = datetime.strptime(time, '%Y-%m-%dT%H:%M')
  #   newsItem['createdAt'] = babel.dates.format_datetime(time_data, 'EEEE, d MMMM yyyy | H:mm', locale='pl_PL')

  return Response(serializer.data)


@api_view(['GET'])
def getPlayer(request, pk):
    
    player = Player.objects.get(id = pk)
    serializer = PlayerSerializer(player, many=False)
    # news_item = serializer.data
    # user = User.objects.get(id=news_item['user'])
    # user_serializer = UserSerializer(user, many=False)
    # news_item['user'] = f"{user_serializer.data['name']} {user_serializer.data['last_name']}"
    # time = news_item['createdAt'][:16]
    # time_data = datetime.strptime(time, '%Y-%m-%dT%H:%M')
    # news_item['createdAt'] = babel.dates.format_datetime(time_data, 'EEEE, d MMMM yyyy | H:mm', locale='pl_PL')

    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createPlayer(request):
    data = request.data

    group = Group.objects.get(id=data['group'])

    player = Player.objects.create(
      first_name = data['first_name'],
      last_name = data['last_name'],
      height = data['height'],
      weight = data['weight'],
      range_in_attack = data['range_in_attack'],
      range_in_block = data['range_in_block'],
      date_of_birth = data['date_of_birth'],
      number = data['number'],
      year_of_join = data['year_of_join'],
      description = data['description'],
      group = group,
    )

    serializer = PlayerSerializer(player, many=False)
    return Response(serializer.data)
    # return Response()


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updatePlayer(request, pk):
    data = request.data
    player = Player.objects.get(id=pk)

    group = Group.objects.get(id=data['group'])

    player.first_name = data['first_name']
    player.last_name = data['last_name']
    player.height = data['height']
    player.weight = data['weight']
    player.range_in_attack = data['range_in_attack']
    player.range_in_block = data['range_in_block']
    player.date_of_birth = data['date_of_birth']
    player.number = data['number']
    player.year_of_join = data['year_of_join']
    player.description = data['description']
    player.group = group

    player.save()

    serializer = PlayerSerializer(player, many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deletePlayer(request,pk):
  player = Player.objects.get(id = pk)
  player.delete()
  return Response('Zawodnik usunięty')


@api_view(['POST'])
def uploadImage(request):
    data = request.data
    player_id = data['player_id']
    player = Player.objects.get(id=player_id)
    # print('\n')
    # print(request.FILES.get('image'))
    # print(data['isBgc'])
    # if(data['isBgc']):
    #   print('bgc')
    #   player.background = request.FILES.get('image')
    # else:
    #   print('image')
    print(request.FILES.get('image'))
    player.image = request.FILES.get('image')
    player.save()

    # print(player.background)
    print(player.image)
    # print('\n')

    return Response('Zdjęcie zostało przesłane')


@api_view(['POST'])
def uploadBackgroundImage(request):
    data = request.data
    player_id = data['player_id']
    player = Player.objects.get(id=player_id)
    player.background = request.FILES.get('image')
    player.save()

    return Response('Tło zostało przesłane')
