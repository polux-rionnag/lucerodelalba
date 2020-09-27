'use strict';

var apr = 'cd1bf023fcd58013278712a9cd3e7f21f10ff214';

var pasCom = '428cc6da15ea74e12f22c71eb53728ca8a0937c1';
var sagCom = '3b182f39d8b34b9e44e2f80f89384164f6a15a06';

var pasMas = '060aab58bca32ec2678d29afacb8839b9249048c';
var sagMas = 'e7a804813f824cd4ad07a60789705c7da05a56d3';

var edadApr = '77de68daecd823babbb58edb1c8e14d7106e83bb';
var edadCom = 'ac3478d69a3c81fa62e60f5c3696165a4e5e6ac4';
var edadMas = '13be43394a8acad2286982eb67e339ad63ab2e12';

$(function() {
    $('.ui.form').form();

    $('[name=palPas]').blur((e) => {
        if(e.target.value === ''){
            $(e.target).parent().removeClass('success error');
        } else {
            let hashPalPas = CryptoJS.SHA1(e.target.value).toString();
            if(hashPalPas === pasCom || hashPalPas === pasMas){
                $(e.target).parent().addClass('success').removeClass('error');
            } else {
                $(e.target).parent().addClass('error').removeClass('success');
            }
        }
    });

    $('[name=palSag]').blur((e) => {
        if(e.target.value === ''){
            $(e.target).parent().removeClass('success error');
        } else {
            let hashPalSag = CryptoJS.SHA1(e.target.value).toString();
            if(hashPalSag === apr || hashPalSag === sagCom || hashPalSag === sagMas){
                $(e.target).parent().addClass('success').removeClass('error');
            } else {
                $(e.target).parent().addClass('error').removeClass('success');
            }
        }
    });

    $('[name=edad]').blur((e) => {
        if(e.target.value === ''){
            $(e.target).parent().removeClass('success error');
        } else {
            let hashEdad = CryptoJS.SHA1(e.target.value).toString();
            if(hashEdad === edadApr || hashEdad === edadCom || hashEdad === edadMas){
                $(e.target).parent().addClass('success').removeClass('error');
            } else {
                $(e.target).parent().addClass('error').removeClass('success');
            }
        }
    });

    $('.ui.form').submit(() =>{
        let palPas = $('.ui.form').form('get value', 'palPas').toLowerCase();
        let palSag = $('.ui.form').form('get value', 'palSag').toLowerCase();
        let edad = $('.ui.form').form('get value', 'edad').toLowerCase();

        let hashPalPas = CryptoJS.SHA1(palPas).toString();
        let hashPalSag = CryptoJS.SHA1(palSag).toString();
        let hashEdad = CryptoJS.SHA1(edad).toString();

        if(hashPalSag === apr && hashEdad === edadApr){
            alert('¡Bienvenido Aprendiz!');
        } else if(hashPalPas === pasCom && hashPalSag == sagCom && hashEdad === edadCom){
            alert('¡Bienvenido Compañero!');
        } else if(hashPalPas === pasMas && hashPalSag == sagMas && hashEdad === edadMas){
            alert('¡Bienvenido Maestro!');
        } else {
            alert('Datos incorrectos');
        }
        
    });
});