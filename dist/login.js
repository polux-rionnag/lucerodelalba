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
        evalInput(e.target, 1);
    });

    $('[name=palSag]').blur((e) => {
        evalInput(e.target, 2);
    });

    $('[name=edad]').blur((e) => {
        evalInput(e.target, 3);
    });

    $('.ui.form').submit((e) => {
        e.preventDefault();
        e.stopPropagation();
        let palPas = $('.ui.form').form('get value', 'palPas').toLowerCase();
        let palSag = $('.ui.form').form('get value', 'palSag').toLowerCase();
        let edad = $('.ui.form').form('get value', 'edad').toLowerCase();       
        let signIn = evalGrade(palPas, palSag, edad);
        if(signIn) window.location.href = "file:///C:/Users/Amperio/geamannan/memento.html";
        else {
            $('.ui.error.message').html('La información ingresada es incorrecta.').show();
        }
    });
});

function evalInput(obj, grade){
    let $field = $(obj).parent();
    if(obj.value){
        let correctValue = evalValue(obj.name, obj.value);        
        if (correctValue) $field.addClass('success').removeClass('error');
        else $field.addClass('error').removeClass('success');
    } else {
        if (grade === 1 && obj.name == 'palPas') $field.removeClass('success error');
        else $field.addClass('error').removeClass('success');
    }
    $('.ui.error.message').hide();
}

function evalValue(name, value){
    let hashValue = CryptoJS.SHA1(value).toString();
    if(name == 'palPas') 
        return hashValue === pasCom || hashValue === pasMas ;
    else if(name === 'palSag') 
        return hashValue === apr || hashValue === sagCom || hashValue === sagMas;
    else if(name === 'edad') 
        return hashValue === edadApr || hashValue === edadCom || hashValue === edadMas;
}

function evalGrade(palPas, palSag, edad){
    let hashPalPas = CryptoJS.SHA1(palPas).toString();
    let hashPalSag = CryptoJS.SHA1(palSag).toString();
    let hashEdad = CryptoJS.SHA1(edad).toString();
    let result = false;
    let grade = 0;

    if(hashPalSag === apr && hashEdad === edadApr){
        grade = 1;
        result = true;
    } else if(hashPalPas === pasCom && hashPalSag == sagCom && hashEdad === edadCom){
        grade = 2;
        result = true;
    } else if(hashPalPas === pasMas && hashPalSag == sagMas && hashEdad === edadMas){
        grade = 3;
        result = true;
    } 

    window.localStorage.setItem("grado", grade);
    return result;
}