from flask import Flask, json, request, jsonify
import pandas as pd
from tensorflow.keras.models import load_model
import pickle
app = Flask(__name__)

@app.route("/get-prediction", methods=["POST"])
def get_prediction():
  data = request.get_json()
  data = {
    "category": data["category"],
    "subcategory": data["subcategory"],
    "backers": int(data["backers"]),
    "country": data["country"],
    "pledged": float(data["pledged"]),
    "goal": float(data["goal"])
  }
  print(data, flush=True)

  columns_file = open("../assets/columns.json", "r")
  columns = json.load(columns_file)

  df_data = {column: 0 for column in columns}
  df_data[f'country_{data["country"]}'] = 1
  df_data[f'category_{data["category"]}'] = 1
  df_data[f'subcategory_{data["subcategory"]}'] = 1
  df_data["backers"] = data["backers"]
  df_data["pledged"] = data["pledged"]
  df_data["goal"] = data["goal"]

  df = pd.DataFrame([df_data])

  scaler = pickle.load(open("../assets/scaler.pkl", "rb"))
  scaled_data = scaler.transform(df)

  model = load_model("../assets/model")
  predictions = model.predict(scaled_data)[0]
  predictions = [round(float(prediction * 100), 2) for prediction in predictions]

  category_file = open("../assets/categorical_keys.json", "r")
  categories = json.load(category_file)
  states = categories["state"]

  dict_predictions = {key: predictions[index] for key, index in states.items()}

  return jsonify(dict_predictions)  

if __name__ == "__main__":
  app.run(host="0.0.0.0", port=3000)