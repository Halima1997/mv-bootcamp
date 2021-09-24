from flask import Flask
import json

app = Flask(__name__)

@app.route("/")

def restaurants():
    with open('./restaurants.json', 'rU') as file:
        json_data = json.loads(file)
        return json_data

if __name__ == '__main__':
    app.run(port=8080)
