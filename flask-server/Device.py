#Class for device data
import json
class Device:
    def __init__(self,id,device,greengrass,homepage) -> None:
        self.id = id
        self.device = device
        self.greengrass = greengrass
        self.homepage = homepage
        
    def toJSON(self):
        return json.dumps(self, default=lambda o: o.__dict__,sort_keys=True, indent=4)