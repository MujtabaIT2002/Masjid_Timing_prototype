
let currentDate = localStorage.getItem('currentDate') || "2024-05-15";
let jummahTimings = JSON.parse(localStorage.getItem('jummahTimings')) || [
    { time: "12:00 PM", prayer: "Jummah 1" },
    { time: "1:00 PM", prayer: "Jummah 2" },
    { time: "2:00 PM", prayer: "Jummah 3" }
];
let prayerTimings = JSON.parse(localStorage.getItem('prayerTimings')) || {
    Fajr: { timing: "5:00 AM", aqamah: "5:15 AM" },
    Dhuhr: { timing: "12:30 PM", aqamah: "12:45 PM" },
    Asr: { timing: "4:00 PM", aqamah: "4:15 PM" },
    Maghrib: { timing: "6:30 PM", aqamah: "6:45 PM" },
    Isha: { timing: "8:00 PM", aqamah: "8:15 PM" }
};
let sunriseTiming = localStorage.getItem('sunriseTiming') || "6:00 AM"; 
let sunsetTiming = localStorage.getItem('sunsetTiming') || "7:30 PM"; 

function updateData() {
    currentDate = document.getElementById('current-date-input').value;

    jummahTimings[0].time = document.getElementById('jummah-timing-1').value;
    jummahTimings[1].time = document.getElementById('jummah-timing-2').value;
    jummahTimings[2].time = document.getElementById('jummah-timing-3').value;

    prayerTimings.Fajr.timing = document.getElementById('fajr-timing').value;
    prayerTimings.Fajr.aqamah = document.getElementById('fajr-aqamah').value;
    prayerTimings.Dhuhr.timing = document.getElementById('dhuhr-timing').value;
    prayerTimings.Dhuhr.aqamah = document.getElementById('dhuhr-aqamah').value;
    prayerTimings.Asr.timing = document.getElementById('asr-timing').value;
    prayerTimings.Asr.aqamah = document.getElementById('asr-aqamah').value;
    prayerTimings.Maghrib.timing = document.getElementById('maghrib-timing').value;
    prayerTimings.Maghrib.aqamah = document.getElementById('maghrib-aqamah').value;
    prayerTimings.Isha.timing = document.getElementById('isha-timing').value;
    prayerTimings.Isha.aqamah = document.getElementById('isha-aqamah').value;

    sunriseTiming = document.getElementById('sunrise-timing').value;
    sunsetTiming = document.getElementById('sunset-timing').value;

   
    localStorage.setItem('currentDate', currentDate);
    localStorage.setItem('jummahTimings', JSON.stringify(jummahTimings));
    localStorage.setItem('prayerTimings', JSON.stringify(prayerTimings));
    localStorage.setItem('sunriseTiming', sunriseTiming);
    localStorage.setItem('sunsetTiming', sunsetTiming);

    displayData();
}

function displayData() {
    document.getElementById('current-date').textContent = currentDate;

    jummahTimings.forEach((timing, index) => {
        document.getElementById(`jummah-timing-${index + 1}`).textContent = timing.time;
    });

    Object.keys(prayerTimings).forEach(prayer => {
        const timing = prayerTimings[prayer];
        document.getElementById(`${prayer.toLowerCase()}-timing`).textContent = timing.timing;
        document.getElementById(`${prayer.toLowerCase()}-aqamah`).textContent = timing.aqamah;
    });

    document.getElementById('sunrise-timing').textContent = sunriseTiming;
    document.getElementById('sunset-timing').textContent = sunsetTiming;
}


displayData();
