import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class SoftwareMenu extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String[] software = { "Git", "VScode" };

        out.println("<ol>");
        for (int i = 0; i < software.length; i++) {
            out.println("<li>" + software[i] + "</li>");
        }
        out.println("</ol>");
        out.close();
    }
}