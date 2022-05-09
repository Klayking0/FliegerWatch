setInterval(() => {
	d = new Date(); //object of date()
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
	ms = d.getMilliseconds();
	hr_rotation = 30 * hr; //converting current time
	min_rotation = 6 * min;
	sec_rotation = 6 * sec;
	ms_rotation = ms / 166.666667;

	hour.style.transform = `rotate(${(hr_rotation)+(min_rotation/12)+(sec_rotation/720)}deg)`;
	minute.style.transform = `rotate(${(min_rotation)+(sec_rotation/60)+(ms_rotation/166.666667)}deg)`;
	second.style.transform = `rotate(${(sec_rotation)+(ms_rotation)}deg)`;
	
	//Day-night mode toggle
	const nightbtn = document.getElementById('nightbtn');
	nightbtn.addEventListener('click', function onClick(event) {
	document.body.style.backgroundColor = 'black';
	document.getElementById('clockContainer').style.backgroundImage="url(img/flieger_b/night/watch.png)";
	document.getElementById('hour').style.backgroundImage="url(img/flieger_b/night/hours.png)";
	document.getElementById('minute').style.backgroundImage="url(img/flieger_b/night/minutes.png)";
	document.getElementById('second').style.backgroundImage="url(img/flieger_b/night/seconds.png)";
	});
	const daybtn = document.getElementById('daybtn');
	daybtn.addEventListener('click', function onClick(event) {
	document.body.style.backgroundColor = 'white';
	document.getElementById('clockContainer').style.backgroundImage="url(img/flieger_b/watch.png)";
	document.getElementById('hour').style.backgroundImage="url(img/flieger_b/hours.png)";
	document.getElementById('minute').style.backgroundImage="url(img/flieger_b/minutes.png)";
	document.getElementById('second').style.backgroundImage="url(img/flieger_b/seconds.png)";
	});
}, 166.66667);

