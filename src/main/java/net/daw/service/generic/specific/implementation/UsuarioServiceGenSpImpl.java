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
package net.daw.service.generic.specific.implementation;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import net.daw.service.generic.implementation.TableServiceGenImpl;
import java.sql.Connection;
import java.util.HashMap;
import java.util.Map;
import net.daw.bean.generic.specific.implementation.ActividadBeanGenSpImpl;
import net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl;
import net.daw.dao.generic.specific.implementation.UsuarioDaoGenSpImpl;
import net.daw.dao.specific.implementation.ActividadDaoSpcImpl;
import net.daw.helper.EncodingUtilHelper;
import net.daw.helper.ExceptionBooster;

public class UsuarioServiceGenSpImpl extends TableServiceGenImpl {

    public UsuarioServiceGenSpImpl(String strObject, String pojo, Connection con) {
        super(strObject, pojo, con);
    }

    
        
    public String registro(String jason) throws Exception {
        String resultado = null;
        try {
            oConnection.setAutoCommit(false);
            UsuarioDaoGenSpImpl oUsuarioDAO = new UsuarioDaoGenSpImpl(strObjectName, oConnection);
            UsuarioBeanGenSpImpl oUsuario = new UsuarioBeanGenSpImpl();
            Gson gson = new GsonBuilder().setDateFormat("dd/MM/yyyy").create();
            jason = EncodingUtilHelper.decodeURIComponent(jason);
            oUsuario = gson.fromJson(jason, oUsuario.getClass());
            
            oUsuario.setId_tipousuario(2);
            
            
            oUsuario = oUsuarioDAO.set(oUsuario);
            Map<String, String> data = new HashMap<>();
            data.put("status", "200");
            data.put("message", Integer.toString(oUsuario.getId()));
            resultado = gson.toJson(data);
            oConnection.commit();
        } catch (Exception ex) {
            oConnection.rollback();
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: " + ex.getMessage()));
        }
        return resultado;
    }
    
    
}
