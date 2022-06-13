package test;

import com.example.shop.dao.CategoryDAO;
import com.example.shop.dao.ProductDAO;
import com.example.shop.data.DbConnection;
import com.example.shop.model.Category;
import com.example.shop.model.Product;

import javax.persistence.EntityManager;
import java.math.BigDecimal;
import java.util.Optional;

public class ProductRegister {
    public static void main(String[] args) {
        Category phones = new Category("phone");

        Product phone = new Product();
        phone.setName("Pixel 5");
        phone.setDescription("Some cool description");
        phone.setPrice(new BigDecimal(5000));
        phone.setCategory(phones);

        DbConnection dbConn = new DbConnection();
        EntityManager em = dbConn.getEntityManager();

        em.getTransaction().begin();

        CategoryDAO categoryDAO = new CategoryDAO(em);
        categoryDAO.insert(phones);

        ProductDAO productDAO = new ProductDAO(em);
        productDAO.insert(phone);

        Optional<Product> p = productDAO.findById(1L);
        p.ifPresent(product -> System.out.println(product.getName()));

        productDAO
            .findAll()
            .forEach(product -> System.out.println(product.getName()));

        Optional<Product> p2 = productDAO.findByName("Pixel 5");
        p2.ifPresent(product -> System.out.println("ByName: " + product.getName()));

        Optional<Product> p3 = productDAO.findByCategoryName("phone");
        p3.ifPresent(product -> System.out.println("ByCategoryName: " + product.getName()));

        Optional<BigDecimal> price = productDAO.findPriceByProductName("Pixel 5");
        price.ifPresent(System.out::println);

        em.getTransaction().commit();
        em.close();
    }
}
