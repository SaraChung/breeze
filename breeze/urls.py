from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
	url(r'^$', 'app.views.titleOfArticle', name='title_of_article'),
	url(r'^top/', 'app.views.topList', name='top_list'),
    # Examples:
    # url(r'^$', 'breeze.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
]
