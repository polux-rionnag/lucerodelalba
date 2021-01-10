'use strict';

var body = $('body').html();

$(function() {
    let grado = sessionStorage.getItem("grado");
    let hashGrado = CryptoJS.SHA1(grado).toString();;
    if(hashGrado != '77de68daecd823babbb58edb1c8e14d7106e83bb'){
        $('body').html('');
        setTimeout(function(){
            alert('¡CUIDADO!¡NO ES DE TU GRADO!');
            window.location.href='login.html';
        }, 300);
    }
    else{
        $('body').html(body);
    }
});


function logout(){
    sessionStorage.removeItem('grado');
    sessionStorage.removeItem('persLogin');
    window.location.href='login.html';
}
