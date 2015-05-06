package net.daw.imagenes;

import java.io.File;
import java.io.IOException;
import java.sql.Connection;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.JOptionPane;
import net.daw.bean.generic.specific.implementation.ProductoBeanGenSpImpl;
import net.daw.connection.implementation.BoneConnectionPoolImpl;
import net.daw.connection.publicinterface.ConnectionInterface;
import net.daw.dao.generic.specific.implementation.ProductoDaoGenSpImpl;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

public class subir extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        response.setContentType("text/html;charset=UTF-8");
        String name = "";
        String strMessage="";
        if (ServletFileUpload.isMultipartContent(request)) {
            try {
                List<FileItem> multiparts = new ServletFileUpload(new DiskFileItemFactory()).parseRequest(request);
                for (FileItem item : multiparts) {
                    if (!item.isFormField()) {
                        name = new File(item.getName()).getName();
                        item.write(new File(".//..//webapps//images//" + name));
                    }
                }
                strMessage = "<h1>File Uploaded Successfully</h1>";
                strMessage += "<img src=\"" + "http://" + request.getServerName() + ":" + request.getServerPort() + "/" + "/images/" + name + "\"  width=\"150\" /><br/>";
                strMessage += "<a href=\""+"http://" + request.getServerName() + ":" + request.getServerPort() + "/juploading" + "\">Return</a><br/>";
                request.setAttribute("message", strMessage);
                
            ConnectionInterface  DataConnectionSource = new BoneConnectionPoolImpl();
            Connection oConnection = DataConnectionSource.newConnection();
                        
            ProductoBeanGenSpImpl oProductoBean = new ProductoBeanGenSpImpl();
            ProductoDaoGenSpImpl oProductoDAO= new ProductoDaoGenSpImpl("producto",oConnection);
            oProductoDAO.get(oProductoBean, oProductoBean.getId());
            JOptionPane.showMessageDialog(null, oProductoBean.getId());
                //update del campo imagen de la base de datos
                
                
                
            } catch (Exception ex) {
                request.setAttribute("message", "File Upload Failed: " + ex);
                strMessage += "<a href=\""+"http://" + request.getServerName() + ":" + request.getServerPort() + "/juploading" + "\">Return</a><br/>";
            }
        } else {
            request.setAttribute("message", "Only serve file upload requests");
            strMessage += "<a href=\""+"http://" + request.getServerName() + ":" + request.getServerPort() + "/juploading" + "\">Return</a><br/>";
        }
        request.getRequestDispatcher("/result.jsp").forward(request, response);
    }

// <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}