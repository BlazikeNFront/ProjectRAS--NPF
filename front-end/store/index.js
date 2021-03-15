import { createStore } from 'vuex';
import openSocket from "socket.io-client";

const store = createStore({
  state() {
    return {
      token: null,
      RASInfo: {
        autoControl: null,
        currentProtocol: {
          dataInfo: null,
          state: null,
        },
        waterLevel: {
          textContent: "Water Level:",
          dataInfo: null,
          state: null,
        },
        temperature: {
          textContent: "Temperature",
          dataInfo: null,
        },
        pumps: {
        waterPump1:  {
                    textContent: "Water Pump 1 :",
                    dataInfo: null,
                    state: null,
                    name: "waterPump1",
                    requested:false,
                     },
          waterPump2: {
                   textContent: "Water Pump 2 :",
                   dataInfo: null,
                   state: true,
                  name: "waterPump2",
                 requested:false,
                  },
          airPump1: {
                  textContent: "Air Pump 1 :",
                  dataInfo: null,
                  state: null,
                  name: "airPump1",
                requested:false,
                  },
          airPump2: {
                  textContent: "Air Pump 2 :",
                  dataInfo: null,
                  state: null,
                   name: "airPump2",
                  requested:false,
                  },
      }
      },
      requestLogsData:null,
    }
    
  },
  
    mutations: {
        setToken(state, payload) {
          
          state.token = payload  
        },
        logout(state) {
            state.token = null;
      },
      setRasInfo(state, payload) {
       
        const {
          autoControl,
          currentProtocol,
          pumps,
          waterLevel,
          temperature,
        } = payload;
       
        state.RASInfo.autoControl = autoControl;
      
      if (currentProtocol === 0) {
        state.RASInfo.currentProtocol.dataInfo = "DEFAULT";
        state.RASInfo.currentProtocol.state = 0;
      } else {
        state.RASInfo.currentProtocol.dataInfo = "BACKUP!";
        state.RASInfo.currentProtocol.state = 1;
        }
      
      if (pumps.waterPump1 === true) {
        state.RASInfo.pumps.waterPump1.dataInfo = "ON";
        state.RASInfo.pumps.waterPump1.state = true;
      } else {
        state.RASInfo.pumps.waterPump1.dataInfo = "OFF";
        state.RASInfo.pumps.waterPump1.state = false;
      }
      
      if (pumps.waterPump2 === true) {
        state.RASInfo.pumps.waterPump2.dataInfo = "ON";
        state.RASInfo.pumps.waterPump2.state = true;
      } else {
        state.RASInfo.pumps.waterPump2.dataInfo = "OFF";
        state.RASInfo.pumps.waterPump2.state = false;
      }

      if (pumps.airPump1 === true) {
        state.RASInfo.pumps.airPump1.dataInfo = "ON";
        state.RASInfo.pumps.airPump1.state = true;
      } else {
        state.RASInfo.pumps.airPump1.dataInfo = "OFF";
        state.RASInfo.pumps.airPump1.state = false;
      }
      
      if (pumps.airPump2 === true) {
        state.RASInfo.pumps.airPump2.dataInfo = "ON";
        state.RASInfo.pumps.airPump2.state = true;
      } else {
        state.RASInfo.pumps.airPump2.dataInfo = "OFF";
        state.RASInfo.pumps.airPump2.state = false;
      }

      if (waterLevel === 1) {
        state.RASInfo.waterLevel.dataInfo = "OK";
        state.RASInfo.waterLevel.state = 1;
      } else {
        state.RASInfo.waterLevel.dataInfo = "UNDERLEVEL";
        state.RASInfo.waterLevel.state = 0;
      }
      temperature !== null
        ? (state.RASInfo.temperature.dataInfo = temperature +'°C')
          : (state.RASInfo.temperature.dataInfo = "NO DATA");
        for (let pump in state.RASInfo.pumps) {
          state.RASInfo.pumps[pump].requested = false;
        }
      },

      createSocketConnection(state, payload) {
        state.io = payload
      },
      
      toggleDevice(state, payload) {
        const pump = payload.name
        state.RASInfo.pumps[pump].state = payload.state
        state.RASInfo.pumps[pump].requested = true;
      },
      
      toggleAutoControl(state, payload) {
       
        state.RASInfo.autoControl = payload
        
      },

      setRequstLogData(state, payload) {
        state.requestLogsData = payload
      }

     
    },
    actions: {
       async setToken(context, payload) {
            try { 
                 const data = await fetch("https://project-ras.herokuapp.com/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userName: payload.userName,
                        password: payload.password
                    })
                })
                console.log(data.status)
                if(data.status !== 200) {
                 throw new Error("Authentication rejected");
                }
                
                 const dataJSON = await data.json();
                const token = dataJSON.token;
                
                context.commit('setToken', token)    
                
                } catch (err) {
                    const error = err;
                    throw error;
                }
      },
      
      logout(context) {
        context.commit('logout');
      },
     async fetchRasInfo(context) {
       try { 
         const rawData = await fetch("https://project-ras.herokuapp.com/data")
        const data = await rawData.json();
         context.commit('setRasInfo',data)
        }
        catch (err) {
           const error = new Error(err)
          throw error
        }
      },
      toggleDevice(context, payload) {   
        const payloadWithToken = {...payload};
        payloadWithToken.token = context.getters['getToken'];
       context.getters['getSocket'].emit("setRequest", payloadWithToken);
       context.commit('toggleDevice',payload)   
       
      },
      toggleAutoControl(context) {
       
        const payloadWithToken = {}
        payloadWithToken.autoControl = !context.getters['getAutoControl']
        payloadWithToken.token = context.getters['getToken'];
          context.getters['getSocket'].emit("setRequest", payloadWithToken);
       
          const changedAutoControl = payloadWithToken.autoControl;
          context.commit('toggleAutoControl',changedAutoControl)
          
       
       },

      createSocketConnection(context) {
        const io = openSocket("https://project-ras.herokuapp.com");
        context.commit('createSocketConnection',io)
      },
      handleSocketData(context, payload) {

        context.commit('setRasInfo',payload)
      },
      setListenerForSockerEvents(context) {
        const io = context.getters['getSocket'];
        io.on('currentState', (data) => {
          context.commit('setRasInfo',data)
        })
      },
     async setRequstLogData(context) {
       const rawData = await fetch('https://project-ras.herokuapp.com/requestLogData')
       const data = await rawData.json();
       context.commit('setRequstLogData',data)

      }


    },
    getters: {
      getToken(state) {
        
          return state.token
      },
      getRASInformation(state) {
          return state.RASInfo;
      },
      getAutoControl(state) {
        return state.RASInfo.autoControl
      },
      getSocket(state) {
       
        return state.io
      },
      getRequestLog(state) {
        return state.requestLogsData
      },
      getRequestedValue: (state) => (pump) => {
        return state.RASInfo.pumps[pump].requested
      }
    },
    
})


export default store;