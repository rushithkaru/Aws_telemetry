
#include <Arduino.h>
#include <WiFiClientSecure.h>
#include <PubSubClient.h> 
#include "certs.hpp"

//TO DO add blocking (can add a new array with blocked ids read through a new Freertos task.)

void pubSubCheckConnect();
void msgReceived(char* topic, byte* payload, unsigned int length);


const int led1 = 2; // Pin of the LED


WiFiClientSecure wiFiClient;
void msgReceived(char* topic, byte* payload, unsigned int len);
PubSubClient pubSubClient(awsEndpoint, 8883, msgReceived, wiFiClient); 
boolean sendData(int deviceID, char *fakeData);
void toggleLED(void * parameter);

void setup() {
  Serial.begin(115200); delay(50); Serial.println();
  Serial.println("ESP32 AWS IoT Example");
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
      sendData(simulator,fakeData,0);
      lastPublish = millis();
      simulator = 1;
    }
    else if (simulator == 1){
      sendData(simulator,fakeData,0);
      lastPublish = millis();
      simulator = 2;
    }
    else{
      sendData(simulator,fakeData,0);
      lastPublish = millis();
      simulator = 0;
    }
    
    
  }
}

boolean sendData(int deviceID, char *fakeData,int blocked){
      boolean rc = pubSubClient.publish("aws/device1", fakeData);
      Serial.print("Published, rc="); Serial.print( (rc ? "OK: " : "FAILED: ") );
      Serial.println(fakeData);

      return rc ? true : false;
}

void msgReceived(char* topic, byte* payload, unsigned int length) {
  Serial.print("Message received on "); Serial.print(topic); Serial.print(": ");
  for (int i = 0; i < length; i++) {
    Serial.print((char)payload[i]);
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
    pubSubClient.subscribe("aws/pause");
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