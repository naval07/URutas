import pandas as pd
import spacy
from get_list_from_prompt import get_list_from_prompt
from get_route_from_list import get_route_from_list
from custom_sort import custom_sort_key
import json
import os


def get_json_from_prompt(prompt, dataset):
    nlp = spacy.load("es_core_news_sm")
    prompt = nlp(prompt)
    selected_courses = get_list_from_prompt(dataset, prompt, nlp)
    route = get_route_from_list(selected_courses, custom_sort_key)

    lista_de_diccionarios = []
    for curso in route:
        curso_dict = {
            "id": curso[0],
            "titulo": curso[1],
            "descripcion": curso[2],
            "area": curso[3]
        }
        lista_de_diccionarios.append(curso_dict)

    json_data = json.dumps(lista_de_diccionarios, ensure_ascii=False, indent=2)
    #ruta_archivo = "../src/catalogo.json"
    ruta_archivo = "../cursos.json"

    ruta_completa = os.path.abspath(ruta_archivo)
    print('RUTAA', ruta_completa)
    with open(ruta_completa, "w", encoding='utf-8') as json_file:
           json.dump(lista_de_diccionarios, json_file, ensure_ascii=False, indent=2)

    # print(json_data)
    # print('primero', json_data[0])
    json_data = '{' + json_data[1:len(json_data)-1] + '}'
    #print(json_data)
    return json_data