/
#include <Arduino.h>
#include <WiFiClientSecure.h>
#include <PubSubClient.h> // install with Library Manager, I used v2.6.0
#include "certs.hpp"

void pubSubCheckConnect();
void msgReceived(char* topic, byte* payload, unsigned int length);





WiFiClientSecure wiFiClient;
void msgReceived(char* topic, byte* payload, unsigned int len);
PubSubClient pubSubClient(awsEndpoint, 8883, msgReceived, wiFiClient); 

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
}

unsigned long lastPublish;
int msgCount;

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
  boolean rc = pubSubClient.publish("aws/outTopic", fakeData);
    Serial.print("Published, rc="); Serial.print( (rc ? "OK: " : "FAILED: ") );
    Serial.println(fakeData);
    lastPublish = millis();
    
  }
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