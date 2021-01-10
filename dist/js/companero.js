'use strict';

var body = $('body').html();

$(function() {
    let grado = sessionStorage.getItem("grado");
    let hashGrado = CryptoJS.SHA1(grado).toString();;
    if(hashGrado != 'da4b9237bacccdf19c0760cab7aec4a8359010b0'){
        $('body').html('');
        setTimeout(function(){
            alert('¡CUIDADO!¡NO ES DE TU GRADO!');
            window.location.href='../index.html';
        }, 300);
    }
    else{
        $('body').html(body);
    }
});

