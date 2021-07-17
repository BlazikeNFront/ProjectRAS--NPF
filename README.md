# PROJECT RAS

ProjectRAS is IoT/WebApp project that  controls Recirculating Aquaculture System (RAS) enviroment and also allows user to do it via network.
Base of the project is nodeJS app (let's call it ProcessController) that is running on RASPBERRY PI. 
ProcessController checks RAS enviroment using sensors connected to raspberrys GPIO.
Then it sends data to webApp where user can get information about RAS state,  and also sends request to ProcessController to change that state.
In the result if request is in the correct format processControll will accept that change.

```
 SETUP
```

App is set for 2 water pumps and 2 air pumps. Secondary pumps are backups(if primaries for some reason fails)

```
 SENSORS
```
### Temperature sensor 
DS18B20 waterproof version, but it can be any other temperature sensor that fits you but it needs to communicate via 1-Wire protocol;
![DS18B20 sensor](relative/path/to/img.jpg?raw=true "DS18B20 waterproof sensor")

 ### Water level sensor 
 i'm using magnetic water level sensor, but any sensor that works on 0,1 communication will work. Note that sensor that rely on ultrasonic waves most likely will need diffrent breadboard setup , but the signal that they send in most cases will be the same as magnetic type sensors(0,1);



```
FrontEnd - VUE 3 / VUEX / VUE ROUTER
```
```
BackEnd - Firebase
```
