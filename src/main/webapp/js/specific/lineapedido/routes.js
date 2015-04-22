/* 
 * Copyright (C) 2014 rafa
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


function fLineapedidoRoutes() {

//    Path.map("#/lineapedido").to(function () {
//        $('#indexContenidoJsp').spinner();
//        control('lineapedido').list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);
//        //lineapedidoControl.modalListEventsLoading(lineapedidoObject, lineapedidoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
//        $('#indexContenidoJsp').empty();
//        return false;
//    });

    Path.map("#/lineapedido").to(function () {
        $('#indexContenidoJsp').spinner();
        oLineapedidoControl.list($('#indexContenido'), param().defaultizeUrlObjectParameters({}), null, oLineapedidoModel, oLineapedidoView);
        //lineapedidoControl.modalListEventsLoading(lineapedidoObject, lineapedidoView, $('#indexContenido'), param().defaultizeUrlObjectParameters({}), null);        
        $('#indexContenidoJsp').empty();
        //$('#indexContenidoJsp').append(oLineapedidoControl.getClassNameLineapedido());
        return false;
    });

    Path.map("#/lineapedido/list/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oLineapedidoControl.listCuadros($('#indexContenido'), paramsObject, null, oLineapedidoModel, oLineapedidoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/lineapedido/view/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oLineapedidoControl.view($('#indexContenido'), paramsObject['id'], oLineapedidoModel, oLineapedidoView);
        $('#indexContenidoJsp').empty();

        return false;
    });

    Path.map("#/lineapedido/edit/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oLineapedidoControl.edit($('#indexContenido'), paramsObject['id'], oLineapedidoModel, oLineapedidoView);
        $('#indexContenidoJsp').empty();
    });
    Path.map("#/lineapedido/new").to(function () {
        $('#indexContenidoJsp').spinner();
        //var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oLineapedidoControl.new($('#indexContenido'), null, oLineapedidoModel, oLineapedidoView);
        $('#indexContenidoJsp').empty();
        return false;
    });
    Path.map("#/lineapedido/new/:url").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oLineapedidoControl.new($('#indexContenido'), paramsObject, oLineapedidoModel, oLineapedidoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/lineapedido/remove/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oLineapedidoControl.remove($('#indexContenido'), paramsObject['id'], oLineapedidoModel, oLineapedidoView);
        $('#indexContenidoJsp').empty();
        return false;
    });

    Path.map("#/lineapedido/duplicate/:id").to(function () {
        $('#indexContenidoJsp').spinner();
        var paramsObject = param().defaultizeUrlObjectParameters(param().getUrlObjectFromUrlString(this.params['url']));
        oLineapedidoControl.duplicate($('#indexContenido'), paramsObject['id'], oLineapedidoModel, oLineapedidoView);
        $('#indexContenidoJsp').empty();
        return false;
    });
}