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
<% UsuarioBeanGenSpImpl oUsuario = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean"); 
int id_usuario = oUsuario.getId();
%>

<div class="row">
    <div class="col-md-7 col-md-offset-3 loginFinal"> 
        <% if (oUsuario == null) { %>
        <h1>Nombre de usuario o contrase�a incorrectos.</h1>
        <h4>Por favor, int�ntelo de nuevo.</h4>
        <a href="jsp?op=login01&ob=usuario" >Reintentar</a>
        <% } else {%>
        <h1>Has iniciado sesi�n correctamente.</h1>
        Bienvenido, <%=oUsuario.getLogin()%>.
        Puedes ver tu <a href="jsp#/perfil/view/<%=id_usuario%>" >perfil</a> y realizar compras.
        <% }%>
    </div>
</div>