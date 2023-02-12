# Aws_telemetry
Repo for storing my iot project

Using and esp32 as an IoT device that uploads data to the cloud. Using the MQTT protocol and an AWS IoT core rule to push the telemtry data to dynamoDB. 
For visualising the data I am using a flask app and the boto3 library to pull data from dynamodb. This connects to a React app.
So far everything works but I want to make clean up the UI and optimise.


![flow](https://user-images.githubusercontent.com/30048959/218290731-e545f2cb-e6d5-4f8c-86eb-d0f2ec707990.png)


<img width="543" alt="Screen Shot 2023-02-12 at 1 56 22 pm" src="https://user-images.githubusercontent.com/30048959/218290380-9bd9fd7e-b4cb-4dc6-948a-2ecea436f820.png">
