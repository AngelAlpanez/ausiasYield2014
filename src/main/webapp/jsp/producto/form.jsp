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

<form class="form-horizontal" role="form" action="#" id="productoForm" name="formulario">
    <div class="form-group">
        <label class="col-sm-2 control-label" for="id">Id:</label>
        <div class="col-sm-2">
            <input type="text" id="id" class="form-control"  name="id" placeholder="id" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label" for="nombre">Nombre:</label>
        <div class="col-sm-9">
            <input type="text"  class="form-control pull-left"  id="nombre" name="nombre" size="15" placeholder="nombre" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label" for="precio">Precio:</label>
        <div class="col-sm-9">
            <input type="text"  class="form-control pull-left"  id="precio" name="precio" size="15" placeholder="precio" />
        </div>
    </div>
    <div class="form-group">
        <label class="col-sm-2 control-label" for="stock">Stock:</label>
        <div class="col-sm-9">
            <input type="text"  class="form-control pull-left"  id="stock" name="stock" size="15" placeholder="stock" />
        </div>
    </div>
    
    
    <input type="hidden"  class="form-control pull-left"  id="imagen" name="imagen" size="15"/>


    
    
    <div class="form-group">
        <label class="col-sm-2 control-label" for="obj_tipoproducto_id">Tipo producto: </label> 
        <div class="col-sm-2">              
            <input readonly  class="form-control input-mini"  id="obj_tipoproducto_id" name="id_tipoproducto" type="text" size="5" maxlength="5" />  
        </div>
        <div class="col-sm-1">              
            <a class="btn btn-primary btn-sm" id="obj_tipoproducto_button" href="#"><i class="glyphicon glyphicon-search"></i></a>
        </div>        
        <label class="col-sm-7" for="obj_tipoproducto_desc" id="obj_tipoproducto_desc"></label>                   
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
        $('#productoForm')
                .bootstrapValidator({
                    container: '#messages',
                    feedbackIcons: {
                        valid: 'glyphicon glyphicon-ok',
                        invalid: 'glyphicon glyphicon-remove',
                        validating: 'glyphicon glyphicon-refresh'
                    },
                    fields: {
                        nombre: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un nombre'
                                },
                                stringLength: {
                                    max: 255,
                                    message: 'El nombre debe tener como m�ximo 255 caracteres'
                                }
                            }
                        },
                        precio: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un precio'
                                },
                                integer: {
                                    message: 'El precio debe ser un numero entero'
                                },
                                stringLength: {
                                    min: -0,
                                    max: 99999999,
                                    message: 'El precio debe estar entre 0 y 99999999'
                                }
                            }
                        },
                        stock: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe introducir un stock'
                                },
                                integer: {
                                    message: 'El stock debe ser un entero'
                                },
                                between: {
                                    min: -0,
                                    max: 99999999,
                                    message: 'El stock debe estar entre 0 y 99999999'
                                }
                            }

                        }, 
                        id_tipoproducto: {
                            validators: {
                                notEmpty: {
                                    message: 'Debe elegir un tipo de producto'
                                },
                                integer: {
                                    message: 'El identificador del tipo de producto debe ser un entero'
                                }
                            }
                        }
                       

                    }
                })
                
                .on('change', '[name="id_tipoproducto"]', function() {
                    $('#productoForm').bootstrapValidator('revalidateField', 'id_tipoproducto');
                })
                ;

                ;

    });




</script>
