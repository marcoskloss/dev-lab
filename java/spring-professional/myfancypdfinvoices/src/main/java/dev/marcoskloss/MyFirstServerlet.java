package dev.marcoskloss;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class MyFirstServerlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("text/html; charset=UTF-8");
        resp.getWriter().print(
                "<html>\n" +
                "<body>" +
                "<h1>hello world</h1>\n" +
                "<h3>my first servlet with embedded Tomcat, yayy!</h3>\n" +
                "</body>\n" +
                "</html>"
        );
    }
}
