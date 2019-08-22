from django.contrib.auth.models import User 
from rest_framework import serializers 
from manager.models import (Editor, Writer)
from publisher.models import (Article)

class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for the django.contrib.auth.models.User model.
    """
    writer = serializers.HyperlinkedRelatedField(
        queryset = Writer.objects.all(),
        view_name = 'manager_api:writer_detail',
        lookup_field = "link"
    )
    editor = serializers.HyperlinkedRelatedField(
        queryset = Editor.objects.all(),
        view_name = 'manager_api:editor_detail',
        lookup_field = "link"
    )
    class Meta:
        model = User 
        fields = ['first_name','last_name','pk']

class EditorSerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer for the manager.Editor model. Returns JSON by default.
    """
    user = serializers.HyperlinkedRelatedField(
        queryset = User.objects.all(),
        view_name = 'manager_api:user_detail',
        lookup_field = "pk"
    )
    writers = serializers.HyperlinkedRelatedField(
        queryset = Writer.objects.all(),
        view_name = 'manager_api:writer_detail',
        many = True
    )

    class Meta:
        model = Editor 
        fields = ['user','link','about','date_reg']

class WriterSerializer(serializers.HyperlinkedModelSerializer):
    """
    API Serializer for the manager.Writer model. Returns JSON format by default.
    """
    user = serializers.HyperlinkedRelatedField(
        queryset = User.objects.all(),
        view_name = "manager_api:user_detail",
        lookup_field = "pk"
    )
    editor = serializers.HyperlinkedRelatedField(
        queryset = Editor.objects.all(),
        view_name = "manager_api:editor_detail",
        lookup_field = "link"
    )
    articles = serializers.HyperlinkedRelatedField(
        queryset = Article.objects.all(),
        view_name = "publisher_api:article_detail",
        lookup_field = "link",
        many = True
    )
    class Meta:
        model = Writer 
        fields = ['user','editor','link','about','date_reg',]