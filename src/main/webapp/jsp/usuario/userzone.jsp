<%@page import="net.daw.helper.EncodingUtilHelper"%>
<%@page import="net.daw.bean.generic.specific.implementation.UsuarioBeanGenSpImpl"%>
<%
    int id_tipousuario = 0, id_usuario = 0;
    String nombre = "", ciudad = "", direccion = "";
    UsuarioBeanGenSpImpl user = (UsuarioBeanGenSpImpl) request.getSession().getAttribute("usuarioBean");
    if (user != null) {
        id_tipousuario = user.getId_tipousuario();
        id_usuario = user.getId();
        nombre = user.getLogin();
        ciudad = EncodingUtilHelper.decodeURIComponent(user.getCiudad());
        direccion = EncodingUtilHelper.decodeURIComponent(user.getDireccion());
    }
%>

<div class="jumbotron">
    <p>Usuario: <%=nombre%><br />
    Ciudad: <%=ciudad%><br />
    Direccion: <%=direccion%></p>
    
</div>
