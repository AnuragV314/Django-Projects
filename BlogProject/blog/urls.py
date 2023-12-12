from django.urls import path
from . import views
from django.contrib.sitemaps.views import sitemap
from .sitemaps import PostSiteMap

from .feeds import LatestPostsFeed


sitemaps = {
    "posts": PostSiteMap,
}


urlpatterns = [
    path('', views.PostList.as_view(), name='home'),
    path('<slug:slug>/', views.post_detail, name='post_detail'),
    path("sitemap.xml", sitemap, {"sitemaps": sitemaps}, name="sitemap"),

    path("feed/rss", LatestPostsFeed(), name="post_feed"),
]