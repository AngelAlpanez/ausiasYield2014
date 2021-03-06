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
package net.daw.control.operation.generic.implementation;

import java.lang.reflect.Constructor;
import java.sql.Array;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import javax.faces.application.ViewHandler;
import javax.faces.component.UIViewRoot;
import javax.faces.context.FacesContext;
import javax.servlet.http.HttpServletRequest;
import net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl;
import net.daw.control.operation.publicinterface.ControlOperationInterface;
import net.daw.service.generic.implementation.TableServiceGenImpl;
import net.daw.connection.implementation.BoneConnectionPoolImpl;
import net.daw.connection.publicinterface.ConnectionInterface;
import net.daw.helper.ExceptionBooster;
import net.daw.helper.FilterBeanHelper;
import net.daw.helper.ParameterCooker;

public class ControlOperationGenImpl implements ControlOperationInterface {

    protected ConnectionInterface DataConnectionSource = null;
    protected Connection connection = null;
    protected String strObject = null;
    //protected boolean perm;
    protected TableServiceGenImpl oService = null;
    UsuarioBeanGenSpImpl oUsuario = new UsuarioBeanGenSpImpl();

    public ControlOperationGenImpl(HttpServletRequest request) throws Exception {
        try {
            DataConnectionSource = new BoneConnectionPoolImpl();
            connection = DataConnectionSource.newConnection();
            strObject = ParameterCooker.prepareObject(request);
            Constructor oConstructor = Class.forName("net.daw.service.generic.specific.implementation." + ParameterCooker.prepareCamelCaseObject(request) + "ServiceGenSpImpl").getConstructor(String.class, String.class, Connection.class);
            oService = (TableServiceGenImpl) oConstructor.newInstance(strObject, strObject, connection);
                       
        } catch (Exception ex) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":ControlOperationGenImpl ERROR: " + ex.getMessage()));
        }
    }

    @Override
    public String get(HttpServletRequest request) throws Exception {
        String result = "";
        String ob = ParameterCooker.prepareObject(request);
        oUsuario = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
        if (oUsuario.getId_tipousuario() == 2 && !ob.equals("producto")) {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":get ERROR: no tienes permiso"));
        } else {
            result = oService.get(ParameterCooker.prepareId(request));
            closeDB();
        }
        return result;
    }

    @Override
    public String getaggregateviewone(HttpServletRequest request) throws Exception {
        String result = "";
        Integer id = ParameterCooker.prepareId(request);
        String ob = ParameterCooker.prepareObject(request);
        oUsuario = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
        if ((oUsuario.getId_tipousuario() == 1) || (oUsuario.getId() == id && ob.equals("usuario"))) {
            result = result = oService.getAggregateViewOne(ParameterCooker.prepareId(request));
            closeDB();
        }
        return result;
    }

    @Override
    public String getprettycolumns(HttpServletRequest request) throws Exception {
        String result = "";
        
        result = oService.getPrettyColumns();
        closeDB();
        

        return result;
    }

    @Override
    public String getcolumns(HttpServletRequest request) throws Exception {
        String result = "";
        
        result = oService.getColumns();
        closeDB();
        

        return result;
    }

    @Override
    public String getpage(HttpServletRequest request) throws Exception {
        String result = "";
        
        Integer intRegsPerPag = ParameterCooker.prepareRpp(request);
        Integer intPage = ParameterCooker.preparePage(request);
        ArrayList<FilterBeanHelper> alFilter = ParameterCooker.prepareFilter(request);
        HashMap<String, String> hmOrder = ParameterCooker.prepareOrder(request);
        result = oService.getPage(intRegsPerPag, intPage, alFilter, hmOrder);
        closeDB();
        

        return result;
    }

    @Override
    public String getpages(HttpServletRequest request) throws Exception {
        String result = "";
       
        Integer intRegsPerPag = ParameterCooker.prepareRpp(request);
        ArrayList<FilterBeanHelper> alFilter = ParameterCooker.prepareFilter(request);
        result = oService.getPages(intRegsPerPag, alFilter);
        closeDB();
        
        return result;
    }

    @Override
    public String getregisters(HttpServletRequest request) throws Exception {
        String result = "";
        
        ArrayList<FilterBeanHelper> alFilter = ParameterCooker.prepareFilter(request);
        result = oService.getCount(alFilter);
        closeDB();
        
        return result;
    }

    @Override
    public String getaggregateviewsome(HttpServletRequest request) throws Exception {
        String result = "";
        String ob = ParameterCooker.prepareObject(request);
        ArrayList filtro = ParameterCooker.prepareFilter(request);
        oUsuario = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
        if (request.getSession().getAttribute("usuarioBean") == null
                || oUsuario.getId_tipousuario() == 1
                || (oUsuario.getId_tipousuario() == 2 && ob.equals("producto"))
                || (oUsuario.getId_tipousuario() == 2 && ob.equals("pedido") && filtro.size() != 0)
                || (oUsuario.getId_tipousuario() == 2 && ob.equals("lineapedido") && filtro.size() != 0)
                ) {
            Integer intRegsPerPag = ParameterCooker.prepareRpp(request);
            Integer intPage = ParameterCooker.preparePage(request);
            ArrayList<FilterBeanHelper> alFilter = ParameterCooker.prepareFilter(request);
            HashMap<String, String> hmOrder = ParameterCooker.prepareOrder(request);
            result = oService.getAggregateViewSome(intRegsPerPag, intPage, alFilter, hmOrder);
            closeDB();
        } else {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":getaggregateviewsome ERROR: no tienes permiso"));
        }
        return result;
    }

    @Override
    public String remove(HttpServletRequest request) throws Exception {
        String result = "";
        Integer id = ParameterCooker.prepareId(request);
        oUsuario = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
        String ob = ParameterCooker.prepareObject(request);
        if (oUsuario.getId_tipousuario() == 1 || (oUsuario.getId() == id && ob.equals("usuario"))) {
            result = oService.remove(ParameterCooker.prepareId(request));
            if (oUsuario.getId() == id && ob.equals("usuario")) {
                request.getSession().invalidate();
            }
            closeDB();
        } else {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":remove ERROR: no tienes permiso"));
        }
        return result;
    }

    @Override
    public String set(HttpServletRequest request) throws Exception {
        String result = "";
        String ob = ParameterCooker.prepareObject(request);
        oUsuario = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
        if (oUsuario.getId_tipousuario() == 1 || 
                (request.getSession().getAttribute("usuarioBean") == null && ob.equals("usuario")) || 
                (oUsuario.getId_tipousuario() == 2 && !ob.equals("usuario"))) {
            result = oService.set(ParameterCooker.prepareJson(request));
            closeDB();
        } else {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":set ERROR: no tienes permiso"));
        }
        return result;
    }

    @Override
    public String updateOne(HttpServletRequest request) throws Exception {
        String result = "";
        Integer id2 = ParameterCooker.prepareId(request);
        String ob = ParameterCooker.prepareObject(request);
        oUsuario = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
        if (oUsuario.getId_tipousuario() == 1 || (oUsuario.getId() == id2 && ob.equals("usuario"))) {
            int id = Integer.parseInt(request.getParameter("id"));
            String tabla = request.getParameter("ob");
            String campo = request.getParameter("campo");
            String valor = request.getParameter("valor");

            result = oService.updateOne(id, tabla, campo, valor);
        } else {
            ExceptionBooster.boost(new Exception(this.getClass().getName() + ":updateOne ERROR: no tienes permiso"));
        }
        
        return result;
    }

    protected void closeDB() throws SQLException, Exception {
        if (connection != null) {
            connection.close();
        }
        DataConnectionSource.disposeConnection();
    }

}
