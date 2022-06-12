import java.sql.*;

public class TestSql {
    public static void main(String[] args) throws SQLException {
        ConnectionFactory connectionFactory = new ConnectionFactory();
        Connection c = connectionFactory.connect();

        Statement stm = c.createStatement();
        stm.execute("SELECT * FROM product");

        ResultSet result = stm.getResultSet();
        while(result.next()) {
            Integer id = result.getInt("id");
            String name = result.getString("name");
            String description = result.getString("description");
            System.out.println(id);
            System.out.println(name);
            System.out.println(description);
        }
        c.close();
    }
}
