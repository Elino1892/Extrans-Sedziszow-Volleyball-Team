from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework import status

from django.contrib.auth.models import  User
from main.serializers import GroupSerializer, PreviousClubSerializer, PlayerPreviousClubSerializer, PlayerSerializer

from main.models import Group, Previous_Club, Player_Previous_Club, Player


@api_view(['GET'])
def getPlayerPreviousClubs(request):
  player_previous_clubs = Player_Previous_Club.objects.order_by('player')
  serializer = PlayerPreviousClubSerializer(player_previous_clubs, many = True)

  for player_previous_club in serializer.data:
    player = Player.objects.get(id=player_previous_club['player'])
    player_serializer = PlayerSerializer(player, many=False)
    player_previous_club['player'] = {
      'id': player_serializer.data['id'],
      'first_name': player_serializer.data['first_name'],
      'last_name': player_serializer.data['last_name'],
    }
    group = Group.objects.get(id=player_previous_club['position'])
    group_serializer = GroupSerializer(group, many=False)
    player_previous_club['position'] = group_serializer.data['name']
    previous_club = Previous_Club.objects.get(id=player_previous_club['previous_club'])
    previous_club_serializer = PreviousClubSerializer(previous_club, many=False)
    player_previous_club['previous_club'] = previous_club_serializer.data['name']
  return Response(serializer.data)


@api_view(['GET'])
def getPlayerPreviousClub(request, pk): 
    player_previous_club = Player_Previous_Club.objects.get(id = pk)
    serializer = PlayerPreviousClubSerializer(player_previous_club, many=False)

    player_previous_club = serializer.data

    player = Player.objects.get(id=player_previous_club['player'])
    player_serializer = PlayerSerializer(player, many=False)
    player_previous_club['player'] = {
      'id': player_serializer.data['id'],
      'name': f"{player_serializer.data['first_name']} {player_serializer.data['last_name']}",
      }

    group = Group.objects.get(id=player_previous_club['position'])
    group_serializer = GroupSerializer(group, many=False)
    player_previous_club['position'] = {
      'id': group_serializer.data['id'],
      'name': group_serializer.data['name'],
      }

    previous_club = Previous_Club.objects.get(id=player_previous_club['previous_club'])
    previous_club_serializer = PreviousClubSerializer(previous_club, many=False)
    player_previous_club['previous_club'] = {
      'id': previous_club_serializer.data['id'],
      'name': previous_club_serializer.data['name'],
      }

    return Response(player_previous_club)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createPlayerPreviousClub(request):
    data = request.data

    player = Player.objects.get(id = data['player'])
    group = Group.objects.get(id=data['position'])
    previous_club = Previous_Club.objects.get(id = data['previous_club'])


    Player_Previous_Club.objects.create(
      player = player,
      previous_club = previous_club,
      position = group,
      season = data['season'],
    )

    return Response()


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updatePlayerPreviousClub(request, pk):
    data = request.data
    player_previous_club = Player_Previous_Club.objects.get(id=pk)

    player = Player.objects.get(id = data['player'])
    group = Group.objects.get(id=data['position'])
    previous_club = Previous_Club.objects.get(id=data['previous_club'])
    player_previous_club.player = player
    player_previous_club.position = group
    player_previous_club.previous_club = previous_club
    player_previous_club.season = data['season']

    player_previous_club.save()
    
    return Response()

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deletePlayerPreviousClub(request,pk):
  player_previous_club = Player_Previous_Club.objects.get(id = pk)
  player_previous_club.delete()
  return Response('Poprzedni klub zawodnika został usunięty')