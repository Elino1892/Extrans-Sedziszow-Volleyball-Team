from tokenize import group
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework import status

from django.contrib.auth.models import  User
from main.serializers import GroupSerializer

from main.models import Group




@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getGroups(request):
  group = Group.objects.order_by('id')
  serializer = GroupSerializer(group, many = True)

  return Response(serializer.data)


@api_view(['GET'])
def getGroup(request, pk): 
    group = Group.objects.get(id = pk)
    serializer = GroupSerializer(group, many=False)

    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createGroup(request):
    data = request.data

    group = Group.objects.create(
      name = data['name'],
    )

    serializer = GroupSerializer(group, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateGroup(request, pk):
    data = request.data
    group = Group.objects.get(id=pk)

    group.name = data['name']

    group.save()

    serializer = GroupSerializer(group, many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteGroup(request,pk):
  group = Group.objects.get(id = pk)
  group.delete()
  return Response('Grupa usunięta')
  