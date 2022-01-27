from flask import Flask
from flask_httpauth import HTTPBasicAuth

app = Flask(__name__)
auth = HTTPBasicAuth()

@app.route("/messages", methods=["GET"])
@auth.login_required
def get():
    return {"message":"GET all messages response from server"}


@auth.verify_password
def authenticate(username, password):
    if username and password:
        if username != 'halima' or password != 'password':
            return False
        else:
            return True
    return False


if __name__ == "__main__":
    app.run()
