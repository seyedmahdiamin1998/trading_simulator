from django.shortcuts import render

# Create your views here.
def tradnigSimualtorView(request):
    context = {}
    return render(request,'trading_simulator.html',context=context)
