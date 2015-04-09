from django.shortcuts import render

def titleOfArticle(request):
	return render(request, 'title_of_article.html', {})

def topList(request):
	return render(request, 'top_list.html', {})
