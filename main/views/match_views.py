from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework import status

from main.serializers import MatchSerializer, SetSerializer, TeamSerializer

from main.models import Match, Team, Set, Table
from datetime import datetime
import babel.dates



@api_view(['GET'])
def getMatches(request):
  matches = Match.objects.order_by('round')
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
    match['date'] = babel.dates.format_datetime(time_data, 'EEEE, d MMMM yyyy | HH:mm', locale='pl_PL')

  return Response(serializer.data)


@api_view(['GET'])
def getMatchesWithRound(request):
  matches = Match.objects.order_by('-round')
  serializer = MatchSerializer(matches, many = True)

  matchesWithRound = []

  if(serializer.data):
    theLastRound = serializer.data[0]['round']

    

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
        match['date'] = babel.dates.format_datetime(time_data, 'EEEE, d MMMM yyyy | HH:mm', locale='pl_PL')

      matchWithRound ={
        'round': i+1,
        'matches': serializer_matches.data
      }
      matchesWithRound.append(matchWithRound)



  return Response(matchesWithRound)


@api_view(['GET'])
def getLastMatches(request):

  matches_finished = Match.objects.filter(is_home=True, is_finished = True).order_by('round')
  serializer_matches_finished = MatchSerializer(matches_finished, many = True)

  for match in serializer_matches_finished.data:
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
      match['date'] = babel.dates.format_datetime(time_data, 'EEEE, d MMMM yyyy | HH:mm', locale='pl_PL')


  matches_next = Match.objects.filter(is_home=True,is_finished=False).order_by('round')
  serializer_matches_next = MatchSerializer(matches_next, many = True)


  for match in serializer_matches_next.data:
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
      match['date'] = babel.dates.format_datetime(time_data, 'EEEE, d MMMM yyyy | HH:mm', locale='pl_PL')

  last_matches = serializer_matches_finished.data[-2:] + serializer_matches_next.data[:4]

  return Response(last_matches)


@api_view(['GET'])
def getMatch(request, pk): 
    match = Match.objects.get(id = pk)
    serializer = MatchSerializer(match, many=False)

    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createMatch(request):
    data = request.data

    if(data['home_team_score'] or data['guest_team_score']):
      result = f"{data['home_team_score']}:{data['guest_team_score']}"
    else:
      result = ""

    set_results = []



    for index in range(len(data['set_results_home'])):
      if(data['set_results_home'][index] and data['set_results_guest'][index]):
        set_text = f"{data['set_results_home'][index]}:{data['set_results_guest'][index]}"
        set_results.append(set_text)
        


    set_results_text = ""
    for set_result in set_results:
      set = f" {set_result} |"
      set_results_text += set
    

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

    if(data['is_finished']):
      home_team_table = Table.objects.get(team=data['home_team'])
      guest_team_table = Table.objects.get(team=data['guest_team'])

      if(data['home_team_score'] == 3 and (data['guest_team_score'] == 0 or data['guest_team_score'] == 1)):
        home_team_table.points += 3

        home_team_table.matches_won += 1
        guest_team_table.matches_lost += 1

      elif(data['home_team_score'] == 3 and data['guest_team_score'] == 2):
        home_team_table.points += 2
        guest_team_table.points += 1
        home_team_table.matches_won += 1
        guest_team_table.matches_lost += 1
      elif(data['guest_team_score'] == 3 and (data['home_team_score'] == 0 or data['home_team_score'] == 1)):
        guest_team_table.points += 3
        guest_team_table.matches_won += 1
        home_team_table.matches_lost += 1
      elif(data['guest_team_score'] == 3 and data['home_team_score'] == 2):
        guest_team_table.points += 2
        home_team_table.points += 1
        guest_team_table.matches_won += 1
        home_team_table.matches_lost += 1

      small_points_home_team = 0
      small_points_guest_team = 0

      for index in range(len(data['set_results_home'])):
        if(data['set_results_home'][index] and data['set_results_guest'][index]):
          small_points_home_team += int(data['set_results_home'][index])
          small_points_guest_team += int(data['set_results_guest'][index])
          

      home_team_table.small_points_won += small_points_home_team
      home_team_table.small_points_lost += small_points_guest_team
      guest_team_table.small_points_won += small_points_guest_team
      guest_team_table.small_points_lost += small_points_home_team

      home_team_table.sets_won += data['home_team_score']
      home_team_table.sets_lost += data['guest_team_score']
      guest_team_table.sets_won += data['guest_team_score']
      guest_team_table.sets_lost += data['home_team_score']

      if(home_team_table.sets_lost):
        home_team_table.ratio_sets = home_team_table.sets_won /home_team_table.sets_lost
      else:
        home_team_table.ratio_sets = 0

      if(guest_team_table.sets_lost):
        guest_team_table.ratio_sets = guest_team_table.sets_won /guest_team_table.sets_lost
      else:
        guest_team_table.ratio_sets = 0
      
      if(home_team_table.small_points_lost):
        home_team_table.ratio_small_points = home_team_table.small_points_won / home_team_table.small_points_lost
      else:
        home_team_table.ratio_small_points = 0
    
      if(guest_team_table.small_points_lost):
        guest_team_table.ratio_sets = guest_team_table.small_points_won / guest_team_table.small_points_lost
      else:
        guest_team_table.ratio_sets
      
      home_team_table.ratio_small_points = home_team_table.small_points_won / home_team_table.small_points_lost
      guest_team_table.ratio_sets = guest_team_table.small_points_won / guest_team_table.small_points_lost
      
      home_team_table.matches_played += 1
      guest_team_table.matches_played += 1

      home_team_table.save()
      guest_team_table.save()
    serializer = MatchSerializer(match, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateMatch(request, pk):
    data = request.data
    match = Match.objects.get(id=pk)

    if(data['home_team_score'] or data['guest_team_score']):
      result = f"{data['home_team_score']}:{data['guest_team_score']}"
    else:
      result = ""

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

    for index in range(len(data['set_results_home'])): # 3
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
        Set.objects.filter(match = serializer.data['id'])[:number_delete_item].delete()

    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteMatch(request,pk):
  match = Match.objects.get(id = pk)
  serializer = MatchSerializer(match, many=False)

  home_team_table = Table.objects.get(team=serializer.data['home_team'])
  guest_team_table = Table.objects.get(team=serializer.data['guest_team'])

  if(serializer.data['home_team_score'] == 3 and (serializer.data['guest_team_score'] == 0 or serializer.data['guest_team_score'] == 1)):
      home_team_table.points -= 3

      home_team_table.matches_won -= 1
      guest_team_table.matches_lost -= 1

  elif(serializer.data['home_team_score'] == 3 and serializer.data['guest_team_score'] == 2):
      home_team_table.points -= 2
      guest_team_table.points -= 1
      home_team_table.matches_won -= 1
      guest_team_table.matches_lost -= 1
  elif(serializer.data['guest_team_score'] == 3 and (serializer.data['home_team_score'] == 0 or serializer.data['home_team_score'] == 1)):
      guest_team_table.points -= 3
      guest_team_table.matches_won -= 1
      home_team_table.matches_lost -= 1
  elif(serializer.data['guest_team_score'] == 3 and serializer.data['home_team_score'] == 2):
      guest_team_table.points -= 2
      home_team_table.points -= 1
      guest_team_table.matches_won -= 1
      home_team_table.matches_lost -= 1

  small_points_home_team = 0
  small_points_guest_team = 0

  for index in range(len(serializer.data['set'])):
        small_points_home_team += int(serializer.data['set'][index]['home_team_score_set'])
        small_points_guest_team += int(serializer.data['set'][index]['guest_team_score_set'])
        

  home_team_table.small_points_won -= small_points_home_team
  home_team_table.small_points_lost -= small_points_guest_team
  guest_team_table.small_points_won -= small_points_guest_team
  guest_team_table.small_points_lost -= small_points_home_team

  home_team_table.sets_won -= serializer.data['home_team_score']
  home_team_table.sets_lost -= serializer.data['guest_team_score']
  guest_team_table.sets_won -= serializer.data['guest_team_score']
  guest_team_table.sets_lost -= serializer.data['home_team_score']

  if(home_team_table.sets_lost):
    home_team_table.ratio_sets = home_team_table.sets_won /home_team_table.sets_lost
  else:
    home_team_table.ratio_sets = 0

  if(guest_team_table.sets_lost):
    guest_team_table.ratio_sets = guest_team_table.sets_won /guest_team_table.sets_lost
  else:
    guest_team_table.ratio_sets = 0
    
  if(home_team_table.small_points_lost):
    home_team_table.ratio_small_points = home_team_table.small_points_won / home_team_table.small_points_lost
  else:
    home_team_table.ratio_small_points = 0
  
  if(guest_team_table.small_points_lost):
    guest_team_table.ratio_sets = guest_team_table.small_points_won / guest_team_table.small_points_lost
  else:
    guest_team_table.ratio_sets
    
  home_team_table.matches_played -= 1
  guest_team_table.matches_played -= 1

  home_team_table.save()
  guest_team_table.save()

  match.delete()
  return Response('Mecz został usunięty')