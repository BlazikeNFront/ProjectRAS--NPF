
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
    },

    emitCurrentState:(state,socket)=>{
         this.lastState = state;
    
         state.autoControl = this.autoControl;
         socket.emit('currentState',state);
         }
	}
 