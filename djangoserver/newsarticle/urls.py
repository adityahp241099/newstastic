from django.urls import include, path
from rest_framework import routers

# router = routers.DefaultRouter()
# router.register(r'users', views.UserViewSet)
# router.register(r'groups', views.GroupViewSet)
from . views import *

urlpatterns = [
    path("list/",LiveAPI.as_view(),name='newstastic-live'),
    path("category/",ViewNewspaperAPI.as_view(),name='newstastic-newspaper'),
    path("<int:pk>/",ViewPostAPI.as_view(),name='newstastic-article')
]
