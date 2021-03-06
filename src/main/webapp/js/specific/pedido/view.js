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


var pedidoView = function (strClase) {
    this.clase = strClase;
};
pedidoView.prototype = new view('pedido');
pedidoView.prototype.getClassNamePedido = function () {
    return this.getClassName() + "Vista";
};
var oPedidoView = new pedidoView('pedido');


pedidoView.prototype.loadButtons = function (id) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><img class="iconoMant" src="./images/ver.png"></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><img class="iconoMant" src="./images/editar.png"></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><img class="iconoMant" src="./images/eliminar.png"></a>';
    botonera += '<a class="btn btn-default pedido" id="' + id + '"  href="jsp#/lineapedido/list/page=1&rpp=10&vf=4&systemfilter=' + 'id_pedido' 
            + '&systemfilteroperator=equals' + '&systemfiltervalue=' + id +'"><img class="iconoMant" src="./images/pedido.png"></a>';
    botonera += '</div></div>';
    return botonera;

}
pedidoView.prototype.loadFormValues = function (valores, campos) {
//                    $('#pedido_form #titulo').val(valores['titulo']);
//                    $('#pedido_form #contenido').val(valores['contenido']);
//                    $('#pedido_form #alta').val(valores['alta']);
//                    $('#pedido_form #cambio').val(valores['cambio']);
//                    $('#pedido_form #hits').val(valores['hits']);
//                    $('#pedido_form #id_usuario').val(valores['id_usuario']);
//                    $('#pedido_form #etiquetas').val(valores['etiquetas']);
//                    $('#pedido_form #publicado').val(valores['publicado']);
//                    $('#pedido_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

pedidoView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#pedido_form #titulo');
//                    valores['contenido'] = $('#pedido_form #contenido');
//                    valores['alta'] = $('#pedido_form #alta');
//                    valores['cambio'] = $('#pedido_form #cambio');
//                    valores['hits'] = $('#pedido_form #hits');
//                    valores['id_usuario'] = $('#pedido_form #id_usuario');
//                    valores['etiquetas'] = $('#pedido_form #etiquetas');
//                    valores['publicado'] = $('#pedido_form #publicado');
//                    valores['portada'] = $('#pedido_form #portada');

    var disabled = $('#pedidoForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#pedidoForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

pedidoView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#pedidoForm #obj_usuario_button').unbind('click');
    $("#pedidoForm #obj_usuario_button").click(function () {
        var oControl = oUsuarioControl;  //para probar dejar documento
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "documento");

        $("#pedidoForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de usuario'), "", thisObject.getFormFooter(), true);

        $('#pedidoForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oUsuarioModel, oUsuarioView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_usuario_id').val(id).change();
            $('#obj_usuario_desc').text(decodeURIComponent(oUsuarioModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oUsuarioModel, oUsuarioView);
        return false;
    });
};

pedidoView.prototype.printValue = function (value, valor, recortar) {

    var thisObject = this;
    var strResult = "";
    if (/obj_/.test(valor)) {
        if (value[valor].id > 0) {
            if (valor == "obj_usuario") {
                strResult = '<a href="jsp#/' + valor.substring(4) + '/view/' + value[valor].id + '">' + value[valor].login + '</a>';
            }

        } else {
            strResult = '???';
        }
    } else {
        switch (value[valor]) {
            case true:
                strResult = '<i class="glyphicon glyphicon-ok"></i>';
                break;
            case false:
                strResult = '<i class="glyphicon glyphicon-remove"></i>';
                break;
            default:
                strResult = decodeURIComponent(value[valor]);
                //if (typeof fieldContent == "string") {
                if (recortar)
                    if (strResult.length > 50) //don't show too long fields
                        strResult = strResult.substr(0, 20) + " ...";
                //}
        }
        ;
    }
    ;
    return strResult;
};