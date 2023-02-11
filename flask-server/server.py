from flask import Flask, request
from flask import jsonify
import random
app = Flask(__name__)
import boto3

dynamo_client = boto3.client('dynamodb')

getter = {'device_id':{'S':'3dssac-csd'},'current':{'N':'21'},'voltage':{'N':'32'}}

@app.route('/')
def index():
    return "This is the main page."

def createList(resp):
    cha = 'v'
    arr = []
    for i in range(9):
        arr.append(int(resp['v'+str(i+1)]['N']))
    return arr

@app.route('/get-items')
def get_items():
    resp = dynamo_client.get_item(TableName = 'esp32Data' , Key = {'device_id':{'S':'3dssac-csd'}})
    resp = resp["Item"]["payload"]["M"]
    resp = createList(resp)
    return jsonify(resp)


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
