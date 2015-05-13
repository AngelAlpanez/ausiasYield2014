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
<% UsuarioBeanGenSpImpl oUsuario = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean"); %>
<% if (oUsuario == null) { %>
<div class="row">
    <div class="col-md-7 col-md-offset-3 loginFinal">    
        <h1>Nombre de usuario o contraseña incorrectos.</h1>
        <h4>Por favor, inténtelo de nuevo.</h4>
        <a href="jsp?op=login01&ob=usuario" >Reintentar</a>
        <% } else {%>
        <h1>Vd. ha entrado en el sistema</h1>
        <h4>Bienvenido, <%=oUsuario.getLogin()%>. Ahora puede operar con los menús de la aplicación.</h4>
        <% }%>
    </div>
</div>