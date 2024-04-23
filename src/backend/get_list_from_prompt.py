def get_list_from_prompt(dataset,prompt,nlp):
  scores = []
  selected_courses = []
  for i in range(len(dataset)):
    descr = dataset.loc[i, 'proposito_norm']
    score_curso = nlp(descr).similarity(prompt) #acá se hace la comparación de similitud

    scores.append([i,score_curso])

    
    if score_curso > 0.7:
      selected_courses.append([score_curso, dataset.loc[i, "Título"], dataset.loc[i, "Nivel"], dataset.loc[i, "Resultados de aprendizaje esperados"],dataset.loc[i, "Área temática"]])

  if len(selected_courses) > 6:
    sorted_tuples = sorted(selected_courses, key=lambda x: x[0], reverse=True)
    selected_courses = sorted_tuples[:5]
    
  elif len(selected_courses) <= 5:
    selected_courses = []
    sorted_tuples = sorted(scores, key=lambda x: x[1], reverse=True)
    selected_courses_noinfo = sorted_tuples[:5]
    for course in selected_courses_noinfo:
      i = course[0]
      score_curso = course[1]
      selected_courses.append([score_curso, dataset.loc[i, "Título"], dataset.loc[i, "Nivel"], dataset.loc[i, "Resultados de aprendizaje esperados"], dataset.loc[i, "Área temática"]])
  return selected_courses