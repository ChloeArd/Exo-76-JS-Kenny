

document.getElementById('up').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.top);
    t = t - 10;
    document.getElementById('kenny').style.top = t + 'px';
});

document.getElementById('left').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.left);
    t = t - 10;
    document.getElementById('kenny').style.left = t + 'px';
});

document.getElementById('right').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.left);
    t = t + 10;
    document.getElementById('kenny').style.left = t + 'px';
});

document.getElementById('down').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.top);
    t = t + 10;
    document.getElementById('kenny').style.top = t + 'px';
});

let bordure = document.getElementById('viewport');
let kenny = document.getElementById('kenny');

if (kenny === bordure) {

}




let zoneRouge = document.createElement('div');
zoneRouge.id = "zoneRouge";
zoneRouge.style.height = "50px";
zoneRouge.style.width = "50px";
zoneRouge.style.backgroundColor = "red";
zoneRouge.style.position = "absolute";
zoneRouge.style.bottom = "100px";
bordure.append(zoneRouge);



if (kenny === zoneRouge) {
    alert("Kenny est mort");
    kenny.style.top = 200 + 'px';
    kenny.style.left = 200 + 'px';

}




keyup

