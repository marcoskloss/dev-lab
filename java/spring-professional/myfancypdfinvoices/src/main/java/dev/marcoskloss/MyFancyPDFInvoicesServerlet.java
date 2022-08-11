package dev.marcoskloss;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class MyFancyPDFInvoicesServerlet extends HttpServlet {
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
            res.setContentType("application/json; charset=UTF-8");
            res.getWriter().print("[]");
        }
    }
}
