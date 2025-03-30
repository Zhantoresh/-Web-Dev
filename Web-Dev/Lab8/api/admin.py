from django.contrib import admin
from .models import Category, Product

# Показывать продукты внутри страницы категории
class ProductInline(admin.TabularInline):
    model = Product
    extra = 0  # не показывать пустые пустые строки по умолчанию

# Админка для категорий с отображением продуктов
class CategoryAdmin(admin.ModelAdmin):
    inlines = [ProductInline]

# Регистрируем
admin.site.register(Category, CategoryAdmin)
admin.site.register(Product)
