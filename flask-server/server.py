from flask import Flask, request
from flask import jsonify
import random
app = Flask(__name__)


@app.route('/')
def index():
    return "This is the main page."

@app.route('/get-items')
def get_items():
    return jsonify(get_items())


@app.route("/vals", methods=['GET', 'POST'])
def vals():
    """data = request.args.getlist('user', type=int)
    print(data)
    if len(data) > 5:
        data = data[-5:]
    print(data)"""
    data = [0,4,0,0,2,0,4,1,7,6]
    for i in range(10):
        data[i] = random.randint(0,7)
    return jsonify(data)

if __name__ == "__main__":
    app.run(host="localhost", port=8080, debug=True)
