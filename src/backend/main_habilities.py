#Toca tener ! python -m spacy download es_core_news_md
#y !pip install spacy_transformers

import pandas as pd
from get_json_from_prompt import get_json_from_prompt
from get_prompt_from_habilities import get_prompt_from_habilities

dataset = pd.read_csv('Cursos_UR_Normalizados_completo.csv')

habilidades_elegidas = [0,2,3]

prompt = get_prompt_from_habilities(habilidades_elegidas)
get_json_from_prompt(prompt,dataset)
