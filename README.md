# IOT device manager (WIP)

## Description:

Implementation of a web based device manager for IOT devices. This project was for me to learn and a better understanding of the following: 



1. AWS IOT core.
2. Dynamo DB
3. Working with the MQTT protocol
4. React.JS
5. Flask

To simulate IOT devices I used an esp32 and a raspberry pi 4. For necessary functionality I used [FreeRTOS](https://www.freertos.org) and [this library](https://registry.platformio.org/libraries/knolleary/PubSubClient) to handle MQTT messaging. Using these and AWS IOT core as an MQTT broker the devices send telemetry data to dynamodb via a custom rule. Using a flask app an API was built that is connected to a react app for the varous features.

### Feature description

#### Telemetry and control.

Visualise device data updated in real time using the MQTT protocol. Pause the devices by clicking the pause button. This is done by publishing a MQTT message to the relevant device.

<img width="1438" alt="Screen Shot 2023-03-11 at 10 54 25 pm" src="https://user-images.githubusercontent.com/30048959/224482835-42192450-1344-443b-b1f8-66970130dab7.png">

##### Flow of the telemtry data

![flow](https://user-images.githubusercontent.com/30048959/218290869-1a5877f9-344a-488f-babe-6cc64bf0318e.jpg)

#### Device Information

Detailed view of the devices and configure the home page.

<img width="1297" alt="Screen Shot 2023-03-05 at 1 59 06 pm" src="https://user-images.githubusercontent.com/30048959/222939356-ac3498cd-cd95-48ec-b16b-9eb84d7e7f21.png">


#### Download report

Download a report of the signal data. Configure which devices and the date range for the report. This uses the FPDF python library to gnerate a PDF report by querying the relevant data.

<img width="1435" alt="Screen Shot 2023-03-11 at 10 53 10 pm" src="https://user-images.githubusercontent.com/30048959/224482777-e2d068af-9b20-4f73-81d7-187390bffc39.png">


#### Map

Visualise the geographical location of the devices on the map and quickly get the status of the device.

<img width="1234" alt="Screen Shot 2023-02-16 at 10 34 44 pm" src="https://user-images.githubusercontent.com/30048959/219363007-35bf53ae-bfff-4236-ac34-37887eb67b0c.png">





