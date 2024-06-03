import React from "react";
import "./springboot.css";

function Springboot() {
  return (
    <div className="springboot-container">
      <div>
        <h1 className="topic">Spring Boot</h1>
      </div>
      <div>
        <p className="question">What is Spring Boot?</p>{" "}
        <p className="indent">
          Spring Boot is a framework for building web applications using the
          Java programming language.
        </p>{" "}
      </div>
      <div>
        <p className="question">Why should we use Spring Boot Framework?</p>{" "}
        <p className="indent">
          <ul>
            <li>
              The dependency injection approach is used in Spring
              Boot.(Dependency injection in software, when one part of a program
              needs another part to work properly,instead of that part going out
              and finding what it needs, we "inject" it in. This means we give
              it what it needs,so it can do its job without having to worry
              about finding them itself.)
            </li>
          </ul>
        </p>{" "}
        <p className="indent">
          <ul>
            <li>
              It contains highly effective database transaction management
              features
            </li>
          </ul>
        </p>{" "}
        <p className="indent">
          <ul>
            <li>
              It reduces the development time and cost of the application.
            </li>
          </ul>
        </p>{" "}
      </div>

      <div>
        <p className="question">Advantages of Spring Boot</p>{" "}
        <p className="indent">
          <ul>
            <li>
              It creates stand-alone Spring applications that can run by using
              Java.
            </li>
          </ul>
        </p>{" "}
        <p className="indent">
          <ul>
            <li>
              It's easy to test web apps using built-in servers like Tomcat or
              Jetty, so there's no need to deploy WAR files.
            </li>
          </ul>
        </p>{" "}
      </div>
      <div>
        <p className="question">Goals of Spring Boot</p>{" "}
        <p className="indent">
          <ul>
            <li>
              The main goal of Spring Boot is to reduce development, unit test,
              and integration test time.
            </li>
          </ul>
        </p>{" "}
        <p className="indent">
          <ul>
            <li>Spring Boot Framework is widely used to develop REST APIs.</li>
          </ul>
        </p>{" "}
      </div>
      <div>
        <p className="question">
          Spring Boot follows a layered architecture in which each layer
          communicates with the layer directly below or above (hierarchical
          structure) it.
        </p>{" "}
        <img
          src={`${process.env.PUBLIC_URL}/assets/layeredArchitecture.jpg`}
          alt="Layered Architecture"
        />
      </div>
      <div>
        <p className="question">Spring Boot Annotations</p>{" "}
        <p className="indent">
          Spring Boot annotations are like labels to tell the Spring Boot
          framework how to set up and run your application. They help us to do
          things like define what parts of our code should be treated as special
          components, handle requests from users, and manage other features of
          our application.
        </p>
        <p className="indent">Core Spring Framework Annotations</p>
        <p className="indent">
          <ul>
            <li>
              "@Required" -> The @Required annotation in Spring is a tag you put
              on a variable to say it's necessary for your program to work. It's
              like a "must-have" sticker, ensuring that specific parts of your
              code are properly set up before running.
            </li>
          </ul>
        </p>{" "}
        <p className="indent">
          <ul>
            <li>
              "@Autowired" -> @Autowired in Spring is like a helpful hand that
              automatically connects parts of your code together. You just tag
              something with @Autowired, and Spring figures out what to connect
              where, saving you time and effort.
            </li>
          </ul>
          <ul>
            <li>
              "@Controller" -> It is a class-level annotation. It marks a class
              as a web request handler.
            </li>
          </ul>
          <ul>
            <li>
              "@Service" -> It is also used at class level. It tells the Spring
              that class contains the business logic.
            </li>
          </ul>
          <ul>
            <li>
              "@Repository" -> It is a class-level annotation. The repository is
              a DAOs (Data Access Object) that access the database directly. The
              repository does all the operations related to the database.
            </li>
          </ul>
          <ul>
            <li>
              "@RequestMapping" -> It is used to map the web requests. We use it
              with the class as well as the method.
            </li>
          </ul>
        </p>{" "}
      </div>
      <div>
        <p className="question">Spring Boot Actuators</p>{" "}
        <p className="indent">
          Actuators in Spring Boot as built-in tools that provide you with
          information, how your application is performing and functioning in a
          production environment. Here's why they're useful:
        </p>
        <p className="indent">
          <ul>
            <li>
              Monitoring: Actuators offer endpoints that expose information
              about your application's health, such as whether it's up and
              running, its database status, memory usage, and more. This
              monitoring capability allows you to quickly check the health of
              your application without relying on external monitoring tools.
            </li>
          </ul>
        </p>{" "}
        <p className="indent">
          <ul>
            <li>
              Management: Actuators also provide endpoints for managing your
              application, such as shutting it down or restarting it. This can
              be particularly helpful for deploying and maintaining your
              application in production environments, as you can perform certain
              administrative tasks without having to directly access the server.
            </li>
          </ul>
          <ul>
            <li>
              Debugging and Diagnostics: Actuator endpoints can provide detailed
              information about various aspects of your application, such as its
              configuration, environment variables, request mappings, and more.
              This information is invaluable for debugging issues, diagnosing
              performance problems, and optimizing your application.
            </li>
          </ul>
          <ul>
            <li>
              Integration with Monitoring Systems: Many monitoring systems, such
              as Prometheus or Grafana, can integrate with Actuators to collect
              and visualize application metrics over time. This allows you to
              gain deeper insights into the behavior of your application and
              make data-driven decisions about performance optimization and
              resource allocation.
            </li>
          </ul>
          <p className="indent">
            Overall, Actuators simplify the process of monitoring and managing
            Spring Boot applications in production environments, providing
            essential visibility and control over your application's runtime
            behavior. They help you ensure that your application is running
            smoothly, diagnose and resolve issues quickly, and optimize
            performance for better user experience.
          </p>
        </p>{" "}
      </div>
      <div>
        <p className="question">Spring Boot Starter Test</p>{" "}
        <p className="indent">
          Spring Boot Starter Test is a dependency in Spring Boot that provides
          utilities and tools for testing Spring Boot applications. It's
          typically included in your project's pom.xml or build.gradle file as a
          dependency when you create a Spring Boot project.
        </p>
        <p className="indent">
          <ul>
            <li>
              Testing Infrastructure: Spring Boot Starter Test includes
              essential testing infrastructure for writing unit, integration,
              and end-to-end tests for your Spring Boot applications. It
              provides a set of annotations, utilities, and configurations that
              simplify the testing process.
            </li>
          </ul>
        </p>{" "}
        <p className="indent">
          <ul>
            <li>
              Integration with Testing Frameworks: Spring Boot Starter Test
              integrates seamlessly with popular testing frameworks like JUnit
              and TestNG. It automatically configures these frameworks to work
              smoothly with Spring Boot, allowing you to write tests using
              familiar syntax and conventions.
            </li>
          </ul>
          <ul>
            <li>
              ApplicationContext: Spring Boot Starter Test sets up and manages
              an ApplicationContext for your tests. This ApplicationContext
              provides the necessary environment for testing your Spring
              components, including beans, configurations, and dependencies.
            </li>
          </ul>
          <ul>
            <li>
              Embedded Server: For integration and end-to-end testing, Spring
              Boot Starter Test can spin up an embedded server (such as an
              embedded Tomcat or Jetty server) to run your application in a
              testing environment. This allows you to test your application in a
              realistic runtime environment without the need for external
              servers.
            </li>
          </ul>
          <p className="indent">
            Auto-configuration: Spring Boot Starter Test automatically
            configures your tests with sensible defaults, reducing the amount of
            boilerplate code you need to write. It scans your project for Spring
            components and wires them up appropriately, so you can focus on
            writing test cases rather than setting up the test environment.
          </p>
        </p>{" "}
      </div>
      <div>
        <p className="question">What is Spring Boot DevTools?</p>{" "}
        <p className="indent">
          Spring Boot DevTools is a set of tools that helps developers build
          applications more efficiently. It provides features that make the
          development process easier and faster.
        </p>
        <p className="indent">
          <ul>
            <li>
              Automatic Restart: When you make changes to your code, DevTools
              can automatically restart your application. This means you can see
              the effects of your changes almost immediately, without manually
              stopping and starting your application.
            </li>
          </ul>
        </p>{" "}
        <p className="indent">
          <ul>
            <li>
              LiveReload: DevTools can work with LiveReload, a browser extension
              that refreshes the web page automatically whenever you make
              changes to the front-end resources (like HTML, CSS, and
              JavaScript). This saves you from having to manually refresh your
              browser to see changes.
            </li>
          </ul>
          <ul>
            <li>
              Imagine you're developing a web application using Spring Boot.
              Without DevTools, every time you make a change to your code, you
              would have to:
              <ul>
                <li>Stop the application.</li>
                <li>Restart the application.</li>
                <li>Wait for it to load.</li>
                <li>Manually refresh your browser to see the changes.</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              With Spring Boot DevTools:
              <ul>
                <li>You make a change to your code.</li>
                <li>DevTools automatically restarts the application.</li>
                <li>LiveReload refreshes your browser.</li>
                <li>You see the changes almost instantly.</li>
              </ul>
            </li>
          </ul>
        </p>{" "}
      </div>
      <div>
        <p className="question">What is Auto-Configuration?</p>{" "}
        <p className="indent">
          Auto-configuration is a feature of Spring Boot that automatically sets
          up your application based on the dependencies you have added to it.
        </p>
        <p className="indent">
          <ul>
            <li>
              How Does Auto-Configuration Work?
              <ul>
                <li>
                  Dependencies: When you add a dependency (a library or module)
                  to your project, like a database or a web server, Spring Boot
                  detects it.
                </li>
                <li>
                  Configuration: Based on these dependencies, Spring Boot
                  automatically configures your application to work with them.
                  You don't have to manually write all the setup code.
                </li>
              </ul>
            </li>
          </ul>
        </p>{" "}
        <p className="indent">
          <ul>
            <li>
              Why is Auto-Configuration Useful?
              <ul>
                <li>
                  Saves Time: You don’t have to manually configure each
                  component you want to use.
                </li>
                <li>
                  Reduces Errors: Automatic configuration reduces the chances of
                  misconfigurations and mistakes.
                </li>
                <li>
                  Simplifies Development: Lets you focus on writing business
                  logic rather than boilerplate setup code.
                </li>
              </ul>
            </li>
          </ul>
        </p>{" "}
      </div>
      <div>
        <p className="question">What is Spring Boot Data JPA ?</p>{" "}
        <p className="indent">
          Data JPA: A Spring module that helps manage database operations using
          Java Persistence API (JPA), which is a standard way to interact with
          relational databases.
        </p>
        <p className="indent">
          <ul>
            <li>
              Key Features:
              <ul>
                <li>
                  Simplified Database Operations: It reduces boilerplate code
                  for common database tasks.
                </li>
                <li>
                  Repository Interfaces: You can define repository interfaces to
                  handle CRUD (Create, Read, Update, Delete) operations without
                  writing implementations.
                </li>
                <li>
                  Automatic Queries: It can generate queries automatically based
                  on method names in your repository interfaces.
                </li>
                <li>
                  Integration: Easily integrates with popular relational
                  databases like MySQL, PostgreSQL, etc.
                </li>
              </ul>
            </li>
          </ul>
        </p>{" "}
      </div>
      <div>
        <p className="question">What is Spring Boot JDBC?</p>{" "}
        <p className="indent">
          It allows you to easily set up a database connection and run SQL
          queries in a Spring Boot application.
        </p>
        <p className="indent">
          <ul>
            <li>
              Key Features:
              <ul>
                <li>
                  Automatic Configuration: Spring Boot auto-configures the
                  necessary beans to use JDBC, so you don’t have to manually set
                  up everything.
                </li>
                <li>
                  DataSource Configuration: It provides simple ways to configure
                  the data source
                </li>
              </ul>
            </li>
          </ul>
        </p>{" "}
      </div>
      <div>
        <p className="question">What is CRUD Operation?</p>{" "}
        <p className="indent">
          CRUD operations are the basic actions you can perform on data in a
          database. They stand for Create, Read, Update, and Delete, and they
          enable you to add, retrieve, modify, and remove data, respectively.
        </p>
      </div>
      <div>
        <p className="question">What is Spring Boot Caching?</p>{" "}
        <p className="indent">
          Spring Boot Caching helps you store and retrieve data quickly by using
          an in-memory cache. It reduces the time spent on repeated data
          fetching or computations, thus improving the performance of your
          application. By enabling caching, creating caches, and using
          annotations like @Cacheable, you can easily integrate caching into
          your Spring Boot application.
        </p>
      </div>
      <div>
        <p className="question">
          What are RESTful Web Services in Spring Boot ?
        </p>{" "}
        <p className="indent">
          RESTful web services are a way for different applications to
          communicate over the internet using standard web protocols. Spring
          Boot makes it easier to create these services. Here's a breakdown:
        </p>
        <p className="indent">
          <ul>
            <li>
              Resources: Things like data or objects (e.g., users, orders) that
              you want to manage.
            </li>
          </ul>
          <ul>
            <li>
              HTTP Methods: Actions you can perform on resources:
              <ul>
                <li>GET: Retrieve data.</li>
                <li>POST: Create new data.</li>
                <li>PUT: Update existing data.</li>
                <li>DELETE: Remove data.</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              Stateless: Each request from a client to the server must contain
              all the information needed, and the server doesn't store any
              client data between requests.
            </li>
          </ul>
          <ul>
            <li>
              Representation: Resources are typically represented in formats
              like JSON or XML when sent over the web.
            </li>
          </ul>
          <ul>
            <li>
              Spring Boot: A framework that simplifies creating web applications
              in Java. It provides:
              <ul>
                <li>Controllers: Handle HTTP requests.</li>
                <li>Repositories: Manage data access.</li>
                <li>Services: Contain business logic.</li>
              </ul>
            </li>
          </ul>
        </p>{" "}
      </div>
    </div>
  );
}

export default Springboot;
