/* 
 * Copyright (C) 2015 Angel
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */
$(document).ready(function () {
   

    //SCRIPTS DEL MENU SUPERIOR
$(document).ready(main);
 
var contador = 1;
 
function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
 
        $('.submenu1').click(function(){
		$(this).children('.children').slideToggle();
                $('.submenu2').children('.children').css({display:'none'});
	});
        $('.submenu2').click(function(){
		$(this).children('.children').slideToggle();
                $('.submenu1').children('.children').css({display:'none'});
	});
}       $('.bt-menu').click(function(){
		$('.submenu1').children('.children').css({display:'none'});
                $('.submenu2').children('.children').css({display:'none'});
	});
    
//        $(window).resize(function(){
//            var ancho = $(window).width();
//            if (ancho > 840) {
//                $("nav").css({display:'block', left:'0%'});
//            }
//            if (ancho < 840 ) {
//                $("nav").css({display:'none', left:'0%'});
//            }
//        });
        //FIN SCRIPTS DEL MENU SUPERIOR
    
    
    
    
    setTimeout(function(){
        $(".tablaProductos td:nth-child(5)").each(function () {

            if ( $(this).html() === "") {
                $(this).html("<img src=\"images/noimagen.jpg\" />");
            }
        });
    }, 5);

    $(".tablaProductos td:nth-child(4)").append(" &#128;");
    $(".tablaProductos td:nth-child(5)").prepend("Stock: ");

    
});