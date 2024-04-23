from flask import Flask, request, jsonify
from get_json_from_prompt import get_json_from_prompt
import pandas as pd
from flask_cors import CORS
from get_prompt_from_habilities import get_prompt_from_habilities
import os

import json

app = Flask(__name__)
cors = CORS(app)


@app.route('/search', methods=['GET','POST'])
def buscar():
   data = request.get_json()
   print('data',data)
   prompt = data.get('prompt', '')
   print(prompt)
   file_path = os.path.abspath('Cursos_UR_Normalizados_completo.csv')
   dataset = pd.read_csv(file_path)
   
   # Llamada a tu función existente
   datos = get_json_from_prompt(prompt, dataset)

   return {"result": datos}
@app.route('/search2', methods=['GET', 'POST'])
def buscar2():
    data = request.get_json()
    print('data traida',data)
    selected = data.get('prompt', '')
    print('habilidades seleccionadas',selected)
    prompt = get_prompt_from_habilities(selected)
    dataset = pd.read_csv('Cursos_UR_Normalizados_completo.csv')
    # Llamada a tu función existente
    datos = get_json_from_prompt(prompt, dataset)

    return {"result": datos}


if __name__ == '__main__':
    app.run(debug=True)
