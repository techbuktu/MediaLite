from django.http import Http404
from rest_framework import generics
from rest_framework.response import Response 
from rest_framework.reverse import reverse 

from rest_framework import filters as drf_filters 
from rest_framework.decorators import (
    api_view, authentication_classes 
)
from rest_framework.permissions import (
    IsAuthenticated, IsAuthenticatedOrReadOnly, DjangoModelPermissions, IsAdminUser
)
from rest_framework.authentication import (
    SessionAuthentication, BasicAuthentication, TokenAuthentication
)


#Publisher app's models and API serializers 
from publisher.models import (Article, Comment)
from publisher.api.serializers import (ArticleSerializer, CommentSerializer)

@api_view(['GET'])
def publisher_api_root(request, format=None):
    """
    Root page of the Publisher API. Links to the 'list' page of each serializer.
    """
    return Response({
        'articles': reverse('publisher_api:article_list', request=request, format=format),
        'comments': reverse('publisher_api:comment_list', request=request, format=format)
    })

class ArticleListView(generics.ListCreateAPIView):
    """
    View to serve serialized format of list of publisher.Article instances.
    Will also POST a new publisher.Article to DB.
    """
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    lookup_field = "link"
    authentication_classes = [BasicAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly, IsAdminUser]

class ArticleDetailView(generics.RetrieveUpdateDestroyAPIView):
    """
    Handles GET, PUT and DELETE methods on the publisher.Article object instances.
    """
    queryset = Article.objects.all()
    seriializer_class = ArticleSerializer
    lookup_field = "link"
    authentication_classes = [BasicAuthentication, SessionAuthentication, TokenAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly, IsAdminUser]

class CommentListAPIView(generics.ListCreateAPIView):
    """
    Serves serialized format of publisher.Comment model.
    Requires user to be authenticated to POST new Comments.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_field = "link"
    authentication_classes = [BasicAuthentication, SessionAuthentication, TokenAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly, IsAdminUser]

class CommentDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    Authenticated User with proper permissions performs GET, PUT and DELETE 
    on a single publisher.Comment object instance.
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    lookup_field = "link"
    authentication_classes = [BasicAuthentication, SessionAuthentication, TokenAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly, IsAdminUser]


