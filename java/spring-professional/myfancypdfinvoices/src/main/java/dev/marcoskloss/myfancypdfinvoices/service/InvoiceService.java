package dev.marcoskloss.myfancypdfinvoices.service;

import dev.marcoskloss.myfancypdfinvoices.model.Invoice;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

public class InvoiceService {

    private List<Invoice> invoices = new CopyOnWriteArrayList<>();

    public List<Invoice> listAll() {
        return invoices;
    }

    public Invoice create(String userId, Integer amount) {
        String pdfUrl = "http://www.africau.edu/images/default/sample.pdf";
        Invoice invoice =  new Invoice(userId, pdfUrl, amount);
        invoices.add(invoice);
        return invoice;
    }
}
