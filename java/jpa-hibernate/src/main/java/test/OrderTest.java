package test;

import com.example.shop.dao.*;
import com.example.shop.data.DbConnection;
import com.example.shop.model.*;

import javax.persistence.EntityManager;
import java.math.BigDecimal;
import java.util.Optional;

public class OrderTest {
    public static void setupDB(EntityManager em) {
        Category category = new Category("phone");

        new CategoryDAO(em).insert(category);
        Product product = new Product(
            "Pixel 5",
            "Some cool description",
            BigDecimal.valueOf(5000),
            category
        );
        new ProductDAO(em).insert(product);
    }


    public static void main(String[] args) {
        DbConnection dbConn = new DbConnection();
        EntityManager em = dbConn.getEntityManager();

        em.getTransaction().begin();

        setupDB(em);

        Client client = new Client("John Doe", "1245");
        ClientDAO clientDAO = new ClientDAO(em);
        clientDAO.insert(client);

        Order order = new Order(client);
        Optional<Product> optP = new ProductDAO(em).findById(1L);
        Product p = optP.get();

        order.addOrderItem(new OrderItem(10, p, order));

        OrderDAO orderDAO = new OrderDAO(em);
        orderDAO.insert(order);

        em.getTransaction().commit();
        em.close();
    }
}
