from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework import status

from django.db.models import Q
from main.serializers import TableSerializer, TeamSerializer

from main.models import Table, Team




@api_view(['GET'])
def getTable(request):
  table = Table.objects.order_by('-points','-matches_won', '-ratio_sets', '-ratio_small_points')
  serializer = TableSerializer(table, many = True)


  for index,team_table in enumerate(serializer.data):
      team = Team.objects.get(id=team_table['team'])
      team_serializer = TeamSerializer(team, many=False)
      team_table['team'] = team_serializer.data['name']
      team_table['team_logo'] = team_serializer.data['logo']
      team_table['place'] = index+1


  return Response(serializer.data)


def customSort(k):
  return k['place']

@api_view(['GET'])
def getShortTable(request):
  table = Table.objects.order_by('-points','-matches_won', '-ratio_sets', '-ratio_small_points')
  serializer = TableSerializer(table, many = True)


  for index,team_table in enumerate(serializer.data):
      team = Team.objects.get(id=team_table['team'])
      team_serializer = TeamSerializer(team, many=False)
      team_table['team'] = team_serializer.data['name']
      team_table['team_logo'] = team_serializer.data['logo']
      team_table['place'] = index+1

  short_table = []
  own_team = {}

  for team in serializer.data:
    if(team['team'] == 'Extrans Sędziszów Małopolski'):
      own_team = team
    else:
      if(len(short_table) < 3):
        short_table.append(team)

  short_table.append(own_team)

  
  short_table.sort(key=customSort)


  return Response(short_table)

