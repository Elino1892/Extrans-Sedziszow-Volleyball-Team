from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework import status
import base64
from main.serializers import TeamSerializer

from main.models import Team, Table




@api_view(['GET'])
def getTeams(request):
  team = Team.objects.order_by('name')
  serializer = TeamSerializer(team, many = True)

  return Response(serializer.data)


@api_view(['GET'])
def getTeam(request, pk): 
    team = Team.objects.get(id = pk)
    serializer = TeamSerializer(team, many=False)

    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createTeam(request):
    data = request.data

    team = Team.objects.create(
      name = data['name'],
    )
    serializer = TeamSerializer(team, many=False)

    try:
        Table.objects.get(team=serializer.data['id'])
    except:
        Table.objects.create(   
        points= 0,
        matches_played = 0,
        matches_won = 0, 
        matches_lost = 0,
        sets_won = 0, 
        sets_lost = 0,
        small_points_won = 0, 
        small_points_lost = 0,
        ratio_sets = 0,
        ratio_small_points = 0, 
        team = team,
      )
      

    

    
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateTeam(request, pk):
    data = request.data
    team = Team.objects.get(id=pk)

    team.name = data['name']

    team.save()

    serializer = TeamSerializer(team, many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteTeam(request,pk):
  team = Team.objects.get(id = pk)
  team.delete()
  return Response('Drużyna usunięta')

@api_view(['POST'])
def uploadImage(request):
    data = request.data
    team_id = data['team_id']
    team = Team.objects.get(id=team_id)
    serializer = TeamSerializer(team, many=False)
    image = serializer.data['logo']
    uploaded_file = request.FILES.get('image')
    

    if(not image):
        team.logo = uploaded_file
        team.save()
    else:
      image_name = serializer.data['logo'][8:]

      if(uploaded_file and image_name != uploaded_file.name):
        team.logo = uploaded_file
        team.save()

    return Response('Zdjęcie zostało przesłane')
  