# Aws_telemetry
(WIP)
Repo for storing my iot project

Using and esp32 as an IoT device that uploads data to the cloud. Using the MQTT protocol and an AWS IoT core rule to push the telemtry data to dynamoDB. 
For visualising the data I am using a flask app and the boto3 library to pull data from dynamodb. This connects to a React app.
So far everything works but I want to make clean up the UI and optimise.


![flow](https://user-images.githubusercontent.com/30048959/218290869-1a5877f9-344a-488f-babe-6cc64bf0318e.jpg)




<img width="1101" alt="Screen Shot 2023-02-12 at 6 49 35 pm" src="https://user-images.githubusercontent.com/30048959/218299361-5523a920-393d-420b-aed7-ce894eb9bb28.png">
