from django.db import models

# Create your models here.
from django.db import models


class Restaurant(models.Model):
	business = models.CharField(max_length = 60)
	image = models.CharField(max_length=250)

	def __str__(self):
		return self.title,self.image