<%-- 
 Copyright (C) July 2014 Rafael Aznar

 This program is free software; you can redistribute it and/or
 modify it under the terms of the GNU General Public License
 as published by the Free Software Foundation; either version 2
 of the License, or (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program; if not, write to the Free Software
 Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
--%>

<form class="form-horizontal" role="form" action="#" id="lineapedidoForm" name="formulario">
    <div class="form-group">
        <label class="col-sm-2 control-label" for="id">Id:</label>
        <div class="col-sm-2">
            <input type="text" id="id" class="form-control"  name="id" placeholder="id" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label" for="cantidad">Cantidad:</label>
        <div class="col-sm-9">
            <input type="text"  class="form-control pull-left"  id="nia" name="cantidad" size="15" placeholder="cantidad" />
        </div>
    </div>
    
    <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_producto_id">Producto: </label> 
        <div class="col-sm-2">              
            <input readonly  class="form-control input-mini"  id="obj_producto_id" name="id_producto" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_producto_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_producto_desc" id="obj_producto_desc"></label>                   
    </div>
    
    <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_pedido_id">Pedido: </label> 
        <div class="col-sm-2">              
            <input readonly  class="form-control input-mini"  id="obj_pedido_id" name="id_pedido" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_pedido_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_pedido_desc" id="obj_pedido_desc"></label>                   
    </div>
    
    
    
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <div id="messages"></div>
            </div>
        </div>

        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <button class="btn btn-primary" id="submitForm">Guardar</button>
            </div>
        </div>

</form>


<script type="text/javascript">

    $(document).ready(function () {

        //http://jqueryvalidation.org/documentation/
        $('#pedidoForm')
                .bootstrapValidator({
                    container: '#messages',
                    feedbackIcons: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {
                        codigo: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un codigo'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El codigo debe tener como máximo 255 caracteres'
                                }
                            }
                        },
                        descripcion: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir una descripcion'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'La descripcion debe tener como máximo 255 caracteres'
                                }
                            }
                        },
                        precio: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un precio'
                                },
                                integer: {
                                    message: 'El precio debe ser un entero'
                                },
                                between: {
                                    min: -0,
                                    max: 99999999,
                                    message: 'El precio debe ser un entero entre 0 y 99999999'
                                }
                            }

                        },
                        id_tipoproducto: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un ID Tipo producto'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El tipo producto debe tener como máximo 255 caracteres'
                                }

                            }
                        },
                        id_proveedor: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un ID Proveedor'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El proveedor debe tener como máximo 255 caracteres'
                                }

                            }
                        },
                        path: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un path'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El path debe tener como máximo 255 caracteres'
                                }

                            }
                        }

                    }
                })
                .on('change', '[name="id_proveedor"]', function() {
                    $('#pedidoForm').bootstrapValidator('revalidateField', 'id_proveedor');
                })

                .on('change', '[name="id_tipoproducto"]', function() {
                    $('#pedidoForm').bootstrapValidator('revalidateField', 'id_tipoproducto');
                })
                ;

                ;

    });




</script>
