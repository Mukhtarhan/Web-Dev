from django.urls import path, re_path

from .views import *

urlpatterns = [

    # path('', index,name='index')
    path('categories/', cats_list),
    path('categories/<int:id>/', about_cat),
    path('products/', product_list),
    path('products/<int:id>/', about_product),
    path('categories/<int:category_id>/products/', get_category_products),
]