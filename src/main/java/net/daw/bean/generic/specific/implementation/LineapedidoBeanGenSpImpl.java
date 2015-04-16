/*
 * Copyright (C) July 2014 Rafael Aznar
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
package net.daw.bean.generic.specific.implementation;

import net.daw.bean.generic.implementation.BeanGenImpl;
import net.daw.bean.publicinterface.BeanInterface;
import com.google.gson.annotations.Expose;
import java.util.Date;

public class LineapedidoBeanGenSpImpl extends BeanGenImpl implements BeanInterface {

     public LineapedidoBeanGenSpImpl() {
    }

    public LineapedidoBeanGenSpImpl(int id) {
        super(id);
    }
    
    @Expose
    private Integer cantidad = 0;
    
    @Expose(serialize = false)
    private Integer id_producto = 0;
    @Expose (deserialize = false)
    private ProductoBeanGenSpImpl obj_producto = null;
    
    @Expose(serialize = false)
    private Integer id_pedido = 0;
    @Expose (deserialize = false)
    private PedidoBeanGenSpImpl obj_pedido = null;

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    public Integer getId_producto() {
        return id_producto;
    }

    public void setId_producto(Integer id_producto) {
        this.id_producto = id_producto;
    }

    public ProductoBeanGenSpImpl getObj_producto() {
        return obj_producto;
    }

    public void setObj_producto(ProductoBeanGenSpImpl obj_producto) {
        this.obj_producto = obj_producto;
    }

    public Integer getId_pedido() {
        return id_pedido;
    }

    public void setId_pedido(Integer id_pedido) {
        this.id_pedido = id_pedido;
    }

    public PedidoBeanGenSpImpl getObj_pedido() {
        return obj_pedido;
    }

    public void setObj_pedido(PedidoBeanGenSpImpl obj_pedido) {
        this.obj_pedido = obj_pedido;
    }
    
    
}