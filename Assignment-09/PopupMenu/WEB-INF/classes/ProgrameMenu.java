import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class ProgrameMenu extends HttpServlet {

    static {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            throw new RuntimeException("Error loading MySQL JDBC driver", e);
        }
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        try (
                Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/courses", "root",
                        "password");
                Statement stmt = conn.createStatement();) {
            String sql = "SELECT toolname FROM development WHERE type='programming'";
            ResultSet result = stmt.executeQuery(sql);
            int rowCount = 0;

            while (result.next()) {
                String toolName = result.getString("toolname");
                out.println("<p>" + toolName + " </p>");
            }
        } catch (Exception e) {
            // TODO: handle exception
        }

        out.close();
    }
}