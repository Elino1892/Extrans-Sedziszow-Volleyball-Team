from genericpath import exists
from turtle import home
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework import status

from main.serializers import MatchSerializer, SetSerializer, TeamSerializer

from main.models import Match, Team, Set
from datetime import datetime
import babel.dates



@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getMatches(request):
  matches = Match.objects.order_by('id')
  serializer = MatchSerializer(matches, many = True)

  for match in serializer.data:
    home_team = Team.objects.get(id=match['home_team'])
    home_team_serializer = TeamSerializer(home_team, many=False)
    match['home_team'] = home_team_serializer.data['name']
    guest_team = Team.objects.get(id=match['guest_team'])
    guest_team_serializer = TeamSerializer(guest_team, many=False)
    match['guest_team'] = guest_team_serializer.data['name']
    time = match['date'][:16]
    time_data = datetime.strptime(time, '%Y-%m-%dT%H:%M')
    match['date'] = babel.dates.format_datetime(time_data, 'EEEE, d MMMM yyyy | H:mm', locale='pl_PL')

  return Response(serializer.data)


@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getMatchesWithRound(request):
  matches = Match.objects.order_by('-round')
  serializer = MatchSerializer(matches, many = True)



  theLastRound = serializer.data[0]['round']

  


# [
#   {
#     'id': 1,
#     'round': '1',
#     'matches': [
#       {
#         'id': 1,
#         'homeTeam': 'Kępa MOSiR Dębica',
#         'logoHomeTeam': teamLogo1,
#         'awayTeam': 'MCKiS Jaworzno',
#         'logoAwayTeam': teamLogo2,
#         'isHome': false,
#         'homeTeamScore': '0',
#         'awayTeamScore': '3',
#         'isFinished': true,
#         'smallPoints': ['20:25', '12:25', '20:25'],
#         // 'homeTeamScoreSet': [{
#         //   '1': '20',
#         //   '2': '12',
#         //   '3': '20'
#         // }],
#         // 'awayTeamScoreSet': [{
#         //   '1': '25',
#         //   '2': '25',
#         //   '3': '25'
#         // }],
#         'date': 'sobota, 25 września 2021'
#       },
#       {
#         'id': 2,
#         'homeTeam': 'Kępa MOSiR Dębica',
#         'logoHomeTeam': teamLogo1,
#         'awayTeam': 'MCKiS Jaworzno',
#         'logoAwayTeam': teamLogo2,
#         'homeTeamScore': '0',
#         'isHome': true,
#         'awayTeamScore': '3',
#         'isFinished': true,
#         'smallPoints': ['20:25', '12:25', '20:25'],
#         // 'homeTeamScoreSet': [{
#         //   '1': '20',
#         //   '2': '12',
#         //   '3': '20'
#         // }],
#         // 'awayTeamScoreSet': [{
#         //   '1': '25',
#         //   '2': '25',
#         //   '3': '25'
#         // }],
#         'date': 'sobota, 25 września 2021'
#       },
#       {
#         'id': 3,
#         'homeTeam': 'Kępa MOSiR Dębica',
#         'logoHomeTeam': teamLogo1,
#         'awayTeam': 'MCKiS Jaworzno',
#         'logoAwayTeam': teamLogo2,
#         'isHome': false,
#         'homeTeamScore': '0',
#         'awayTeamScore': '3',
#         'isFinished': true,
#         'smallPoints': ['20:25', '12:25', '20:25'],
#         // 'homeTeamScoreSet': [{
#         //   '1': '20',
#         //   '2': '12',
#         //   '3': '20'
#         // }],
#         // 'awayTeamScoreSet': [{
#         //   '1': '25',
#         //   '2': '25',
#         //   '3': '25'
#         // }],
#         'date': 'sobota, 25 września 2021'
#       },

#     ],
#   },



  matchesWithRound = []

  for i in range(theLastRound):
    matches = Match.objects.filter(round=i+1)
    serializer_matches = MatchSerializer(matches, many=True)

    for match in serializer_matches.data:
      home_team = Team.objects.get(id=match['home_team'])
      home_team_serializer = TeamSerializer(home_team, many=False)
      match['home_team'] = home_team_serializer.data['name']
      match['home_team_logo'] = home_team_serializer.data['logo']
      guest_team = Team.objects.get(id=match['guest_team'])
      guest_team_serializer = TeamSerializer(guest_team, many=False)
      match['guest_team'] = guest_team_serializer.data['name']
      match['guest_team_logo'] = guest_team_serializer.data['logo']
      time = match['date'][:16]
      time_data = datetime.strptime(time, '%Y-%m-%dT%H:%M')
      match['date'] = babel.dates.format_datetime(time_data, 'EEEE, d MMMM yyyy | H:mm', locale='pl_PL')

    matchWithRound ={
      'round': i+1,
      'matches': serializer_matches.data
    }
    matchesWithRound.append(matchWithRound)



  return Response(matchesWithRound)


@api_view(['GET'])
def getMatch(request, pk): 
    match = Match.objects.get(id = pk)
    serializer = MatchSerializer(match, many=False)
    match_item = serializer.data

    home_team = Team.objects.get(id=match_item['home_team'])
    home_team_serializer = TeamSerializer(home_team, many=False)
    match_item['home_team'] = home_team_serializer.data['name']
    guest_team = Team.objects.get(id=match_item['guest_team'])
    guest_team_serializer = TeamSerializer(guest_team, many=False)
    match_item['guest_team'] = guest_team_serializer.data['name']
    time = match_item['date'][:16]
    time_data = datetime.strptime(time, '%Y-%m-%dT%H:%M')
    match_item['date'] = babel.dates.format_datetime(time_data, 'EEEE, d MMMM yyyy | H:mm', locale='pl_PL')

    return Response(match_item)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createMatch(request):
    data = request.data

    result = f"{data['home_team_score']}:{data['guest_team_score']}"

    set_results = []



    for index in range(len(data['set_results_home'])):
      if(data['set_results_home'][index] and data['set_results_guest'][index]):
        set_text = f"{data['set_results_home'][index]}:{data['set_results_guest'][index]}"
        set_results.append(set_text)
        


    set_results_text = ""
    for set_result in set_results:
      set = f" {set_result} |"
      set_results_text += set
    
    # print(result)
    # print(set_results[:-2])
    team_home = Team.objects.get(id=data['home_team'])
    guest_home = Team.objects.get(id=data['guest_team'])

    match = Match.objects.create(
      date = data['date'],
      home_team = team_home,
      guest_team = guest_home,
      home_team_score = data['home_team_score'],
      guest_team_score = data['guest_team_score'],
      round = data['round'],
      hall = data['hall'],
      is_home = data['is_home'],
      is_finished = data['is_finished'],
      result = result,
      set_results = set_results_text[:-2]
    )

    for index in range(len(data['set_results_home'])):
      if(data['set_results_home'][index] and data['set_results_guest'][index]):
        set = Set.objects.create(
          number = index + 1,
          home_team_score_set = data['set_results_home'][index],
          guest_team_score_set = data['set_results_guest'][index],
          match = match
        )

    serializer = MatchSerializer(match, many=False)
    return Response(serializer.data)
    # return Response()


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateMatch(request, pk):
    data = request.data
    match = Match.objects.get(id=pk)


    

    result = f"{data['home_team_score']}:{data['guest_team_score']}"

    set_results = []



    for index in range(len(data['set_results_home'])):
      if(data['set_results_home'][index] and data['set_results_guest'][index]):
        set_text = f"{data['set_results_home'][index]}:{data['set_results_guest'][index]}"
        set_results.append(set_text)
        



    set_results_text = ""
    for set_result in set_results:
      set = f" {set_result} |"
      set_results_text += set

    home_team = Team.objects.get(id=data['home_team'])
    guest_team = Team.objects.get(id=data['guest_team'])

    # serializer_home_team = TeamSerializer(home_team, many=False)
    # print(serializer_home_team.data)
    # print(type(guest_team))

    match.date = data['date']
    match.home_team = home_team
    match.guest_team = guest_team    
    match.home_team_score =  data['home_team_score']
    match.guest_team_score = data['guest_team_score']
    match.round = data['round']
    match.hall = data['hall']
    match.is_home = data['is_home']
    match.is_finished = data['is_finished']
    match.result = result
    match.set_results = set_results_text[:-2]
    match.save()
    serializer = MatchSerializer(match, many=False)
    sets = Set.objects.filter(match = serializer.data['id']) # 5
    # print()
    for index in range(len(data['set_results_home'])): # 3
      # if(data['set_results_home'][index] and data['set_results_guest'][index]):

        # match.set[index]['home_team_score_set'] = data['set_results_home'][index]
        # match.set[index]['guest_team_score_set'] = data['set_results_guest'][index]
        
        # serializer_sets = SetSerializer(sets, many=True)

        # for set in sets:
          # 
          try: 
            set = Set.objects.get(match = serializer.data['id'], number = index+1)
            set.home_team_score_set = data['set_results_home'][index]
            set.guest_team_score_set = data['set_results_guest'][index]
            set.save()
          except:
            set = Set.objects.create(
            number = index + 1,
            home_team_score_set = data['set_results_home'][index],
            guest_team_score_set = data['set_results_guest'][index],
            match = match
          )
    

    if len(data['set_results_home']) - len(sets) < 0:
        number_delete_item = len(sets) - range(len(data['set_results_home']))
        print(number_delete_item)
        Set.objects.filter(match = serializer.data['id'])[:number_delete_item].delete()

        # set = Set.objects.create(
        #   number = index + 1,
        #   home_team_score_set = data['set_results_home'][index],
        #   guest_team_score_set = data['set_results_guest'][index],
        #   match = match
        # )

    
    
    return Response(serializer.data)
    # return Response()

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteMatch(request,pk):
  match = Match.objects.get(id = pk)
  match.delete()
  return Response('Mecz został usunięty')