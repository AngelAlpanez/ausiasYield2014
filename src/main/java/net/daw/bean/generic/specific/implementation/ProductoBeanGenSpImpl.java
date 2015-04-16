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

import com.google.gson.annotations.Expose;
import net.daw.bean.generic.implementation.BeanGenImpl;
import net.daw.bean.publicinterface.BeanInterface;

/**
 *
 * @author rafa
 */
public class ProductoBeanGenSpImpl extends BeanGenImpl implements BeanInterface {

    public ProductoBeanGenSpImpl() {
    }

    public ProductoBeanGenSpImpl(Integer id) {
        super(id);
    }
    
    @Expose
    private String nombre = "";
    
    @Expose
    private Double precio = 0.0;
    
    @Expose
    private Integer stock = 0;
    
    @Expose
    private String imagen = "";
    
    @Expose(serialize = false)
    private Integer id_tipoproducto = 0;
    @Expose(deserialize = false)
    private TipoproductoBeanGenSpImpl obj_tipoproducto = null;

    
    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public Integer getId_tipoproducto() {
        return id_tipoproducto;
    }

    public void setId_tipoproducto(Integer id_tipoproducto) {
        this.id_tipoproducto = id_tipoproducto;
    }

    public TipoproductoBeanGenSpImpl getObj_tipoproducto() {
        return obj_tipoproducto;
    }

    public void setObj_tipoproducto(TipoproductoBeanGenSpImpl obj_tipoproducto) {
        this.obj_tipoproducto = obj_tipoproducto;
    }
    

}
