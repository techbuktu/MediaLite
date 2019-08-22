from rest_framework import serializers 
from django.contrib.auth.models import User 
from publisher.models import (
    Article, Comment
)
from manager.models import (Editor, Writer)

#Serializers for the Publisher app's models

class ArticleSerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer for the publisher.Article model.
    """
    writer = serializers.HyperlinkedRelatedField(
        queryset = Writer.objects.all(),
        view_name = "manager_api:writer_detail",
        lookup_field = "link"
    ) 
    comments = serializers.HyperlinkedRelatedField(
        queryset = Comment.objects.all(),
        view_name = "publisher_api:comment_detail",
        lookup_field = "link",
        many = True
    )
    class Meta:
        model = Article
        fields = ['writer','title','body','publish_date','publish']


class CommentSerializer(serializers.HyperlinkedModelSerializer):
    """
    Serializer for the publisher.Comment model.
    """
    article = serializers.HyperlinkedRelatedField(
        queryset = Article.objects.all(),
        view_name = "publisher_api:article_detail",
        lookup_field = "link"
    )
    commenter = serializers.HyperlinkedRelatedField(
        queryset = User.objects.all(),
        view_name = "manager_api:user_detail",
        lookup_field = "pk",
        many = False
    )

    class Meta:
        model = Comment 
        fields = ['commenter','article','body','comment_date',]

