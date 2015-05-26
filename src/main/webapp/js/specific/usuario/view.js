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


var usuarioView = function (strClase) {
    this.clase = strClase;
};
usuarioView.prototype = new view('usuario');
usuarioView.prototype.getClassNameUsuario = function () {
    return this.getClassName() + "Vista";
};
var oUsuarioView = new usuarioView('usuario');


usuarioView.prototype.loadButtons = function (id) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><img class="iconoMant" src="./images/ver.png"></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><img class="iconoMant" src="./images/editar.png"></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><img class="iconoMant" src="./images/eliminar.png"></a>';
    botonera += '<a class="btn btn-default pedido" id="' + id + '"  href="jsp#/pedido/list/page=1&rpp=10&vf=4&systemfilter=' + 'id_usuario' + '&systemfilteroperator=equals' 
            + '&systemfiltervalue=' + id +'"><img class="iconoMant" src="./images/pedido.png"></a>';
    botonera += '</div></div>';
    return botonera;

}
usuarioView.prototype.loadFormValues = function (valores, campos) {
//                    $('#usuario_form #titulo').val(valores['titulo']);
//                    $('#usuario_form #contenido').val(valores['contenido']);
//                    $('#usuario_form #alta').val(valores['alta']);
//                    $('#usuario_form #cambio').val(valores['cambio']);
//                    $('#usuario_form #hits').val(valores['hits']);
//                    $('#usuario_form #id_usuario').val(valores['id_usuario']);
//                    $('#usuario_form #etiquetas').val(valores['etiquetas']);
//                    $('#usuario_form #publicado').val(valores['publicado']);
//                    $('#usuario_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

usuarioView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#usuario_form #titulo');
//                    valores['contenido'] = $('#usuario_form #contenido');
//                    valores['alta'] = $('#usuario_form #alta');
//                    valores['cambio'] = $('#usuario_form #cambio');
//                    valores['hits'] = $('#usuario_form #hits');
//                    valores['id_usuario'] = $('#usuario_form #id_usuario');
//                    valores['etiquetas'] = $('#usuario_form #etiquetas');
//                    valores['publicado'] = $('#usuario_form #publicado');
//                    valores['portada'] = $('#usuario_form #portada');

    var disabled = $('#usuarioForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#usuarioForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

usuarioView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#usuarioForm #obj_tipousuario_button').unbind('click');
    $("#usuarioForm #obj_tipousuario_button").click(function () {
        var oControl = oTipousuarioControl;

        $("#usuarioForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de tipo de usuario'), "", thisObject.getFormFooter(), true);

        $('#usuarioForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oTipousuarioModel, oTipousuarioView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_tipousuario_id').val(id).change();
            $('#obj_tipousuario_desc').text(decodeURIComponent(oTipousuarioModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oTipousuarioModel, oTipousuarioView);
        return false;
    });
    
};

usuarioView.prototype.okValidation = function (f) {
    $('#usuarioForm').on('success.form.bv', f);
};

usuarioView.prototype.printValue = function (value, valor, recortar) {

    var thisObject = this;
    var strResult = "";
    if (/obj_/.test(valor)) {
        if (value[valor].id > 0) {
            if (valor == "obj_tipousuario") {
                strResult = '<a href="jsp#/' + valor.substring(4) + '/view/' + value[valor].id + '">' + value[valor].descripcion + '</a>';
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