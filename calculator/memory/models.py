from django.db import models

# Create your models here.
class MemoryEntry(models.Model):
  timestamp = models.DateTimeField(auto_now=True)
  value = models.FloatField()

  def __str__(self):
    return self.timestamp.__str__() + ": " + self.value