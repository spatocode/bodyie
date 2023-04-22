from django.urls import path
from core.views import MeasurementAPIView

urlpatterns = [
    path('measurement', MeasurementAPIView.as_view(), name='measurement'),
]
