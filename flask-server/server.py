from flask import Flask, request
from flask import jsonify
import random
app = Flask(__name__)
import boto3
from awscrt import io, mqtt, auth, http
from awsiot import mqtt_connection_builder
import time as t
import json
from Device import Device

# Define ENDPOINT, CLIENT_ID, PATH_TO_CERTIFICATE, PATH_TO_PRIVATE_KEY, PATH_TO_AMAZON_ROOT_CA_1, MESSAGE, TOPIC, and RANGE
ENDPOINT = "a38xfqb9loacgl-ats.iot.ap-south-1.amazonaws.com"
CLIENT_ID = "esp32"
PATH_TO_CERTIFICATE = "certs/device.pem.crt"
PATH_TO_PRIVATE_KEY = "certs/private.pem.key"
PATH_TO_AMAZON_ROOT_CA_1 = "certs/root.pem"
MESSAGE = "Hello World"
TOPIC = "aws/pause"
RANGE = 20
event_loop_group = io.EventLoopGroup(1)
host_resolver = io.DefaultHostResolver(event_loop_group)
client_bootstrap = io.ClientBootstrap(event_loop_group, host_resolver)
mqtt_connection = mqtt_connection_builder.mtls_from_path(
            endpoint=ENDPOINT,
            cert_filepath=PATH_TO_CERTIFICATE,
            pri_key_filepath=PATH_TO_PRIVATE_KEY,
            client_bootstrap=client_bootstrap,
            ca_filepath=PATH_TO_AMAZON_ROOT_CA_1,
            client_id=CLIENT_ID,
            clean_session=False,
            keep_alive_secs=6
            )

dynamo_client = boto3.client('dynamodb')
connect_future = mqtt_connection.connect()
connect_future.result()


@app.route('/')
def index():
    return "This is the main page."

#helper
def createList(resp):
    cha = 'v'
    arr = []
    for i in range(9):
        arr.append(int(resp['v'+str(i+1)]['N']))
    return arr

#get data from dynamodb for device 1
@app.route('/get-items',methods=['GET', 'POST'])
def get_items():
    req = request.get_json()
    print(req)
    
    if req == 1:
        tbl =  'esp32Data'    
    elif req == 2:
        tbl = 'device2'
    else:
        tbl = 'device3'
    resp = dynamo_client.get_item(TableName = tbl , Key = {'device_id':{'S':'3dssac-csd'}})
    resp = resp["Item"]["payload"]["M"]
    resp = createList(resp)
    return jsonify(resp)

#used for testing
@app.route("/vals", methods=['GET', 'POST'])
def vals():
    data = [0,4,0,0,2,0,4,1,7,6]
    for i in range(10):
        data[i] = random.randint(0,7)
    return jsonify(data)

@app.route("/pause", methods=['GET', 'POST'])
def pause():
    req = request.get_json()
    data = "{}{}".format("pause",req)
    message = {"message" : data}
    mqtt_connection.publish(topic=TOPIC, payload=json.dumps(message), qos=mqtt.QoS.AT_LEAST_ONCE)
    print("Published: '" + json.dumps(message) + "' to the topic: " + "'test/testing'")
    return "pause page"

@app.route("/positions", methods=['GET', 'POST'])  
def get_mapdata():
    coordinate_list = [(-37.082617921767526, 145.36886101577723), (-38.23601914446231, 145.5899196436864), (-37.05760797882527, 145.96312240240616), (-38.282076168889936, 145.30986025535735), (-37.0823056963003, 145.77303272504085), (-37.47165750538337, 145.1517523704385), (-38.37111685332148, 144.6222362123161), (-38.06514681076868, 144.62594073938924), (-38.14984519717465, 145.0298691014988), (-38.07835452793659, 145.20644663175118)]


    lat_long_dict = [{'latitude': lat, 'longitude': long} for lat, long in coordinate_list]


    # return list of dictionaries as a JSON response
    return jsonify(lat_long_dict)

def creat_device():
    d1 = Device(1,1,1,1)
    d2 = Device(2,0,0,1)
    d3 = Device(3,0,0,1)
    d4 = Device(4,1,0,0)
    d5 = Device(5,1,1,0)
    d6 = Device(6,1,0,0)
    d7 = Device(7,0,0,0)
    d8 = Device(8,0,0,0)
    d9 = Device(9,1,1,0)
    d10 = Device(10,1,0,0)

    devices = [d1.toJSON(),d2.toJSON(),d3.toJSON(),d4.toJSON(),d5.toJSON(),d6.toJSON(),d7.toJSON(),d8.toJSON(),d9.toJSON(),d10.toJSON()]
    return devices


@app.route("/devices",methods=['GET'])
def send_devices():
    return jsonify(creat_device())


if __name__ == "__main__":
    app.run(host="localhost", port=8080, debug=True)
