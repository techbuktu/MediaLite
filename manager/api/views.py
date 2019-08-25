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

#Import Manager app's models and API serializers
from django.contrib.auth.models import User 
from manager.models import (Writer, Editor)
from manager.api.serializers import (
    UserSerializer, EditorSerializer, WriterSerializer
)

@api_view(['GET'])
def medialite_api_root(request, format=None):
    """
    API root for the MediaLite Platform.
    """
    return Response({
        'manager': reverse('manager_api:manager_api_root', request=request, format=format),
        'publisher': reverse('publisher_api:publisher_api_root', request=request, format=format)
    })

@api_view(['GET'])
def manager_api_root(request, format=None):
    """
    Landing Page/Root API endpoint for the Manager APIs.
    Lists links to all other Manager API's 'list' endpoints.
    """
    return Response(
        {
            'users': reverse('manager_api:user_list', request=request, format=format),
            'editors': reverse('manager_api:editor_list', request=request, format=format),
            'writers': reverse('manager_api:writer_list', request=request, format=format)
        }
    )

class UserListView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer 
    lookup_field = "pk"
    #authentication_classes = [BasicAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly, IsAdminUser]

class UserDetailView(generics.RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = "pk"
    #authentication_classes = [BasicAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly, DjangoModelPermissions, IsAdminUser]

class EditorListView(generics.ListCreateAPIView):
    queryset = Editor.objects.all()
    serializer_class = EditorSerializer
    lookup_field = "link"
    #authentication_classes = [BasicAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticated]

class EditorDetailView(generics.RetrieveUpdateAPIView):
    queryset = Editor.objects.all()
    serializer_class = EditorSerializer
    lookup_field = "link"
    authentication_classes = [BasicAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticated, DjangoModelPermissions]

class WriterListView(generics.ListCreateAPIView):
    queryset = Writer.objects.all()
    serializer_class = WriterSerializer
    lookup_field = "link"
    authentication_classes = [BasicAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticated]

class WriterDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Writer.objects.all()
    serializer_class = WriterSerializer
    lookup_field = "link"
    authentication_classes = [BasicAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticatedOrReadOnly, DjangoModelPermissions]