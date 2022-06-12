import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionFactory {
    private String username = "root";
    private String password = "root-pass";
    public Connection connect() throws SQLException {
        Connection c = DriverManager.getConnection(
                "jdbc:mysql://localhost/store?useTimezone=true&serverTimezone=UTC",
                this.username,
                this.password
        );
        return c;
    }
}
