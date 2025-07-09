function setTime(){
    const now = new Date;
    const sec = 90+(now.getSeconds()*6);
    const min = 90+(now.getMinutes()*(6))
    const hour = 90 + ((now.getHours() % 12) * 30) + (now.getMinutes() / 60) * 30;
    // console.log(now.getSeconds(),sec)
    // console.log(now.getMinutes(),min)
    // console.log(now.getHours(),hour)
    document.getElementById("sec-box").style.transform=`rotate(${sec}deg)`;
    document.getElementById("min-box").style.transform=`rotate(${min}deg)`;
    document.getElementById("hour-box").style.transform=`rotate(${hour}deg)`;
}
setTime()
setInterval(setTime,1000)