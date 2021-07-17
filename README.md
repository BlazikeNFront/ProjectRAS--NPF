# PROJECT RAS

ProjectRAS is IoT/WebApp project that  controls Recirculating Aquaculture System (RAS) enviroment and also allows user to do it via network.
Base of the project is nodeJS app (let's call it ProcessController) that is running on RASPBERRY PI. 
ProcessController checks RAS enviroment using sensors connected to raspberrys GPIO.
Then it sends data to webApp where user can get information about RAS state,  and also sends request to ProcessController to change that state.
In the result if request is in the correct format processControll will accept that change.

## SETUP


App is set for 2 water pumps and 2 air pumps. Secondary pumps are backups(if primaries for some reason fails)

## SENSORS AND PUMPS CONTROLLER

### Temperature sensor 
DS18B20 waterproof version, but it can be any other temperature sensor that fits you but it needs to communicate via 1-Wire protocol;
![DS18B20 sensor](relative/path/to/img.jpg?raw=true "DS18B20 waterproof sensor")

 ### Water level sensor 
 i'm using magnetic water level sensor, but any sensor that works on 0,1 communication will work. Note that sensor that rely on ultrasonic waves most likely will need diffrent breadboard setup , but the signal that they send in most cases will be the same as magnetic type sensors(0,1);
 ![Magnetic Water Level Sensor](relative/path/to/img.jpg?raw=true "Magnetic Water Level Sensor")

### PUMPS CONTROLLER
Since there are 4 pumps, we need at least 4 channel relay module. Any that allows alternating current   (of course if we are using that type of current) and **are OFF on defualt** will be good. 
 ![4 channel relay module](relative/path/to/img.jpg?raw=true "4 channel relay module")
 Inputs are in order like pumps( 1 === water Pump 1 ; 2=== water Pump 2; etc...);
 In ProcessController App every pump is defualt on 0, that type of setup prevents total system failure in case raspberry decide to die. But also that means cabels need diffrent arrangement in module. Which u can see in the above picture.


```
FrontEnd - VUE 3 / VUEX / VUE ROUTER
```
```
BackEnd - Firebase
```
