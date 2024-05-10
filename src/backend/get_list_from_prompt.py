"""
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
"""
def get_list_from_prompt(dataset, prompt, classifier):
    dataset["proposito_norm_title"] = dataset["Título"] + " " + dataset["proposito_norm"]
    prop_list = dataset["proposito_norm_title"].tolist()
    results = classifier(prop_list, candidate_labels=[prompt])

    print("Resultados de classifier:", results)

    selected_courses = []
    for i in range(len(results)):
        if results[i]["scores"][0] > 0.8:
            selected_courses.append([i, 
                                     dataset.loc[i, "Título"], 
                                     dataset.loc[i, "Nivel"],
                                     dataset.loc[i, "Resultados de aprendizaje esperados"],
                                     dataset.loc[i, "Área temática"]])
            
    # Aplicar la lógica para seleccionar los cursos
    if len(selected_courses) > 6:
        # Ordenar por el score y seleccionar los primeros 5
        selected_courses.sort(key=lambda x: x[0], reverse=True)
        selected_courses = selected_courses[:6]

    return selected_courses