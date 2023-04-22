from rest_framework import serializers
from core.models import Measurement


class MeasurementSerializer(serializers.ModelSerializer):

    class Meta:
        model = Measurement
        fields = '__all__'
