import java.io.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.servlet.*;
import javax.servlet.http.*;

public class Main extends HttpServlet {
    private static final String URL = "jdbc:mysql://localhost:3306/authwebapp";
    private static final String USERNAME = "user1";
    private static final String PASSWORD = "10Red@pple";

    static {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            throw new RuntimeException("Error loading MySQL JDBC driver", e);
        }
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws IOException, ServletException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String username = request.getParameter("username");
        String password = request.getParameter("password");

        try (Connection connection = DriverManager.getConnection(URL, USERNAME, PASSWORD)) {
            String sql = "SELECT * FROM myusers WHERE username = ? AND passwd = ?";
            try (PreparedStatement statement = connection.prepareStatement(sql)) {
                statement.setString(1, username);
                statement.setString(2, password);

                try (ResultSet resultSet = statement.executeQuery()) {
                    if (resultSet.next()) {
                        out.println("<html><head><title>Login Success</title></head><body>");
                        out.println("<h2>Login Success</h2>");
                        out.println("<h2>Hello  " + username + "!</h2>");
                        out.println("</body></html>");
                    } else {
                        out.println("<html><head><title>User Not Found</title></head><body>");
                        out.println("<h2>User Not Found</h2>");
                        out.println("</body></html>");
                    }
                }
            }
        } catch (SQLException e) {
            out.println("<html><head><title>Database Error</title></head><body>");
            out.println("<h2>Database Error</h2>");
            out.println("<p>" + e.getMessage() + "</p>");
            out.println("</body></html>");
        }
    }
}
