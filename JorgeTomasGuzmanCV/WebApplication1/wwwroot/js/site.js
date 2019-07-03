// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$("body").ready(function () {
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split('=');

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    };

    var language = getUrlParameter('language');
    if (language) {
        if (language == "es")
            document.body.className = 'es';
        if (language == "en")
            document.body.className = 'en';
        //alert("change body");
    }

});

$(document).ready(function () {
    $('.collapsible').collapsible();
    $('.sidenav').sidenav();
    $('.tabs').tabs();
    $('.materialboxed').materialbox();

    
    $('.btn').click(function () {
        if ($(this).attr("id") == "es") 
            document.body.className = 'es';
        if ($(this).attr("id") == "en") 
            document.body.className = 'en';
    });
    //$(".btn#es").on('click', function () {
    //    alert('1');
    //});
    
    $("a#conocimientos").click( function (e) {
        e.preventDefault();
        if (document.body.className === 'es')
            $('input[name="language"]').val("es");
        if (document.body.className === 'en')
            $('input[name="language"]').val("en");
        document.getElementById('conocimientosform').submit();
    });

    

});