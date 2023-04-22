import os
import csv
from rest_framework.response import Response
from rest_framework.views import APIView
from core.filters import MeasurementFilterSet
from core.models import Measurement
from core.serializers import MeasurementSerializer


class MeasurementAPIView(APIView):
    filter_class = MeasurementFilterSet
    serializer_class = MeasurementSerializer

    def waist_filter(self, file, query_params):
        with open(file) as csv_file:
            csv_reader = csv.reader(csv_file, delimiter=',')
            line_count = 0
            filtered_row = []
            for row in csv_reader:
                if line_count != 0 and (row[0] == query_params.get('height') or row[1] == query_params.get('weight') or row[2] == query_params.get('age')):
                    filtered_row.append({
                        'height': row[0],
                        'weight': row[1],
                        'age': row[2],
                        'waist': row[3],
                    })
                else:
                    line_count = 1
            return filtered_row

    def get(self, request):
        filterset = self.filter_class(
            data=request.query_params,
            queryset=Measurement.objects.filter()
        )
        if len(filterset.qs) > 0:
            serializer = self.serializer_class(
                filterset.qs.values('age', 'height', 'weight', 'waist'),
                many=True
            )
            data = serializer.data
        else:
            data = self.waist_filter(f'{os.getcwd()}/measurements.csv', request.query_params)
        return Response(data)

    def post(self, request):
        try:
            Measurement.objects.get(**request.data)
        except Measurement.DoesNotExist:
            serializer = self.serializer_class(data=request.data)
            serializer.is_valid(raise_exception=True)
            serializer.save()
        return Response(status=200, data={"message": "Recorded successfuly"})
