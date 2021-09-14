const timer = (deadline) => {
    const countItems = document.querySelectorAll('.count');
    let timerDays = [], timerHours = [], timerMinutes = [], timerSeconds = [];


    countItems.forEach((item) => {
        if (item.classList.contains('count_1')) {
            timerDays.push(item);
        } else if (item.classList.contains('count_2')) {
            timerHours.push(item);
        } else if (item.classList.contains('count_3')) {
            timerMinutes.push(item);
        } else if (item.classList.contains('count_4')) {
            timerSeconds.push(item);
        }
    });

    function getTimeRemaining() {
		const dateStop = new Date(deadline).getTime();
		const dateNow = new Date().getTime();
		const timeRemaining = (dateStop - dateNow) / 1000;
		const seconds = Math.floor(timeRemaining % 60);
		const minutes = Math.floor((timeRemaining / 60) % 60);
		const hours = Math.floor(timeRemaining / 60 / 60) % 24;
		const days = Math.floor(timeRemaining / 60 / 60 / 24);

		return { timeRemaining, days, hours, minutes, seconds };
	}

    const timerId = setInterval(() => {
		const timer = getTimeRemaining();

		if (timer.timeRemaining <= 0) {
			clearInterval(timerId);
			timer.days = 0;
			timer.hours = 0;
			timer.minutes = 0;
			timer.seconds = 0;
		}
        timerDays.forEach(item => {
            let timerDay = item.querySelector('.count_1>span');
            if (timer.days < 10) {
                timerDay.textContent = `0${timer.days}`;
            } else {
                timerDay.textContent = timer.days;
            }
        });
		
        timerHours.forEach(item => {
            let timerHour = item.querySelector('.count_2>span');
            if (timer.hours < 10) {
                timerHour.textContent = `0${timer.hours}`;
            } else {
                timerHour.textContent = timer.hours;
            }
        });
		timerMinutes.forEach(item => {
            let timerMinute = item.querySelector('.count_3>span');
            if (timer.minutes < 10) {
                timerMinute.textContent = `0${timer.minutes}`;
            } else {
                timerMinute.textContent = timer.minutes;
            }
        });
		
        timerSeconds.forEach(item => {
            let timerSecond = item.querySelector('.count_4>span');
            if (timer.seconds < 10) {
                timerSecond.textContent = `0${timer.seconds}`;
            } else {
                timerSecond.textContent = timer.seconds;
            }
        });
		
	});
};

export default timer;