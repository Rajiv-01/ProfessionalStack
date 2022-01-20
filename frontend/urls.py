from . import views
from django.urls.conf import path


urlpatterns = [
    path('', views.home)
]
