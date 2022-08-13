package dev.marcoskloss.myfancypdfinvoices;

import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

public class MyFancyPDFInvoicesServerlet extends HttpServlet {

    private InvoiceService invoiceService = new InvoiceService();
    private ObjectMapper objMapper = new ObjectMapper();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        String reqUrl = req.getRequestURI();
        if (reqUrl.equals("/")) {
            res.setContentType("text/html; charset=UTF-8");
            res.getWriter().print(
                    "<html>\n" +
                    "<body>" +
                    "<h1>hello world</h1>\n" +
                    "<h3>my first servlet with embedded Tomcat, yayy!</h3>\n" +
                    "</body>\n" +
                    "</html>"
            );
        } else if(reqUrl.equalsIgnoreCase("/invoices")) {
            List<Invoice> invoices = invoiceService.listAll();
            String json = objMapper.writeValueAsString(invoices);
            res.setContentType("application/json; charset=UTF-8");
            res.getWriter().print(json);
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
        String reqUrl = req.getRequestURI();
        if (reqUrl.equalsIgnoreCase("/invoices")) {
            String userId = req.getParameter("user_id");
            Integer amount = Integer.valueOf(req.getParameter("amount"));

            Invoice invoice = invoiceService.create(userId, amount);
            String json = objMapper.writeValueAsString(invoice);

            res.setContentType("application/json; charset=UTF-8");
            res.getWriter().print(json);
        } else {
            res.setStatus(HttpServletResponse.SC_NOT_FOUND);
        }
    }
}
