from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .serializers import MemoryEntrySerializer

from .models import MemoryEntry

@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def memory(request, id):
  try:
    entry = MemoryEntry.objects.get(id=id)
  except MemoryEntry.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
  if (request.method == 'GET'):
    serializer = MemoryEntrySerializer(entry, context={'request': request})
    return Response(serializer.data)
  elif (request.method == 'PUT'):
    serializer = MemoryEntrySerializer(entry, data=request.data, context={'request': request})
    if serializer.is_valid():
      serializer.save()
      return Response(status=status.HTTP_204_NO_CONTENT)
    else:
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  elif (request.method == 'DELETE'):
    entry.delete()
    Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'DELETE'])
def memory_list(request):
  if (request.method == 'GET'):
    entries = MemoryEntry.objects.all().values()
    serializer = MemoryEntrySerializer(entries, context={'request': request}, many=True)
    return Response(serializer.data)
  elif (request.method == 'DELETE'):
    MemoryEntry.objects.all().delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'PUT', 'DELETE'])
def latest_memory(request):
  try:
    entry = MemoryEntry.objects.latest('timestamp')
  except MemoryEntry.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
  if (request.method == 'GET'):
    serializer = MemoryEntrySerializer(entry, context={'request': request})
    return Response(serializer.data)
  elif (request.method == 'PUT'):
    serializer = MemoryEntrySerializer(entry, data=request.data, context={'request': request})
    if serializer.is_valid():
      serializer.save()
      return Response(status=status.HTTP_204_NO_CONTENT)
    else:
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  elif (request.method == 'DELETE'):
    entry.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)    

@api_view(['POST'])
def new_memory(request):
  if (request.method == 'POST'):
    serializer = MemoryEntrySerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(status=status.HTTP_201_CREATED)
    else:
      return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)