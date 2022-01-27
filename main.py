from flask import Flask


app = Flask(__name__)

@app.route("/messages", methods=["GET"])
def get():
    return {"message":"GET all messages response from server"}

@app.route("/messages", methods=["POST"])
def create_message():
    return {"message":"POST request from client"}



if __name__ == "__main__":
    app.run(port=8080)
