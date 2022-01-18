from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken

from .models import News, Comment, Player, Group, Previous_Club, Player_Previous_Club
from django.contrib.auth.models import User

from datetime import datetime
import babel.dates


class UserSerializer(serializers.ModelSerializer):
    isAdmin = serializers.SerializerMethodField(read_only=True)
    name = serializers.SerializerMethodField(read_only=True)
    last_name = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'isAdmin', 'last_name', 'name']

    def get_isAdmin(self, obj):
        return obj.is_staff

    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email
        return name
    
    def get_last_name(self, obj):
        last_name = obj.last_name
        return last_name

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'isAdmin','name', 'last_name', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


class CommentSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Comment
        fields = '__all__'

class NewsSerializer(serializers.ModelSerializer):
    comments = serializers.SerializerMethodField(read_only=True)

    class Meta: 
        model = News
        fields = '__all__'

    def get_comments(self,obj):
        comments = obj.comment_set.order_by('-createdAt')
        serializer = CommentSerializer(comments, many=True)

        for comment in serializer.data:
            user = User.objects.get(id=comment['user'])
            user_serializer = UserSerializer(user, many=False)
            comment['user'] = user_serializer.data['name']
            time = comment['createdAt'][:16]
            time_data = datetime.strptime(time, '%Y-%m-%dT%H:%M')
            comment['createdAt'] = babel.dates.format_datetime(time_data, 'EEEE, d MMMM yyyy | H:mm', locale='pl_PL')
            
        return serializer.data


class PlayerSerializer(serializers.ModelSerializer):
    group = serializers.SerializerMethodField(read_only=True)
    playerPreviousClubs = serializers.SerializerMethodField(read_only=True)

    class Meta: 
        model = Player
        fields = '__all__'

    def get_group(self,obj):
        group = obj.group
        serializer = GroupSerializer(group, many=False)
        return serializer.data
    
    def get_playerPreviousClubs(self,obj):
        playerPreviousClubs = Player_Previous_Club.objects.filter(player__id = obj.id)
        serializer = PlayerPreviousClubSerializer(playerPreviousClubs, many=True)

        for player_previous_club in serializer.data:
            previous_club = Previous_Club.objects.get(id=player_previous_club['previous_club'])
            previous_club_serializer = PreviousClubSerializer(previous_club, many=False)
            player_previous_club['previous_club'] = previous_club_serializer.data['name']
            group = Group.objects.get(id=player_previous_club['position'])
            group_serializer = GroupSerializer(group, many=False)
            player_previous_club['position'] = group_serializer.data['name']

        return serializer.data

class GroupSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Group
        fields = '__all__'

class PreviousClubSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Previous_Club
        fields = '__all__'

class PlayerPreviousClubSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Player_Previous_Club
        fields = '__all__'
