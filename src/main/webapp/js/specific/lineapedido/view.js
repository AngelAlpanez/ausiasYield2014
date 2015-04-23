/* 
 * Copyright (C) 2014 raznara
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


var lineapedidoView = function (strClase) {
    this.clase = strClase;
};
lineapedidoView.prototype = new view('lineapedido');
lineapedidoView.prototype.getClassNameLineapedido = function () {
    return this.getClassName() + "Vista";
};
var oLineapedidoView = new lineapedidoView('lineapedido');


//lineapedidoView.prototype.loadButtons = function (id) {
//
//    var botonera = "";
//    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
//    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
//    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
//    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
//    botonera += '</div></div>';
//    return botonera;
//
//}
lineapedidoView.prototype.loadFormValues = function (valores, campos) {
//                    $('#lineapedido_form #titulo').val(valores['titulo']);
//                    $('#lineapedido_form #contenido').val(valores['contenido']);
//                    $('#lineapedido_form #alta').val(valores['alta']);
//                    $('#lineapedido_form #cambio').val(valores['cambio']);
//                    $('#lineapedido_form #hits').val(valores['hits']);
//                    $('#lineapedido_form #id_usuario').val(valores['id_usuario']);
//                    $('#lineapedido_form #etiquetas').val(valores['etiquetas']);
//                    $('#lineapedido_form #publicado').val(valores['publicado']);
//                    $('#lineapedido_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

lineapedidoView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#lineapedido_form #titulo');
//                    valores['contenido'] = $('#lineapedido_form #contenido');
//                    valores['alta'] = $('#lineapedido_form #alta');
//                    valores['cambio'] = $('#lineapedido_form #cambio');
//                    valores['hits'] = $('#lineapedido_form #hits');
//                    valores['id_usuario'] = $('#lineapedido_form #id_usuario');
//                    valores['etiquetas'] = $('#lineapedido_form #etiquetas');
//                    valores['publicado'] = $('#lineapedido_form #publicado');
//                    valores['portada'] = $('#lineapedido_form #portada');

    var disabled = $('#lineapedidoForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#lineapedidoForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

lineapedidoView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#lineapedidoForm #obj_producto_button').unbind('click');
    $("#lineapedidoForm #obj_producto_button").click(function () {
        var oControl = oProductoControl;  //para probar dejar documento
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "documento");

        $("#lineapedidoForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de producto'), "", thisObject.getFormFooter(), true);

        $('#lineapedidoForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oProductoModel, oProductoView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_producto_id').val(id).change();
            $('#obj_producto_desc').text(decodeURIComponent(oProductoModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oProductoModel, oProductoView);
        return false;
    });
    
    $('#lineapedidoForm #obj_pedido_button').unbind('click');
    $("#lineapedidoForm #obj_pedido_button").click(function () {
        var oControl = oPedidoControl;  //para probar dejar documento
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "documento");

        $("#lineapedidoForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de pedido'), "", thisObject.getFormFooter(), true);

        $('#lineapedidoForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oPedidoModel, oPedidoView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_pedido_id').val(id).change();
            $('#obj_pedido_desc').text(decodeURIComponent(oPedidoModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oPedidoModel, oPedidoView);
        return false;
    });
};