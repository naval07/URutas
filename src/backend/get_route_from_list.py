def get_route_from_list(selected_courses,key):
  order_courses = sorted(selected_courses, key=key)
  for i, course in enumerate(order_courses):
    course[0] = i+1
    del course[2]
  return order_courses