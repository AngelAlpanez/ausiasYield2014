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


var productoView = function (strClase) {
    this.clase = strClase;
};
productoView.prototype = new view('producto');
productoView.prototype.getClassNameProducto = function () {
    return this.getClassName() + "Vista";
};
var oProductoView = new productoView('producto');


productoView.prototype.loadButtons = function (id) {

    var botonera = "";
    botonera += '<div class="btn-toolbar" role="toolbar"><div class="btn-group btn-group-xs">';
    botonera += '<a class="btn btn-default view" id="' + id + '"  href="jsp#/' + this.clase + '/view/' + id + '"><i class="glyphicon glyphicon-eye-open"></i></a>';
    botonera += '<a class="btn btn-default edit" id="' + id + '"  href="jsp#/' + this.clase + '/edit/' + id + '"><i class="glyphicon glyphicon-pencil"></i></a>';
    botonera += '<a class="btn btn-default remove" id="' + id + '"  href="jsp#/' + this.clase + '/remove/' + id + '"><i class="glyphicon glyphicon-remove"></i></a>';
    botonera += '</div></div>';
    return botonera;

}
productoView.prototype.loadFormValues = function (valores, campos) {
//                    $('#producto_form #titulo').val(valores['titulo']);
//                    $('#producto_form #contenido').val(valores['contenido']);
//                    $('#producto_form #alta').val(valores['alta']);
//                    $('#producto_form #cambio').val(valores['cambio']);
//                    $('#producto_form #hits').val(valores['hits']);
//                    $('#producto_form #id_usuario').val(valores['id_usuario']);
//                    $('#producto_form #etiquetas').val(valores['etiquetas']);
//                    $('#producto_form #publicado').val(valores['publicado']);
//                    $('#producto_form #portada').val(valores['portada']);
    this.doFillForm(valores, campos);
};

productoView.prototype.getFormValues = function () {
    var valores = [];
//                    valores['titulo'] = $('#producto_form #titulo');
//                    valores['contenido'] = $('#producto_form #contenido');
//                    valores['alta'] = $('#producto_form #alta');
//                    valores['cambio'] = $('#producto_form #cambio');
//                    valores['hits'] = $('#producto_form #hits');
//                    valores['id_usuario'] = $('#producto_form #id_usuario');
//                    valores['etiquetas'] = $('#producto_form #etiquetas');
//                    valores['publicado'] = $('#producto_form #publicado');
//                    valores['portada'] = $('#producto_form #portada');

    var disabled = $('#productoForm').find(':input:disabled').removeAttr('disabled');
    valores = $('#productoForm').serializeObject();
    disabled.attr('disabled', 'disabled');
    return valores;
};

productoView.prototype.doEventsLoading = function () {
    var thisObject = this;
    $('#productoForm #obj_tipoproducto_button').unbind('click');
    $("#productoForm #obj_tipoproducto_button").click(function () {
        var oControl = oTipoproductoControl;  //para probar dejar documento
        //vista('usuario').cargaModalBuscarClaveAjena('#modal01', "documento");

        $("#productoForm").append(thisObject.getEmptyModal());
        util().loadForm('#modal01', thisObject.getFormHeader('Elección de tipo producto'), "", thisObject.getFormFooter(), true);

        $('#productoForm').append(thisObject.getEmptyModal());

        oControl.list('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), true, oTipoproductoModel, oTipoproductoView);
        oControl.modalListEventsLoading('#modal01 #modal-body', param().defaultizeUrlObjectParameters({}), function (id) {
            $('#obj_tipoproducto_id').val(id).change();
            $('#obj_tipoproducto_desc').text(decodeURIComponent(oTipoproductoModel.getMeAsAForeignKey(id)));
            $('#modal01').modal('hide');

        },oTipoproductoModel, oTipoproductoView);
        return false;
    });
};