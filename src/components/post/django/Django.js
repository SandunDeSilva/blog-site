import React from "react";
import "./django.css";

function Django() {
  return (
    <div className="django-container">
      <div>
        <h1 className="topic">Django</h1>
      </div>
      <div>
        <p className="question">What is Django?</p>{" "}
        <p className="indent">
          Django is a back-end server side web framework. Django makes it easier
          to build web pages using Python. Django is especially helpful for
          database driven websites.
        </p>{" "}
      </div>
      <div>
        <p className="question">How does Django Work?</p>{" "}
        <p className="indent">
          Django follows the MVT design pattern (Model View Template).
          <div>
            <ul>
              <li>
                Model - The data you want to present, usually data from a
                database.
              </li>
              <li>
                View - A request handler that returns the relevant template and
                content - based on the request from the user.
              </li>
              <li>
                Template - A text file (like an HTML file) containing the layout
                of the web page, with logic on how to display the data.
              </li>
            </ul>
          </div>
        </p>{" "}
      </div>
      <div>
        <p className="question">Why Use Virtual Environments in Django?</p>{" "}
        <p className="indent">
          <div>
            <ul>
              <li>
                <b>Avoiding Conflicts:</b> Different Django projects might
                require different versions of Django or other packages. Virtual
                environments prevent these dependencies from clashing.
              </li>
              <li>
                <b>Ease of Collaboration:</b> Sharing the requirements.txt file
                allows team members to set up an identical development
                environment, simplifying collaboration and reducing "works on my
                machine" problems.
              </li>
              <li>
                <b>Project Portability:</b> Virtual environments ensure that
                your project can be easily moved between different systems
                without dependency issues.
              </li>
            </ul>
          </div>
        </p>{" "}
      </div>
      <div>
        <p className="question">What is an App in Django?</p>{" "}
        <p className="indent">
          In Django, an app is a module that does one specific job in your
          project. Think of an app as a building block or a component that adds
          a specific feature or function to your website.
          <div>
            <ul>
              <li>
                <b>Small and Specific:</b> An app is designed to handle one
                thing, like managing user accounts, blogs, or a shopping cart.
              </li>
              <li>
                <b>Reusable:</b> You can take an app you built for one project
                and use it in another project.
              </li>
              <li>
                <b>Independent:</b> Each app is somewhat self-contained, making
                it easier to manage and develop.
              </li>
            </ul>
          </div>
        </p>{" "}
      </div>
      <div>
        <p className="question">What Are Django Views?</p>{" "}
        <p className="indent">
          Django views are like the control center of your web application,
          managing how user requests are handled and what is displayed on the
          user's screen.
          <div>
            <ul>
              <li>
                Views are like a bridge between your app’s data and what the
                user sees on their screen.
              </li>
              <li>
                When a user requests a page (like typing a URL in their
                browser), Django sends this request to a view.
              </li>
              <li>
                The view processes the request, fetches any necessary data, and
                sends back a response.
              </li>
              <li>
                The response can be a webpage (HTML), a file (like a PDF), or
                even data (like JSON for APIs).
              </li>
            </ul>
          </div>
        </p>{" "}
      </div>
      <div>
        <p className="question">What Are URLs in Django?</p>{" "}
        <p className="indent">
          URLs in Django act as a roadmap for your website, guiding users to
          different views based on the addresses they visit. They are essential
          for mapping web addresses to the appropriate parts of your
          application.
        </p>{" "}
      </div>
      <div>
        <p className="question">What Are Django Models?</p>{" "}
        <p className="indent">
          A Django model is a table in your database. <br />
          <br />
          <b>Key Components:</b>
          <div>
            <ul>
              <li>
                <b>Fields:</b> Each field in a model represents a column in the
                database table. Django provides a variety of field types such as
                'CharField' for text, 'IntegerField' for numbers, 'DateField'
                for dates, and many more.
              </li>
              <li>
                <b>Meta Options:</b> You can use 'Meta' class options within a
                model to provide additional metadata. For example, you can
                define the table name, ordering of records, and more.
              </li>
              <li>
                <b>Model Methods:</b> You can define custom methods in your
                model class to add specific behaviors, such as calculating the
                age of a book based on its publication date.
              </li>
            </ul>
          </div>
          <p>
            <b>Key Points to Remember</b>
            <div>
              <ul>
                <li>
                  ORM (Object-Relational Mapping): Django models use an ORM to
                  interact with the database. This means you can use Python code
                  to perform database operations without writing SQL queries.
                </li>
                <li>
                  Model Instances: Each row in the database table corresponds to
                  an instance of the model class.
                </li>
                <li>
                  Migrations: Changes to models are applied to the database
                  through migrations, which are scripts that alter the database
                  schema.
                </li>
              </ul>
            </div>
          </p>
        </p>{" "}
      </div>
    </div>
  );
}
export default Django;
