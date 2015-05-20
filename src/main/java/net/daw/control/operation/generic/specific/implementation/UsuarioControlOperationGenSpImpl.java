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
package net.daw.control.operation.generic.specific.implementation;

import java.lang.reflect.InvocationTargetException;
import javax.servlet.http.HttpServletRequest;
import net.daw.control.operation.generic.implementation.ControlOperationGenImpl;
import net.daw.helper.ParameterCooker;
import net.daw.service.generic.specific.implementation.UsuarioServiceGenSpImpl;

public class UsuarioControlOperationGenSpImpl extends ControlOperationGenImpl {

    public UsuarioControlOperationGenSpImpl(HttpServletRequest request) throws ClassNotFoundException, NoSuchMethodException, InstantiationException, IllegalAccessException, IllegalArgumentException, InvocationTargetException, Exception {
        super(request);
    }

    @Override
    public String set(HttpServletRequest request) throws Exception {

        UsuarioServiceGenSpImpl oService = new UsuarioServiceGenSpImpl(strObject, "usuario", connection);
        String result = "";

        String strJson = ParameterCooker.prepareJson(request);
        if (request.getSession().getAttribute("usuarioBean") != null) {

            result = oService.set(strJson);
        } else {

            result = oService.registro(strJson);
        }

        return result;
    }

}
