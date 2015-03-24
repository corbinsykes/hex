window.onload = function() {

	function updateTime() {
		var currentDate = new Date();


				currentHour = ('0' + currentDate.getHours()).slice(-2);
				currentMinute = ('0' + currentDate.getMinutes()).slice(-2);
				currentSecond = ('0' + currentDate.getSeconds()).slice(-2);
				currentTime = currentHour + ":" + currentMinute + ":" + currentSecond;

				currentHourHex = Math.round(currentHour*10.67).toString(16);
				currentMinuteHex = Math.round(currentMinute*4.267).toString(16);
				currentSecondHex = Math.round(currentSecond*4.267).toString(16);
				currentTimeHex = currentHourHex + currentMinuteHex + currentSecondHex;

				londonHour =  parseInt(currentHour) + 4;
				if (londonHour == "24") {
					londonHour = "00";
				}

				if (londonHour > "24") {
					londonHour = parseInt(londonHour) - 24;
				}

				londonHourHex = Math.round(londonHour*10.67).toString(16);
				londonTime = londonHour + ":" + currentMinute + ":" + currentSecond;
				londonTimeHex = londonHourHex + currentMinuteHex + currentSecondHex;


				if (currentHourHex == "0") {
					currentHourHex = "00";
				}
				if (currentMinuteHex == "0") {
					currentMinuteHex = "00";
				}
				if (currentSecondHex == "0") {
					currentSecondHex = "00";
				}



				console.log(londonHour);

		document.getElementById('current-time').innerHTML = currentTime;
		document.getElementById('current-hex').innerHTML = "#" + currentTimeHex;

		document.getElementById('london-time').innerHTML = londonTime;
		document.getElementById('london-hex').innerHTML = "#" + londonTimeHex;

		document.getElementById('current-time').style.background = "#" + currentTimeHex;
		document.getElementById('london-time').style.background = "#" + londonTimeHex;
	}

	setInterval(updateTime, 1000);
};