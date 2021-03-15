
const getDateValues = ()=>{
	const date = new Date;
	const month = date.getMonth();
	const day = date.getDate();
	const hour = date.getHours();
	
	const obj = {
		month,
		day,
		hour,
		}
		return obj
	}

module.exports = getDateValues;
