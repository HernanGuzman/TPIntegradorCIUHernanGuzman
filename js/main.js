/*funcion que se ejecuta solo cuando se haya cargado toda la pagina */
$(document).ready(function(){
    $('.menu li:has(ul)').click(function(e){
        e.preventDefault();

        /*CONSULTO SI EL ELEMENTO CLICKEADO TIENE LA CLASE ACTIVADA */
        if($(this).hasClass('activado')){
            $(this).removeClass('activado');
            $(this).children('ul').slideUp();

        }else{
            /*ACCEDO A LOS SUBMENU  Y CON LA FUNCION SLIDEuP() Oculto los submenu*/
            $('.menu li ul').slideUp();
            //SCAO LA CLASE ACTIVADO A TODOS LOS ELEMENTOS
            $('.men li').removeClass('activado');
            //AGREGO LA CLASE ACTIVADO SOLO AL ELEMENTO CLICKEADO
            $(this).addClass('activado');
            //MUESTRO LOS ELEMENTOS UL DEL ELEMENTO SELECCIONADO
            $(this).children('ul').slideDown();
        }
    })
});