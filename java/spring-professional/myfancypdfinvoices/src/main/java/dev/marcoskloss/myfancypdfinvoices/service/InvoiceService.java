package dev.marcoskloss.myfancypdfinvoices.service;

import dev.marcoskloss.myfancypdfinvoices.context.Application;
import dev.marcoskloss.myfancypdfinvoices.model.Invoice;
import dev.marcoskloss.myfancypdfinvoices.model.User;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

public class InvoiceService {
    private final UserService userService;
    private List<Invoice> invoices = new CopyOnWriteArrayList<>();

    public InvoiceService(UserService userService) {
        this.userService = userService;
    }

    public List<Invoice> listAll() {
        return invoices;
    }

    public Invoice create(String userId, Integer amount) {
        User user = userService.findById(userId);
        if (user == null) {
            throw new IllegalStateException();
        }

        String pdfUrl = "http://www.africau.edu/images/default/sample.pdf";
        Invoice invoice =  new Invoice(userId, pdfUrl, amount);
        invoices.add(invoice);
        return invoice;
    }
}
