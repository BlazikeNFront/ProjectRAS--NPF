# PROJECT RAS

ProjectRAS is IoT/WebApp project that  controls Recirculating Aquaculture System (RAS) enviroment and also allows user to do it via network.
Base of the project is nodeJS app (let's call it ProcessController) that is running on RASPBERRY PI. 
ProcessController checks RAS enviroment using sensors connected to raspberrys GPIO.
Then it sends data to webApp where user can get information about RAS state,  and also sends request to ProcessController to change that state.
In the result if request is in the correct format processControll will accept that change.

```
## SETUP
```

App is set for 2 water pumps and 2 air pumps. Secondary pumps are backups(if primaries for some reason fails)

```
## SENSORS
```
Temperature sensor

```
FrontEnd - VUE 3 / VUEX / VUE ROUTER
```
```
BackEnd - Firebase
```
