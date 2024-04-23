# Toca tener ! python -m spacy download es_core_news_md
# y !pip install spacy_transformers
from flask import Flask, request, jsonify
import pandas as pd
from get_json_from_prompt import get_json_from_prompt

app = Flask(__name__)

dataset = pd.read_csv('Cursos_UR_Normalizados_completo.csv')
prompt = 'ciberseguridad'

x = get_json_from_prompt(prompt, dataset)

