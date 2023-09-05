function time() {
    const today= new Date();
    let h= today.getHours();
    let m= today.getMinutes();
    let s= today.getSeconds();
    m= cheackTime(m)
    s=cheackTime(s)
    document.getElementById("clock").innerHTML=h+":"+m+":"+s;
    setTimeout(time, 1000);
}
function cheackTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
}
time()