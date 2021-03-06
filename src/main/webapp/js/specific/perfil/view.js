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


var perfilView = function (strClase) {
    this.clase = strClase;
};
perfilView.prototype = new view('usuario');
perfilView.prototype.getClassNamePerfil = function () {
    return this.getClassName() + "Vista";
};
var oPerfilView = new perfilView('usuario');


perfilView.prototype.loadButtons = function (id) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/pedido/list/page=1&rpp=10&vf=4&systemfilter=' + 'id_perfil' + '&systemfilteroperator=equals' + '&systemfiltervalue=' + id +'"><i class="glyphicon glyphicon-book"></i></a>';
    botonera += '</div></div>';
    return botonera;

}
perfilView.prototype.loadFormValues = function (valores, campos) {
//                    $('#perfil_form #titulo').val(valores['titulo']);
//                    $('#perfil_form #contenido').val(valores['contenido']);
//                    $('#perfil_form #alta').val(valores['alta']);
//                    $('#perfil_form #cambio').val(valores['cambio']);
//                    $('#perfil_form #hits').val(valores['hits']);
//                    $('#perfil_form #id_perfil').val(valores['id_perfil']);
//                    $('#perfil_form #etiquetas').val(valores['etiquetas']);
//                    $('#perfil_form #publicado').val(valores['publicado']);
//                    $('#perfil_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

perfilView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#perfil_form #titulo');
//                    valores['contenido'] = $('#perfil_form #contenido');
//                    valores['alta'] = $('#perfil_form #alta');
//                    valores['cambio'] = $('#perfil_form #cambio');
//                    valores['hits'] = $('#perfil_form #hits');
//                    valores['id_perfil'] = $('#perfil_form #id_perfil');
//                    valores['etiquetas'] = $('#perfil_form #etiquetas');
//                    valores['publicado'] = $('#perfil_form #publicado');
//                    valores['portada'] = $('#perfil_form #portada');

    var disabled = $('#usuarioForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#usuarioForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

perfilView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#usuarioForm #obj_usuario_button').unbind('click');
    $("#usuarioForm #obj_usuario_button").click(function () {
        var oControl = oUsuarioControl;  

        $("#usuarioForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de usuario'), "", thisObject.getFormFooter(), true);

        $('#usuarioForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oUsuarioModel, oUsuarioView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_estado_id').val(id).change();
            $('#obj_estado_desc').text(decodeURIComponent(oUsuarioModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oUsuarioModel, oUsuarioView);
        return false;
    });
    $('#usuarioForm #obj_tipopusuario_button').unbind('click');
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
    $('#contenido_button').unbind('click');
    $('#contenido_button').click(function () {
        //cabecera = '<button id="full-width" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>' + '<h3 id="myModalLabel">Edición de contenidos</h3>';
        cabecera = thisObject.getFormHeader('Edición de contenidos');
        //pie = '<button type="button" class="btn btn-default" data-dismiss="modal" aria-hidden="true">Cerrar</button>';                        
        pie = '<a class="btn btn-primary" href="http://creoleparser.googlecode.com/svn/trunk/creoleparser/test_pages/CheatSheetPlus.html">Sintaxis</a>';
        pie += thisObject.getFormFooter();
        contenido = '<div class="row"><div class="col-md-6">';
        contenido += '<textarea type="text" id="contenidomodal" name="contenido" rows="20" cols="70" placeholder="contenido"></textarea>';
        contenido += '</div><div class="col-md-6"><div id="textoparseado"></div></div>';
        contenido += '</div>';

        $('#usuarioForm').append(thisObject.getEmptyModal());

        util().loadForm('#modal01', cabecera, contenido, pie, true);
        var texto = $('#contenido').val();
        $('#contenidomodal').val(texto);
        util().creoleParse(texto, $('#textoparseado'));
        $('#contenido').val($('#contenidomodal').val());
        $('#contenidomodal').keyup(function () {
            util().creoleParse($('#contenidomodal').val(), $('#textoparseado'));
            $('#contenido').val($('#contenidomodal').val());
        });
        return false;
    });
};

perfilView.prototype.okValidation = function (f) {
    $('#usuarioForm').on('success.form.bv', f);
};