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

<%@page import="net.daw.helper.EstadoHelper"%>
<div class="container">
    <div class="row">
        <div class="col-sm-6 col-md-6 col-md-offset-2 login">
            <img src="./images/login.png" />
            <h1>Iniciar sesión</h1>
            <form class="form-signin" id="loginForm" action="jsp" role="form" method="post">                                    
                <input type="hidden" name="ob" value="usuario" />
                <input type="hidden" name="op" value="login02" />                
                
                <label class="control-label" for="inputLogin" style="margin-top: 15px">Usuario:</label>
                <input value="rafael" class=""  id="inputLogin" type="text" placeholder="Nombre de usuario" required="" autofocus="" name="login" /><br />
                
                <label class="control-label" for="password" style="margin-top: 15px">Contraseña:</label>
                <input value="rafael" class="" type="password" id="inputPassword" placeholder="Contraseña"  required="" name="password" />                                                               
                               
                <button class="loginButton" type="submit"  style="margin-top: 15px">Iniciar sesión</button>
                
                <a href="http://localhost:8081/ausiasYield2014/jsp#/usuario/new">Registrarse</a>
            </form>
        </div>
    </div>
</div>


