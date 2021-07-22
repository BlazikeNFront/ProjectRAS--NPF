# PROJECT RAS

![RAS Schema](readMeImages/RASScheme.jpg?raw=true "RAS schema")

## APP IS STILL IN DEVELOPMENT !!! - in my case it works well, but that doesn't mean it is perfect(bugs may occure). Espacially because of enviromental variables (diffrent hosting provider, diffrent sensors/modules etc.). 

### It should be executed from app like  [ PM2 ](https://pm2.keymetrics.io/) -  (autostarts app on system start, or autorestart on crash)


ProjectRAS is IoT/WebApp project that  controls Recirculating Aquaculture System (RAS) enviroment, sends warning via phone network (3rd party API) and also allow user to remote control it via network. 
Base of the project is nodeJS app (let's call it ProcessController) that is running on RASPBERRY PI. 
ProcessController check RAS enviroment using sensors connected to raspberrys GPIO.
Then  sends data to webApp where user can get information about RAS state,  and also sends requests to ProcessController to change that state.
If request is in the correct format processControll will accept that change.

## LOGIC

App is set for 2 water pumps and 2 air pumps. Secondary pumps are backups(if main pumps for some reason fails). First air pumps goes into bioreactor, the other one should go directly into tank with animals.

CritTemp variable is temperature number , above it second air pump (direct tank air pumping) will initialize

Default protocol [normal Level - temperature beneath critTemp variable] - STATE -all pumps controllers on 0 state) initialize primary pumps ( first water pump and  1 air pump). 

Incorrect water level on water pump 1, temperature beneath critTemp - stop first water pump - init second water pump, send SMS message about malfunction;

Incorrect water level on water pump 2, temperature beneath critTemp - stop both pumps , initialize second air pump,send SMS message about malfunction;

Normal water level on any pump, temperature over critTemp - initialize second air pump,send SMS message about incorrect temperature;

This autocontrol will work as long as 'autoControl' variable (in process controller ) is true.
**Every remote action through Server or LAN connection sets autoControl to false**, but in can also be remotly turn ON again .








## SENSORS AND PUMPS CONTROLLER

### Temperature sensor 
DS18B20 waterproof version, but it can be any other temperature sensor that fit you but it need to communicate via 1-Wire protocol

![DS18B20 sensor](readMeImages/DS18B20.png?raw=true "DS18B20 waterproof sensor")

 ### Water level sensor 
 I'm using magnetic water level sensor, but any sensor that works on 0,1 communication will work. Note that sensor that rely on ultrasonic waves most likely will need diffrent breadboard setup , but the signal that they send in most cases will be the same as magnetic type sensors(0,1)
 
 ![Magnetic Water Level Sensor](readMeImages/waterLevelSensor.jpg?raw=true "Magnetic Water Level Sensor")

### PUMPS CONTROLLER
Since there are 4 pumps, we need at least 4 channels relay module. Any that allows alternating current   (of course if we are using that type of current) and **are OFF on defualt** will be good. 

 ![4 channel relay module](readMeImages/relay.jpg?raw=true "4 channel relay module")

 Inputs are in order like pumps( 1 === water Pump 1 ; 2=== water Pump 2; etc...);
 In ProcessController App every pump is defualt on 0, that type of setup prevents total system failure in case raspberry decide to die. But also that means cabels need diffrent arrangement in module. Which u can see in the above picture.
 
 **NOTE**
 In case you are using more powerful pumps, small relay (like in the picture) may not be able to handle currency. You should create  setup with electrical switchgear like in the picture below, that uses 4 channel module as middleware, to control others ('stronger') relays (that acutally activates pumps).
 
  ![](readMeImages/Box.jpg?raw=true "electrical switchgear setup")
 

## GPIO OUTPUT
![GPIO output](readMeImages/Pi%20Gpio%20setup.png?raw=true "Gpio scheme")
![GPIO output 2](readMeImages/Pi%20Setup%202.jpg?raw=true "Gpio scheme picture")


## Network
App on raspberry also work as server, so u can communicate with it through LAN connection - you just need to know LAN address of connected raspberry Pi.It allows same communication as server app, but it uses Websockets (socket.io) without intervals, which means that commincation via LAN network is  in real time. You can also connect from web (you need to know your global IP address and do PORT FORWARDING on router.In that case app should be running on reverse proxy (like Nginx) due to security reasons.

The problem is in most cases (even if you did correctly  port forwarding)  internet providers uses architecture that almost make it impossible to connect (internet providers uses router middlewares, so in order to connect they also need port forwarding to redirect all request to your router and second thing is that your global ip address is changing). In that case, for internet communication you need to deploy backEnd + dist(front-end build) folder files with usage of hosting provider. Raspberry app will send information to server and check for requests on every interval .
 


```
FrontEnd - VUE 3 / VUEX / VUE-APEX-CHARTS/SOCKET.IO
```

```
BackEnd - NODE/EXPRESS/MONGODB/SOCKET.IO
```
