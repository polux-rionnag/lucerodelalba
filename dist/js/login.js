'use strict';

var apr = 'cd1bf023fcd58013278712a9cd3e7f21f10ff214';

var pasCom = '428cc6da15ea74e12f22c71eb53728ca8a0937c1';
var sagCom = '3b182f39d8b34b9e44e2f80f89384164f6a15a06';

var pasMas = '060aab58bca32ec2678d29afacb8839b9249048c';
var sagMas = '9576cf48672d3c6d82f4014f85d4571ed759b741';

var edadApr = '77de68daecd823babbb58edb1c8e14d7106e83bb';
var edadCom = 'ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4';
var edadMas = '13be43394a8acad2286982eb67e339ad63ab2e12';

//var body = $('body').html();
//$('body').html('');

$(function() {
    $('#formLogin').form();
    $('#stayLogged').checkbox();

    let stayLogged = sessionStorage.getItem("persLogin");
    if(stayLogged == 'true'){
        $('#stayLogged').checkbox('set checked');
        let grado = sessionStorage.getItem("grado");
        let hashGrado = CryptoJS.SHA1(grado).toString();;
        if(hashGrado == '356a192b7913b04c54574d18c28d46e6395428ab'){
            window.location.href='aprendiz.html';
        } else if(hashGrado == 'da4b9237bacccdf19c0760cab7aec4a8359010b0'){
            window.location.href='companero.html';
        } else if(hashGrado == '77de68daecd823babbb58edb1c8e14d7106e83bb'){
            window.location.href='maestro.html';
        }
    }
    else{
        sessionStorage.removeItem("grado");
        //$('body').html(body);
    }
    
    $('[name=palPas]').blur((e) => {
        $('#errorMsg').html('');
        if(e.target.value === ''){
            $(e.target).parent().removeClass('success error');
        } else {
            let hashPalPas = CryptoJS.SHA1(e.target.value).toString();
            if(hashPalPas === pasCom || hashPalPas === pasMas){
                $(e.target).parent().addClass('success').removeClass('error');
            } else {
                $(e.target).parent().addClass('error').removeClass('success');
                $('#errorMsg').html('Palabra de pase incorrecta');
            }
        }
    });

    $('[name=palSag]').blur((e) => {
        $('#errorMsg').html('');
        if(e.target.value === ''){
            $(e.target).parent().removeClass('success error');
        } else {
            let hashPalSag = CryptoJS.SHA1(e.target.value).toString();
            if(hashPalSag === apr || hashPalSag === sagCom || hashPalSag === sagMas){
                $(e.target).parent().addClass('success').removeClass('error');
            } else {
                $(e.target).parent().addClass('error').removeClass('success');
                $('#errorMsg').html('Palabra Sagrada incorrecta');
            }
        }
    });

    $('[name=edad]').blur((e) => {
        $('#errorMsg').html('');
        if(e.target.value === ''){
            $(e.target).parent().removeClass('success error');
        } else {
            let hashEdad = CryptoJS.SHA1(e.target.value).toString();
            if(hashEdad === edadApr || hashEdad === edadCom || hashEdad === edadMas){
                $(e.target).parent().addClass('success').removeClass('error');
            } else {
                $(e.target).parent().addClass('error').removeClass('success');
                $('#errorMsg').html('Edad incorrecta');
            }
        }
    });

    $('#formLogin').submit((e) =>{
        e.preventDefault();
        e.stopPropagation();
        let persLogin = $('#stayLogged').is(':checked');
        sessionStorage.setItem('persLogin',persLogin);

        let palPas = $('.ui.form').form('get value', 'palPas').toLowerCase();
        let palSag = $('.ui.form').form('get value', 'palSag').toLowerCase();
        let edad = $('.ui.form').form('get value', 'edad').toLowerCase();

        let hashPalPas = CryptoJS.SHA1(palPas).toString();
        let hashPalSag = CryptoJS.SHA1(palSag).toString();
        let hashEdad = CryptoJS.SHA1(edad).toString();
        
        if(hashPalSag === apr && hashEdad === edadApr){
            sessionStorage.setItem("grado","1");
            window.location.href="aprendiz.html";
        } else if(hashPalPas === pasCom && hashPalSag == sagCom && hashEdad === edadCom){
            sessionStorage.setItem("grado","2");
            window.location.href="companero.html";
        } else if(hashPalPas === pasMas && hashPalSag == sagMas && hashEdad === edadMas){
            sessionStorage.setItem("grado","3");
            window.location.href="maestro.html";
        } else {
            $('#errorMsg').html('Datos incorrectos');
        }
        
    });
});

