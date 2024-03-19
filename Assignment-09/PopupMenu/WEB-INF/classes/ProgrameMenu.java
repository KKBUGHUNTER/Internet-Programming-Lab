import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class ProgrameMenu extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String[] program = { "Java", "JavaScript" };

        out.println("<ol>");
        for (int i = 0; i < program.length; i++) {
            out.println("<li>" + program[i] + "</li>");
        }
        out.println("</ol>");
        out.close();
    }
}