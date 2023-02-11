import boto3

dynamo_client = boto3.client('dynamodb')

getter = {'device_id':{'S':'3dssac-csd'},'current':{'N':'21'},'voltage':{'N':'32'}}

if __name__ == "__main__":
    resp = dynamo_client.get_item(TableName = 'esp32Data' , Key = {'device_id':{'S':'3dssac-csd'}})
    print(resp)