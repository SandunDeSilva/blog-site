import React from "react";
import "./djangowithaws.css";

function DjangoWithAWS() {
  return (
    <div className="djangowithaws-container">
      <div>
        <h1 className="topic">How to Host Django Application on AWS</h1>
      </div>
      <div>
        <p className="question">Setup Database</p>{" "}
        <p className="indent">
          <div>
            <ul>
              <li>Set Up an AWS Account</li>
              <li>
                Make sure that you deploy your Django project on GitHub
                repository.
              </li>
              <li>
                To create database, type <b>RDS</b> on search bar, Then click on{" "}
                <b>Create database</b> button
              </li>
              <li>
                Under <b>Engine options</b> section, select <b>MySQL</b>
              </li>
              <li>
                Under <b>Templates</b> section, select <b>Free tier</b>
              </li>
              <li>
                Under <b>Settings</b> section type database name
              </li>
              <li>
                Then set <b>Master Username</b> and, <b>Master Password</b> and{" "}
                <b>Confirm master password</b>
              </li>
            </ul>
          </div>
        </p>{" "}
      </div>{" "}
      <br />
      <br />
      <div>
        <p className="question">Setup EC2 Instance</p>{" "}
        <p className="indent">
          <div>
            <ul>
              <li>Log into your Amazon dashboard and search for EC2.</li>
              <li>
                Then, click on <b>Instances(running)</b>, under <b>Resources</b>{" "}
                section (This is going to take you to where you can see all your
                instances.)
              </li>
              <li>Then, click Launch instances.</li>
              <li>
                The first thing that we need to specify on this page is the name
                of the server. (You can name this server anything you want.)
              </li>
              <li>
                Next, we need to select an operating system. (I decided to go
                with Ubuntu)
              </li>
              <li>
                Then we have to make sure that the <b>Instance type</b> is{" "}
                <b>T3 micro.</b> (Because it's the free tier)
              </li>
              <li>
                Then, scroll down to <b>Network settings.</b> In here make sure
                that <b>Create security group</b> and{" "}
                <b>Allow SSH traffic from</b> are ticked
              </li>
              <li>
                Then click on <b>Launch instance</b>
              </li>
              <li>
                Then, in the <b>Create key pair</b> form select{" "}
                <b>Proceed without key pair.</b> (Because we want to SSH into
                the server, we will be working directly on the cloud.). Then
                click <b>Proceed without key pair</b> button
              </li>
              <li>
                Then, Click <b>Launch instance</b>
              </li>
              <li>
                Then, go to <b>Instances</b>, in here you'll see that the{" "}
                <b>instant state</b> is <b>pending.</b> Then you have to refresh
                this <b>Instances</b> page. Then we can see that{" "}
                <b>Instance state</b> is <b>Running</b> and <b>Status check</b>{" "}
                is <b>checks passed.</b>
              </li>
              <li>
                We have to set inbound rule to access our Django application at
                port 8000. To do this go to <b>EC2</b>, go to <b>Instances</b>{" "}
                in left side panel, then click on your instance, in below select{" "}
                <b>Security</b> tab, in here we need to set inbound rule. To do
                that click on the link under <b>Security groups</b> (The link
                should be like this <b>(launch-wizard-1)</b>)
              </li>
              <li>
                Then click on <b>Edit inbound rules</b> under{" "}
                <b>Inbound rules</b> section. Then click on <b>Add rule.</b>{" "}
                Then set <b>Type</b> to <b>Custom TCP</b>, <b>Port range</b> to{" "}
                <b>8000</b>, and for the <b>Source</b> set <b>0.0.0.0/0</b>.
                Then click on Save rules.
              </li>
            </ul>
          </div>
        </p>{" "}
      </div>{" "}
      <br />
      <br />
      <div>
        <p className="question">
          Now we have to make a connection between RDS with EC2 instance, using
          security groups
        </p>{" "}
        <p className="indent">
          <div>
            <ul>
              <li>
                When we create our EC2 instance, it will auto generate a
                security group (In my case, generated a security group named{" "}
                <b>launch-wizard-1</b> )
              </li>
              <li>
                Now we have to create a security group for RDS. To do that go to{" "}
                <b>EC2</b>, in here left side panel, select{" "}
                <b>Security Groups</b> under <b>Network & Security</b> section.
              </li>
              <li>
                Give name for your Security group (I set it as
                <b>django-mysql-sg</b>)
              </li>
              <li>
                Then give a Description (In my case I set{" "}
                <b>Security group for Django project MySQL database</b>)
              </li>
              <li>
                And then add an Inbound rule. For that click on <b>Add rule</b>{" "}
                under <b>Inbound rules</b> section. In here select <b>Type</b>,
                <b>MYSQL/Aurora</b>, then for the <b>Source</b> section, you
                have to search your EC2 instance security group. (In my case I
                choose <b>launch-wizard-1</b>), then give a <b>Description</b>{" "}
                according to your project (I set it as a Django Server to MySQL
                database), then click on <b>Create security group</b>
              </li>
              <li>
                Then go to <b>Services</b>, then click on <b>RDS</b>, then click
                on <b>DB Instances</b>, In here you can see the database
                management system instance that you created earlier. Select it
                and click <b>Modify</b>. Then scroll down until you see{" "}
                <b>Security group.</b> In here remove <b>default</b> and replace
                it with the new security group we created for DB Instance. (In
                my case it is <b>django-mysql-sg</b>). Scroll down and click on{" "}
                <b>Continue.</b> Then choose <b>Apply immediately</b> under{" "}
                <b>Scheduling of modifications</b> section. Then click on{" "}
                <b>Modify DB Instance.</b> Now EC2 server will have access to
                this database. Now this database server will only accept
                incoming traffic from our Django server which makes it more
                secure.
              </li>
              <li>
                In this database we need Endpoint and Port. We have to modify
                our <b>settings.py</b> file with this Endpoint and Port in our
                Django project, after we clone it to our EC2 instance web
                terminal
              </li>
            </ul>
          </div>
        </p>{" "}
      </div>{" "}
      <br />
      <br />
      <div>
        <p className="question">
          To access the terminal of EC2 instance on AWS and set it up for a
          Django project
        </p>{" "}
        <p className="indent">
          <div>
            <ul>
              <li>
                Go to <b>EC2</b> and then go to <b>Instances(running)</b>
              </li>
              <li>
                Then ticked on your instance and then click <b>Connect</b>{" "}
                button. Once you click on Connect button, scroll down a bit and
                again press on the <b>Connect</b> button.
              </li>
              <li>
                Then it will open a web terminal for us that we can interact
                with our server which we created. We need to update this server.
                To update server type command <b>sudo apt-get update</b>
              </li>
              <li>
                Then we need to clone our GitHub repository. To do this go to
                the GitHub repository, then click on <b>Code</b> and then copy
                the repository link. Then go to the web terminal and type this
                command <b>git clone github_repository_link</b>. When you type{" "}
                <b>ls</b> on web terminal, and then press Enter, then you can
                see your project folder. Then you have to go to your project
                with typing <b>cd project_folder_name</b> on web terminal. When
                you click <b>ls</b> on your web terminal, you can see your
                project files.{" "}
              </li>
              <li>
                Now we have to install packages and libraries. First of all you
                have to type below two commands <b>sudo apt update</b>,{" "}
                <b>sudo apt upgrade</b>. To install pip type below command on
                web terminal, <b>sudo apt install python3-pip –y</b>. To install
                python, <b>sudo apt install python3</b>
              </li>
              <li>
                To install virtual environment.{" "}
                <b>sudo pip3 install virtualenv</b>
              </li>
              <li>
                To create virtual environment on your project, first you have to
                go to your project (type <b>cd project_name</b>), then type this
                command <b>virtualenv venv</b>
              </li>
              <li>
                To activate virtual environment type,{" "}
                <b>source venv/bin/activate</b>
              </li>
              <li>
                To install Django and Django REST Framework type,{" "}
                <b>pip install django djangorestframework</b>
              </li>
              <li>
                To install MySQL client <b>pip install mysqlclient</b>
              </li>
              <li>
                Then you have to navigate to your project's <b>settings.py</b>{" "}
                file and then you have to edit, <b>ALLOWED_HOSTS</b> section and
                <b>DATABASES</b> section. To do that you have to go to the{" "}
                <b>settings.py</b> file using <b>cd</b> commands. To edit{" "}
                <b>settings.py</b> file you have to type this command{" "}
                <b>nano settings.py</b>
                Then edit <b>ALLOWED_HOSTS = [‘YOUR_EC2_PUBLIC_IP’]</b>{" "}
              </li>
              <li>
                Then <br />
                <b>
                  DATABASES = {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;'default': {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'ENGINE':
                  'django.db.backends.mysql',
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'NAME':
                  'database_name',
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'USER':
                  'username',
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'PASSWORD':
                  'password',
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'HOST':
                  'database_endpoint',
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'PORT':
                  'port_number',
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{"}"},<br />
                  {"}"}
                </b>
              </li>
              <li>
                Then click <b>Ctrl + o</b> to save these changes, then press
                Enter, then press <b>Ctrl + x</b>
              </li>
              <li>
                Then we have to create a database in our MySQL server. To do
                that type below command,{" "}
                <b>
                  mysql -h
                  database_name.cbumwyegqqs6.eu-north-1.rds.amazonaws.com
                  --port=3306 -u admin -p
                </b>{" "}
                and then type your password. In here you to create a database
                with typing below command, <b>CREATE DATABASE database_name;</b>
              </li>
              <li>
                Then you have to use this database using this command{" "}
                <b>USE database_name;</b>
              </li>
              <li>
                Then you can exit from mysql using <b>EXIT;</b> command.
              </li>
              <li>
                Then we have to migrate our database, to do that you have to
                type, <b>python3 manage.py makemigrations</b> and then type this
                command, <b>python3 manage.py migrate</b>
              </li>
              <li>
                Finally you can run your server using this command,{" "}
                <b>python3 manage.py runserver 0.0.0.0:8000</b>
              </li>
              <li>
                Now you can access your website using the link below: <br />
                <b>http://&lt;EC2_INSTANCE_PUBLIC_IP&gt;:8000</b>
              </li>
              <li>
                Other commands,
                <br />
                When you are in Ubuntu web terminal, if you want to navigate to
                backward type <b>cd ..</b>{" "}
              </li>
            </ul>
          </div>
        </p>{" "}
      </div>{" "}
    </div>
  );
}

export default DjangoWithAWS;
