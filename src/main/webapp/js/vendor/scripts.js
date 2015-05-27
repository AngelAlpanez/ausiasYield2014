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
   
    
//    $(window).resize(function(){
//        var ancho = $(window).width();
//        var anchofinal = ancho - 800;
//        $(".menuInfo").css("left", anchofinal);
//    });
    setTimeout(function(){
        $(".tablaProductos td:nth-child(5)").each(function () {

            if ( $(this).html() === "") {
                $(this).html("<img src=\"images/noimagen.jpg\" />");
            }
        });
    }, 1);

    $(".tablaProductos td:nth-child(4)").append(" &#128;");
    $(".tablaProductos td:nth-child(5)").prepend("Stock: ");
    
    $(function () {
        var imagenes = [
            "images/fondo1.jpg"
                    , "images/fondo4.jpg"
                    , "images/fondo2.jpg"
                    , "images/fondo3.jpg"
        ];

        $(imagenes).each(function () {
            $("<img/>")[0].src = this;
        });

        var index = 0;

        $.backstretch(imagenes[index], {speed: 2500});

        setInterval(function () {
            index = (index >= imagenes.length - 1) ? 0 : index + 1;
            $.backstretch(imagenes[index]);
        }, 6000);
    });



    
    
});