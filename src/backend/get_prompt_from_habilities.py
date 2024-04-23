def get_prompt_from_habilities(chosen_habilities):

  habilities_data = [[0,'Pensamiento Analítico e Innovación'],
                   [1,'Aprendizaje Activo y Estrategias de Aprendizaje'],
                   [2,'Resolución de Problemas Complejos'],
                   [3,'Pensamiento Crítico y Análisis'],
                   [4,'Creatividad, Originalidad e Iniciativa'],
                   [5,'Liderazgo e Influencia Social'],
                   [6,'Uso, Seguimiento y Control de la Tecnología'],
                   [7,'Diseño y Programación de Tecnología'],
                   [8,'Resiliencia, Tolerancia al Estrés y Flexibilidad'],
                   [9,'Razonamiento, Resolución De Problemas e Ideación']]
  
  prompt_habilities = ''
  for i in chosen_habilities:
    for j in habilities_data:
      if i == j[0]:
        prompt_habilities += ' '+j[1]

  return prompt_habilities