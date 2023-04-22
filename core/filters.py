from django_filters.rest_framework import FilterSet
from core.models import Measurement


class MeasurementFilterSet(FilterSet):

    class Meta:
        model = Measurement
        fields = ['height', 'age', 'weight']
