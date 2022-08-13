package dev.marcoskloss.myfancypdfinvoices.context;

import com.fasterxml.jackson.databind.ObjectMapper;
import dev.marcoskloss.myfancypdfinvoices.service.InvoiceService;
import dev.marcoskloss.myfancypdfinvoices.service.UserService;

public class Application {
    public static final UserService userService = new UserService();
    public static final InvoiceService invoiceService = new InvoiceService(userService);
    public static final ObjectMapper objMapper = new ObjectMapper();
}
