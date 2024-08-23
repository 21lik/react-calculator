from django.db import models

# Create your models here.
class MemoryEntry(models.Model):
  timestamp = models.DateTimeField(auto_now=True)
  value = models.FloatField()