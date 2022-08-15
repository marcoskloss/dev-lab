package dev.marcoskloss.mybank;

import dev.marcoskloss.mybank.web.MybankServlet;
import org.apache.catalina.Context;
import org.apache.catalina.LifecycleException;
import org.apache.catalina.Wrapper;
import org.apache.catalina.startup.Tomcat;

public class ApplicationLauncher {
    public static void main(String[] args) throws LifecycleException {
        Tomcat tomcat = new Tomcat();
        tomcat.setPort(8080);
        tomcat.getConnector();

        Context context = tomcat.addContext("", null);
        Wrapper servlet = Tomcat.addServlet(context, "MybankServlet", new MybankServlet());
        servlet.setLoadOnStartup(1);
        servlet.addMapping("/transactions");

        tomcat.start();
        System.out.println("Server running at 8080");
    }
}
