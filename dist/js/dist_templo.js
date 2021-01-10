'use strict';

var body = $('body').html();
var elementosTemplo = [
    {
    	'id': 'vm',
    	'coords':  [130,55,180,90],
    	'name': 'Venerable Maestro'
    },
    {
    	'id':'sec',
    	'coords':  [45,85,85,110],
    	'name': 'Secetario'
    },
    {
    	'id':'ora',
    	'coords':  [225,85,265,110],
    	'name': 'Orador'
    },
    {
        'id':'hosp',
    	'coords':  [40,160,80,200],
    	'name': 'Hospitalario'
    },
    {
        'id':'exp',
    	'coords':  [90,160,130,200],
    	'name': 'Experto'
    },
    {
        'id':'mc',
    	'coords': [175,160,215,200],
    	'name': 'Mtro Ceremonias'
    },
    {
        'id':'tes',
    	'coords': [225,160,265,200],
    	'name': 'Tesorero'
    },
    {
        'id':'segVig',
    	'coords':  [230,265,255,310],
    	'name': 'Seg Vig'
    },
    {
        'id':'primVig',
    	'coords': [45,435,100,465],
    	'name': 'Prim Vig'
    },
    {
        'id':'guard',
    	'coords': [135,425,175,465],
    	'name': 'Guarda Templo'
    },
    {
        'id':'ara',
    	'coords':  [127,123,180,150],
    	'name': 'Ara'
    },
    {
        'id':'sab',
    	'coords': [185,235,200,260],
    	'name': 'Sabiduría'
    },
    {
        'id':'fza',
    	'coords': [115,300,130,330],
    	'name': 'Fuerza'
    },
    {
        'id':'bllza',
    	'coords': [185,300,200,330],
    	'name': 'Belleza'
    },
    {
        'id':'pav',
    	'coords': [135,255,180,330],
    	'name': 'Pavimento Mosaico'
    },
    {
        'id':'or',
    	'coords': [135,0,170,13],
    	'name': 'Oriente'
    },
    {
        'id':'occ',
    	'coords': [140,485,175,495],
    	'name': 'Occidente'
    },
    {
        'id':'sept',
    	'coords': [6,250,18,280],
    	'name': 'Septentrión'
    },
    {
        'id':'med',
    	'coords': [288,250,300,280],
    	'name': 'Mediodía'
    },
    {
        'id':'pb',
    	'coords': [110,135,120,150],
    	'name': 'Piedra Bruta'
    },
    {
        'id':'pc',
    	'coords': [185,135,200,150],
    	'name': 'Piedra Cúbica'
    },
];
 
$(function() {
    let grado = sessionStorage.getItem("grado");
    let hashGrado = CryptoJS.SHA1(grado).toString();;
    if(hashGrado != '356a192b7913b04c54574d18c28d46e6395428ab'){
        $('body').html('');
        setTimeout(function(){
            alert('¡CUIDADO!¡NO ES DE TU GRADO!');
            window.location.href='login.html';
        }, 300);
    }
    else{
        $('body').html(body);
        initDistTemplo();
    }
    
    $('#imgDistro').click((e) => {
        let offset = $('#imgDistro').offset();
        let x = e.pageX - offset.left;
        let y = e.pageY - offset.top;
        console.log(x + ", " + y);
        let elemento = elementosTemplo.filter(el => el.coords[0] <= x && x <= el.coords[2] && el.coords[1] <= y && y <= el.coords[3])[0];
        let btnSel = $('.ui.elemento.button.active');
        $(btnSel).removeClass('secondary inverted red green active');
        if(elemento){
            let idSel = $(btnSel).data('value');
            if(elemento.id === idSel) {
                console.log("¡Muy bien!");
                $(btnSel).addClass('green');
            }
            else{
                console.log("Error");
                $(btnSel).addClass('red');
            }
        }
        else{
            console.log("Error");
            $(btnSel).addClass('red');
        }
    });

    $('.elemento').click(function() {
        $('.elemento.ui.red.button').removeClass('red').addClass('inverted secondary');
        $('.elemento.ui.secondary.inverted.button').removeClass('active');
        $(this).addClass('active');
    });
});

function logout(){
    sessionStorage.removeItem('grado');
    sessionStorage.removeItem('persLogin');
    window.location.href='login.html';
}

function initDistTemplo(){
    $('#elementosTemplo-izq, #elementosTemplo-der').html('');
    shuffleArray(elementosTemplo);
    elementosTemplo.forEach((el, i) => {
        let btn = '<button type="button" class="ui elemento inverted secondary button m-1" data-value="' + el.id + '" ><img class="ui image" height="50" src="../dist/images/' + el.id + '.png" />' + el.name + '</div>';
        if(i < elementosTemplo.length/2){
            $('#elementosTemplo-izq').append(btn);
        } else {
            $('#elementosTemplo-der').append(btn);
        }
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}