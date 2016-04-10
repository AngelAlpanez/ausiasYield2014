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

<%@page import="net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl"%>
<%UsuarioBeanGenSpImpl user = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
    if (user != null) {
        String us = user.getLogin();
        String usuario = us.substring(0, 1).toUpperCase() + us.substring(1);
        Integer id_usuario = user.getId();
%>
<li><a href="jsp#/perfil/view/<%=id_usuario%>"><span class="icon-suitcase"></span>Perfil ( <%=usuario%> )</a></li>
<li><a href="jsp?ob=usuario&op=logout"><span class="icon-suitcase"></span>Cerrar Sesión</a></li>
    <%} else {%>
<li><a href="jsp?op=login01&ob=usuario"><span class="icon-suitcase"></span>Iniciar Sesión</a></li>
<li><a href="jsp#/usuario/new"><span class="icon-suitcase"></span>Registrarse</a></li><%}%>