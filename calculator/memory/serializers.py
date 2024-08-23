from rest_framework import serializers
from .models import MemoryEntry

class MemoryEntrySerializer(serializers.ModelSerializer):
  class Meta:
    model = MemoryEntry 
    fields = ('id', 'timestamp', 'value',) # TODO: all three or just value?