def custom_sort_key(item):
  category = item[2].strip()
  categories_order = {'Introductorio': 0, 'Intermedio': 1, 'Avanzado': 2, 'Pregrado':3}
  return categories_order.get(category, len(categories_order))