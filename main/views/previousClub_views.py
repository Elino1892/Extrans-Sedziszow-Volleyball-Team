from turtle import position
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework import status

from django.contrib.auth.models import  User
from main.serializers import PreviousClubSerializer, PlayerPreviousClubSerializer

from main.models import Previous_Club, Player_Previous_Club, Player




@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getPreviousClubs(request):
  previous_clubs = Previous_Club.objects.order_by('id')
  serializer = PreviousClubSerializer(previous_clubs, many = True)

  return Response(serializer.data)


@api_view(['GET'])
def getPreviousClub(request, pk): 
    previous_club = Previous_Club.objects.get(id = pk)
    serializer = PreviousClubSerializer(previous_club, many=False)

    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createPreviousClub(request):
    data = request.data

    previous_club = Previous_Club.objects.create(
      name = data['name'],
    )

    serializer = PreviousClubSerializer(previous_club, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updatePreviousClub(request, pk):
    data = request.data
    previous_club = Previous_Club.objects.get(id=pk)

    previous_club.name = data['name']

    previous_club.save()

    serializer = PreviousClubSerializer(previous_club, many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deletePreviousClub(request,pk):
  previous_club = Previous_Club.objects.get(id = pk)
  previous_club.delete()
  return Response('Klub usunięty')











  