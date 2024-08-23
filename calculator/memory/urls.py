from django.urls import path
from . import views

urlpatterns = [
  path('memory/', views.memory, name='memory'),
  path('memory_list/', views.memory_list, name='memory_list'),
  path('latest_memory/', views.latest_memory, name='latest_memory'),
  path('new_memory/', views.new_memory, name='new_memory'),
]