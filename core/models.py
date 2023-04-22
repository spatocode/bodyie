from django.db import models

class Measurement(models.Model):
    height = models.DecimalField(decimal_places=2, max_digits=6) # cm
    age = models.DecimalField(decimal_places=2, max_digits=6)
    weight = models.DecimalField(decimal_places=2, max_digits=6) # kgs
    waist = models.DecimalField(decimal_places=2, max_digits=6) # cm

    class Meta:
        unique_together = ['height', 'age', 'weight', 'waist']
