from django.urls import path
from core.views import WaistAPIView, BodyStatsAPIView

urlpatterns = [
    path('waist', WaistAPIView.as_view(), name='waist'),
    path('bodystats', BodyStatsAPIView.as_view(), name='bodystats'),
]
