'use strict';

var body = $('body').html();
 
$(function() {
    let grado = sessionStorage.getItem("grado");
    let hashGrado = CryptoJS.SHA1(grado).toString();;
    if(hashGrado != '356a192b7913b04c54574d18c28d46e6395428ab'){
        $('body').html('');
        setTimeout(function(){
            alert('¡CUIDADO!¡NO ES DE TU GRADO!');
            window.location.href='../index.html';
        }, 300);
    }
    else{
        $('body').html(body);
    }

    $('.special.cards .image').dimmer({
        on: 'hover'
      });
});

function logout(){
    sessionStorage.removeItem('grado');
    sessionStorage.removeItem('persLogin');
    window.location.href='login.html';
}