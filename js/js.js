function rotateClockHands() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourRotation = 360 * (hours / 12) + 90 + (30 * (minutes / 60));
    const minuteRotation = 360 * (minutes / 60) + 90;
    const secondRotation = 360 * (seconds / 60) + 90;

    document.querySelector('.hour').style.transform = `rotate(${hourRotation}deg)`;
    document.querySelector('.min').style.transform = `rotate(${minuteRotation}deg)`;
    document.querySelector('.sec').style.transform = `rotate(${secondRotation}deg)`;
}

setInterval(rotateClockHands, 1000);
rotateClockHands(); // يتم استدعاء هذه الدالة لتحديث العقارب عند تحميل الصفحة