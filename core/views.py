from rest_framework.response import Response
from rest_framework.views import APIView
from core.serializers import WaistSerializer, BodyStatsSerializer


class WaistAPIView(APIView):
    def post(self, request):
        serializer = WaistSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class BodyStatsAPIView(APIView):
    def post(self, request):
        serializer = BodyStatsSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
