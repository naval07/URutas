import re

def normalize_text(text):
    # Convertir texto a minúsculas y eliminar caracteres especiales
    text = text.lower()
    text = re.sub(r'[^\w\s]', '', text)
    # Normalizar caracteres con tilde
    text = re.sub(r'[áéíóúÁÉÍÓÚ]', lambda m: {'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U'}[m.group(0)], text)
    return text

def get_list_from_prompt(dataset, prompt, classifier):
    dataset["Título_original"] = dataset["Título"]
    dataset["Título"] = dataset["Título"].apply(normalize_text)
    dataset["proposito_norm_title"] = dataset["Título"] + " " + dataset["proposito_norm"]

    prop_list = dataset["proposito_norm_title"].tolist()

    results = classifier(prop_list, candidate_labels=[prompt])

    print("Resultados de classifier:", results)

    selected_courses = []
    other_courses = []

    for i in range(len(results)):
        if results[i]["scores"][0] > 0.9:
            selected_courses.append([results[i]["scores"][0], 
                                     dataset.loc[i, "Título_original"], 
                                     dataset.loc[i, "Nivel"],
                                     dataset.loc[i, "Propósito general del curso"],
                                     dataset.loc[i, "Área temática"],
                                     dataset.loc[i, "ruta_img"]])
        else:
            other_courses.append([results[i]["scores"][0], 
                                         dataset.loc[i, "Título_original"], 
                                         dataset.loc[i, "Nivel"],
                                         dataset.loc[i, "Propósito general del curso"],
                                         dataset.loc[i, "Área temática"],
                                         dataset.loc[i, "ruta_img"]])        
    
    if len(selected_courses) > 6:
        selected_courses.sort(key=lambda x: x[0], reverse=True)
        selected_courses = selected_courses[:6]

    elif len(selected_courses) <= 6:
        other_courses.sort(key=lambda x: x[0], reverse=True)
        selected_courses += other_courses[:6 - len(selected_courses)]

    return selected_courses