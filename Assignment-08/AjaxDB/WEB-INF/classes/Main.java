import java.io.*;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.servlet.*;
import javax.servlet.http.*;

public class Main extends HttpServlet {
    private static final String URL = "jdbc:mysql://localhost:3306/courses";
    private static final String USERNAME = "root";
    private static final String PASSWORD = "password";

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

        String username = request.getParameter("name");

        try (Connection connection = DriverManager.getConnection(URL, USERNAME, PASSWORD)) {
            String sql = "SELECT * FROM books WHERE bname LIKE ?";
            try (PreparedStatement statement = connection.prepareStatement(sql)) {
                statement.setString(1, username + "%");

                try (ResultSet resultSet = statement.executeQuery()) {
                    out.println("<html><head><title>Search Results</title></head><body>");
                    out.println("<h2>Search Results</h2>");
                    out.println("<table border=\"1\">");
                    out.println("<tr><th>Book ID</th><th>Book Name</th><th>Quantity</th></tr>");

                    while (resultSet.next()) {
                        int bookId = resultSet.getInt("bid");
                        String bookName = resultSet.getString("bname");
                        int quantity = resultSet.getInt("quantity");

                        out.println(
                                "<tr><td>" + bookId + "</td><td>" + bookName + "</td><td>" + quantity + "</td></tr>");
                    }

                    out.println("</table>");
                    out.println("</body></html>");
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
