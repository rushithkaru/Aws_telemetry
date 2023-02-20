
#include <Arduino.h>
#include <WiFiClientSecure.h>
#include <PubSubClient.h> 
#include "certs.hpp"

//TO DO add blocking (can add a new array with blocked ids read through a new Freertos task.)

void pubSubCheckConnect();
void msgReceived(char* topic, byte* payload, unsigned int length);


const int led1 = 2; // Pin of the LED (built in)
int blocks[3] = {0,0,0};

WiFiClientSecure wiFiClient;

PubSubClient pubSubClient(awsEndpoint, 8883, msgReceived, wiFiClient); 
void sendData(int deviceID, char *fakeData,int blocked);
void toggleLED(void * parameter);
void pauseDevice(byte* payload, unsigned int length);

void setup() {
  Serial.begin(115200); delay(50); Serial.println();
  
  Serial.printf("SDK version: %s\n", ESP.getSdkVersion());

  Serial.print("Connecting to "); Serial.print(ssid);
  WiFi.begin(ssid, password);
  WiFi.waitForConnectResult();
  Serial.print(", WiFi connected, IP address: "); Serial.println(WiFi.localIP());

  wiFiClient.setCACert(rootCA);
  wiFiClient.setCertificate(certificate_pem_crt);
  wiFiClient.setPrivateKey(private_pem_key);
  
  pinMode(led1, OUTPUT);
  xTaskCreate(
    toggleLED,    // Function that should be called
    "Toggle LED",   // Name of the task (for debugging)
    1000,            // Stack size (bytes)
    NULL,            // Parameter to pass
    1,               // Task priority
    NULL             // Task handle
  );

  

}

unsigned long lastPublish;
int msgCount;
int simulator = 0;
void loop() {

  pubSubCheckConnect();

   
   char fakeData[128];

  int lower = 1, upper = 6, count = 10;

  srand(time(0));
  
  int var1 = (rand() % (upper - lower + 1)) + lower;
  int var2 = (rand() % (upper - lower + 1)) + lower;
  int var3 = (rand() % (upper - lower + 1)) + lower;
  int var4 = (rand() % (upper - lower + 1)) + lower;
  int var5 = (rand() % (upper - lower + 1)) + lower;
  int var6 = (rand() % (upper - lower + 1)) + lower;
  int var7 = (rand() % (upper - lower + 1)) + lower;
  int var8 = (rand() % (upper - lower + 1)) + lower;
  int var9 = (rand() % (upper - lower + 1)) + lower;
  
  
  sprintf(fakeData,  "{\"device_id\": \"%s\",\"v1\": %d,\"v2\": %d,\"v3\": %d,\"v4\": %d,\"v5\": %d,\"v6\": %d,\"v7\": %d,\"v8\": %d,\"v9\": %d}", "3dssac-csd", var1, var2, var3, var4, var5, var6, var7, var8, var9);
 


  if (millis() - lastPublish > 10000) {
    if (simulator == 0){
      sendData(simulator,fakeData,blocks[0]);
      lastPublish = millis();
      simulator = 1;
    }
    else if (simulator == 1){
      sendData(simulator,fakeData,blocks[1]);
      lastPublish = millis();
      simulator = 2;
    }
    else{
      sendData(simulator,fakeData,blocks[2]);
      lastPublish = millis();
      simulator = 0;
    }
    
    
  }
}

void sendData(int deviceID, char *fakeData,int blocked){
      
      if (!blocked){
        char topic[20];
        sprintf(topic, "aws/device%d", deviceID+1);
        Serial.println(topic);
        boolean rc = pubSubClient.publish(topic, fakeData);
        Serial.print("Published, rc="); Serial.print( (rc ? "OK: " : "FAILED: ") );
        Serial.println(fakeData);
      }
      else{
        char device[20];
        sprintf(device, "device%d is blocked", deviceID);
        Serial.println("");
      }
      

      
}

void msgReceived(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message received on "); Serial.print(topic); Serial.print(": ");
  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
    //pauseDevice(payload,length);
  }
  Serial.println();
}

void pubSubCheckConnect() {
  if ( ! pubSubClient.connected()) {
    Serial.print("PubSubClient connecting to: "); Serial.print(awsEndpoint);
    while ( ! pubSubClient.connected()) {
      Serial.print(".");
      pubSubClient.connect("ESPthingXXXX");
      delay(1000);
    }
    Serial.println(" connected");
    pubSubClient.subscribe("aws/device1");
  }
  pubSubClient.loop();
}

void toggleLED(void * parameter){
  for(;;){ // infinite loop

    // Turn the LED on
    digitalWrite(led1, HIGH);

    // Pause the task for 500ms
    vTaskDelay(500 / portTICK_PERIOD_MS);

    // Turn the LED off
    digitalWrite(led1, LOW);

    // Pause the task again for 500ms
    vTaskDelay(500 / portTICK_PERIOD_MS);
  }
}

void pauseDevice(byte* payload, unsigned int length){
  String str = "";

  for (int i = 0; i < length; i++) {
    str += (char)payload[i];
  }
  if (str.equals("pause1")){
    Serial.println("Blocking device 1");
    blocks[0] = 1;
  }
  else if (str.equals("pause2")){
    Serial.println("Blocking device 2");
    blocks[1] = 1;
  }
  else if (str.equals("pause2")){
    Serial.println("Blocking device 3");
    blocks[2] = 2;
  }
  else{
    Serial.println("invalid message");
  }

}

