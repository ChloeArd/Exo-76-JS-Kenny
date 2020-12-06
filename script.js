
// Etape 1: Déplacement de Kenny en cliquant sur les inputs.
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


let bordure = document.getElementById('viewport') ;
let kenny = document.getElementById('kenny');

//Etape 2: Conditions pour empécher kenny de sortir des bordures.
let width = parseInt(bordure.style.width = 500 + "px")
if ( kenny === width ) {
    width = 0;
}



// Etape 3: Zone Rouge.
let zoneRouge = document.createElement('div');
zoneRouge.id = "zoneRouge";
zoneRouge.style.height = "50px";
zoneRouge.style.width = "50px";
zoneRouge.style.backgroundColor = "red";
zoneRouge.style.position = "absolute";
zoneRouge.style.bottom = "100px";
bordure.append(zoneRouge);


// Etape 4 et Etape 5: Message d'alerte en disant que kenny est mort et le replacer.
if( zoneRouge === parseInt(50 + "px")) {
    alert("Kenny est mort");
    kenny.style.top = 200 + 'px';
    kenny.style.left = 200 + 'px';
}

//Etape 6: Nombre de fois que kenny est mort.
let mort = document.createElement('p');
mort.innerHTML = "Mort: "
document.body.append(mort)


//Etape 7: Clavier pour déplacer kenny.
// key

