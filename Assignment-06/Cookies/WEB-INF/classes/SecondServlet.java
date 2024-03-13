import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class SecondServlet extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response) {
        try {
            response.setContentType("text/html");
            PrintWriter out = response.getWriter();

            Cookie[] cookies = request.getCookies();  // get all the cookies
            String userName = null;
            if (cookies != null) {    // if cookies is not empty
                for (Cookie i : cookies) {
                    if (i.getName().equals("user")) {
                        userName = i.getValue(); 	// Store the user name if there
                        break;
                    }
                }
            }

            if (userName != null) {
                out.print("Hello " + userName);
            } else {
                out.print("default user");
            }

            out.close();
        } catch(Exception e) {
            System.out.println(e);
        }
    }
}

