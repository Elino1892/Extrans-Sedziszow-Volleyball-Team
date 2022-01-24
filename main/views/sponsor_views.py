from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework import status

from main.serializers import SponsorSerializer

from main.models import Sponsor




@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getSponsors(request):
  sponsors = Sponsor.objects.order_by('id')
  serializer = SponsorSerializer(sponsors, many = True)

  return Response(serializer.data)


@api_view(['GET'])
def getSponsor(request, pk): 
    sponsor = Sponsor.objects.get(id = pk)
    serializer = SponsorSerializer(sponsor, many=False)

    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createSponsor(request):
    data = request.data

    sponsor = Sponsor.objects.create(
      name = data['name'],
      link = data['link'],
      group = data['group'],
    )

    serializer = SponsorSerializer(sponsor, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateSponsor(request, pk):
    data = request.data
    sponsor = Sponsor.objects.get(id=pk)

    sponsor.name = data['name']
    sponsor.link = data['link']
    sponsor.group = data['group']

    sponsor.save()

    serializer = SponsorSerializer(sponsor, many=False)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteSponsor(request,pk):
  sponsor = Sponsor.objects.get(id = pk)
  sponsor.delete()
  return Response('Sponsor usunięty')


@api_view(['POST'])
def uploadImage(request):
    data = request.data
    sponsor_id = data['sponsor_id']
    sponsor = Sponsor.objects.get(id=sponsor_id)

    if(request.FILES.get('image')):
      sponsor.image = request.FILES.get('image')
      sponsor.save()


    return Response('Zdjęcie zostało przesłane')
  