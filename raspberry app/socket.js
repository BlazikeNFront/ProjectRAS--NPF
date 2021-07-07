






let io;
module.exports = {
	init:(httpServer) => {
		io = require('socket.io')(httpServer,{
			cors:{
				origin:'*',
				methods:['GET','POST']
				}
			});
		
	
		return io;
	},
	getIo:() => {
		if(!io) {
			throw new Error('SOCKET IN NOT INITIALIZED')
		}
		return io
		
		}
	}
   /*handleSocket(){
        const socket = io.getIo();
        socket.on('connection',()=>{
            console.log('client connected');
            socket.on('sda',(data)=>{
                
               // this.isAllowedToControl = false;
                
                if(data === 'waterPump1'){
                    data.state === false ? relayModule.initWaterPump1() : relayModule.stopWaterPump1();
                    }
                if(data === 'waterPump2'){
                    data.state === false ? relayModule.initWaterPump2() : relayModule.stopWaterPump2();
                    }
                if(data === 'airPump1'){
                    data.state === false ? relayModule.initAirPump1() : relayModule.stopAirPump1();
                    }
                if(data === 'airPump2'){
                    data.state === false ? relayModule.initAirPump2() : relayModule.stopAirPump2();
                    }
                
                })
            })
        }*/
