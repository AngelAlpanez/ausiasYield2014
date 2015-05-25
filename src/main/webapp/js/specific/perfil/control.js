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

var perfilControl = function (strClase) {
    this.clase = strClase;
};
perfilControl.prototype = new control('usuario');
perfilControl.prototype.getClassNamePerfil = function () {
    return this.getClassName() + "Control";
};
var oPerfilControl = new perfilControl('usuario');

perfilControl.prototype.view = function (place, id, oModel, oView) {
    $(place).empty();
    var oDocumentoModel = oModel;
    oDocumentoModel.loadAggregateViewOne(id);
    $(place).append(oView.getPanel("Detalle de " + this.clase, oView.getObjectTable(oDocumentoModel.getCachedPrettyFieldNames(), oDocumentoModel.getCachedOne(), oDocumentoModel.getCachedFieldNames())));
    $(place).append('<a class="btn btn-primary" href="jsp#/' + this.clase + '/edit/' + id + '">Editar</a>');
    $(place).append('<a class="btn btn-primary" href="jsp#/' + this.clase + '/remove/' + id + '">Borrar</a>');
    $(place).append('<a class="btn btn-primary" href="jsp#/' + this.clase + '/list/' + id + '">Listar</a>');
    $(place).append('<a class="btn btn-primary" href="jsp#/pedido/list/page=1&rpp=10&vf=4&systemfilter=' + 'id_usuario' + '&systemfilteroperator=equals' + '&systemfiltervalue=' + id +'</a>');

};