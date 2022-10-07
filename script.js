const $time = document.querySelector('.time'),
$date = document.querySelector('.date');


function digitalClock(){
    let f = new Date(),
    day = f.getDate(),
    mounth= f.getMonth(),
    year= f.getFullYear(),
    Dayweek = f.getDay();

    day = ('0' + day).slice(-2);
    mounth =('0' + mounth).slice(-2)

    let timeString = f.toLocaleTimeString();
    $time.innerHTML = timeString;
    
    let week = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let showweek = (week[Dayweek]);
    $date.innerHTML = `${year}-${mounth}-${day} ${showweek}`

}

setInterval(() => {
     digitalClock()
}, 1000)