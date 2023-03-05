# Aws_telemetry
(WIP)


Using an esp32 and a raspberry pi 4 as IoT devices, AWS IoT core as an MQTT broker this project is for me to practice sending and visualising telemetry data. 
For visualising the data I am using a flask app and the boto3 library to pull data from dynamodb. This then connects to a React app. The app also allows users to publish MQTT messages to the devices (example pauing the device remotely). I also plan to use AWS greengrass for the raspberry pi.



![flow](https://user-images.githubusercontent.com/30048959/218290869-1a5877f9-344a-488f-babe-6cc64bf0318e.jpg)



<img width="1289" alt="Screen Shot 2023-02-20 at 10 46 14 pm" src="https://user-images.githubusercontent.com/30048959/220109014-6402c45a-f16b-4e39-84de-c88d48730891.png">



<img width="1297" alt="Screen Shot 2023-03-05 at 1 59 06 pm" src="https://user-images.githubusercontent.com/30048959/222939356-ac3498cd-cd95-48ec-b16b-9eb84d7e7f21.png">


<img width="1234" alt="Screen Shot 2023-02-16 at 10 34 44 pm" src="https://user-images.githubusercontent.com/30048959/219363007-35bf53ae-bfff-4236-ac34-37887eb67b0c.png">
