import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class TestConnection {
    public TestConnection() {}

    public static void main(String[] args) throws SQLException  {
        Connection connection = DriverManager.getConnection(
            "jdbc:mysql://localhost/store?useTimezone=true&serverTimezone=UTC",
            "root",
            "root-pass"
        );
        connection.close();
    }
}
