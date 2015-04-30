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

var productoControl = function (strClase) {
    this.clase = strClase;
};
productoControl.prototype = new control('producto');
productoControl.prototype.getClassNameProducto = function () {
    return this.getClassName() + "Control";
};
var oProductoControl = new productoControl('producto');




control.prototype.upload = function (place, id, oModel, oView) {
    var thisObject = this;
    $(place).empty();
    $(place).append(oView.getPanel("Edición de " + this.clase, oView.getEmptyView("imagen","unwrappered")));
    //var oDocumentoModel = oModel;
    //oDocumentoModel.loadAggregateViewOne(id);
    
    //oView.loadFormValues(oDocumentoModel.getCachedOne(), oDocumentoModel.getCachedFieldNames());
    
    //$('#id').attr("disabled", true);
    //oView.doEventsLoading();
    //$('#submitForm').unbind('click');
    //$('#submitForm').click(function () {
    //    oView.okValidation(function (e) {
    //        resultado = oModel.setOne({json: JSON.stringify(oView.getFormValuesImagen())});
    //        oView.doResultOperationNotifyToUser(place, resultado["status"], "Se ha actualizado el registro con id=" + resultado["message"], resultado["message"], true);
    //        e.preventDefault();
    //        return false;
    //    });
    //});
};