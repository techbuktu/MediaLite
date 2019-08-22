from rest_framework import serializers 
from manager.models import (Editor, Writer)
from publisher.models import (Article)

class EditorSerializer(serializers.HyperlinkedModelSerializer):
    writers = None 
    class Meta:
        model = Editor 
        fields = ['']

class WriterSerializer(serializer.HyperlinkedModelSerializer):
    class Meta:
        model = Writer 
        fields = ['']



