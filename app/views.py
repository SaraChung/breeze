from django.shortcuts import render

def titleOfArticle(request):
	return render(request, 'app/title.html', {})

def topList(request):
	return render(request, 'app/toplist.html', {})