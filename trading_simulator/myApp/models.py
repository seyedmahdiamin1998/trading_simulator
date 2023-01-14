from django.db import models

# Create your models here.

class OHLCTable(models.Model):
    name = models.CharField(max_length=25, null=False, blank=False, verbose_name="Name")
    date = models.CharField(max_length=100,null=False,blank=False,verbose_name="Date")
    open = models.IntegerField(null=False,blank=False)
    high = models.IntegerField(null=False,blank=False)
    low = models.IntegerField(null=False,blank=False)
    close = models.IntegerField(null=False,blank=False)
    volume = models.BigIntegerField(null=False,blank=False)

    class Meta:
        verbose_name = "OHLC"
        verbose_name_plural = "OHLC Data " 
        ordering =['date']
        
    def __str__(self):
        return self.name


class OrdersTable(models.Model):
    User = models.CharField(max_length=10, null=False, blank=False, verbose_name='User')
    Time = models.CharField(max_length=15, null=False, blank=False,verbose_name='Time' )
    order = models.BooleanField(blank=False, null=False)

    def __str__(self):
        return self.User

    class Meta:
        verbose_name = "Order"
        verbose_name_plural = "Orders " 
        ordering =['Time']
