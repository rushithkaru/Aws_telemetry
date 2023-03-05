# Aws_telemetry
(WIP)
Repo for storing my iot project

Using and esp32 as an IoT device that uploads data to the cloud. Using the MQTT protocol and an AWS IoT core rule to push the telemtry data to dynamoDB. 
For visualising the data I am using a flask app and the boto3 library to pull data from dynamodb. This connects to a React app.
So far everything works but I want to make clean up the UI and optimise.


![flow](https://user-images.githubusercontent.com/30048959/218290869-1a5877f9-344a-488f-babe-6cc64bf0318e.jpg)



<img width="1289" alt="Screen Shot 2023-02-20 at 10 46 14 pm" src="https://user-images.githubusercontent.com/30048959/220109014-6402c45a-f16b-4e39-84de-c88d48730891.png">



<img width="1297" alt="Screen Shot 2023-03-05 at 1 59 06 pm" src="https://user-images.githubusercontent.com/30048959/222939356-ac3498cd-cd95-48ec-b16b-9eb84d7e7f21.png">


<img width="1234" alt="Screen Shot 2023-02-16 at 10 34 44 pm" src="https://user-images.githubusercontent.com/30048959/219363007-35bf53ae-bfff-4236-ac34-37887eb67b0c.png">
