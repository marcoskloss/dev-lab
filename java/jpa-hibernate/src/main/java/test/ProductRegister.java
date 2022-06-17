package test;

import com.example.shop.dao.CategoryDAO;
import com.example.shop.dao.ProductDAO;
import com.example.shop.data.DbConnection;
import com.example.shop.model.Category;
import com.example.shop.model.Product;

import javax.persistence.EntityManager;
import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

public class ProductRegister {
    public static void main(String[] args) {
        Category phones = new Category("phone");
        Category food = new Category("food");

        Product phone = new Product();
        phone.setName("Pixel 5");
        phone.setDescription("Some cool description");
        phone.setPrice(new BigDecimal(5000));
        phone.setCategory(phones);

        Product banana = new Product(
            "banana",
            "fruit",
            BigDecimal.valueOf(5),
            food
        );


        DbConnection dbConn = new DbConnection();
        EntityManager em = dbConn.getEntityManager();

        em.getTransaction().begin();

        CategoryDAO categoryDAO = new CategoryDAO(em);
        categoryDAO.insert(phones);
        categoryDAO.insert(food);

        ProductDAO productDAO = new ProductDAO(em);
        productDAO.insert(phone);
        productDAO.insert(banana);

        Optional<Product> p = productDAO.findById(1L);
        p.ifPresent(product -> System.out.println(product.getName()));

        productDAO
            .findAll()
            .forEach(product -> System.out.println(product.getName()));

        Optional<Product> p2 = productDAO.findByName("Pixel 5");
        p2.ifPresent(product -> {
            System.out.println(
                    "Product: " + product.getName() +
                    " Category: " + product.getCategory().getName()
            );
        });

        Optional<BigDecimal> price = productDAO.findPriceByProductName("Pixel 5");
        price.ifPresent(System.out::println);

        Optional<Product> p3 = productDAO.findByCategoryName("food");
        p3.ifPresent(product -> System.out.println("ByCategoryName: " + product.getName()));

        System.out.println("FindByFilter V1:");
        List<Product> list = productDAO.findByFitler("Pixel 5", null);
        list.forEach(prod -> {
            System.out.println(prod.getName());
        });
        List<Product> list2 = productDAO.findByFitler(null, BigDecimal.valueOf(5000));
        list2.forEach(prod -> {
            System.out.println(prod.getName());
        });

        System.out.println("FindByFilter V2:");
        List<Product> list3 = productDAO.findByFitler("Pixel 5", null);
        list3.forEach(prod -> {
            System.out.println(prod.getName());
        });
        List<Product> list4 = productDAO.findByFilterV2(null, BigDecimal.valueOf(5));
        list4.forEach(prod -> {
            System.out.println(prod.getName());
        });

        System.out.println("FindByFilter V3 Criteria:");
        List<Product> list5 = productDAO.findByFitler("Pixel 5", null);
        list5.forEach(prod -> {
            System.out.println(prod.getName());
        });
        List<Product> list6 = productDAO.findByFilterV2(null, BigDecimal.valueOf(5));
        list6.forEach(prod -> {
            System.out.println(prod.getName());
        });

        em.getTransaction().commit();
        em.close();
    }
}
