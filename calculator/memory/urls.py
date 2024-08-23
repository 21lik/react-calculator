from django.urls import re_path
from . import views

urlpatterns = [
  re_path(r'^api/memory/([0-9])$', views.memory, name='memory'),
  re_path(r'^api/memory_list/$', views.memory_list, name='memory_list'),
  re_path(r'^api/latest_memory/$', views.latest_memory, name='latest_memory'),
  re_path(r'^api/new_memory/$', views.new_memory, name='new_memory'), # TODO: figure out which set you want, if anything needs revision, etc.
]