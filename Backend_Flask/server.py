from flask import Flask, redirect, url_for, render_template, request, redirect
import mysql.connector

app = Flask(__name__)


@app.route("/", methods=['POST'])
def get_dates():

    startDate = request.form.get('startDate')
    endDate = request.form.get('endDate')

    print(startDate, endDate)

    return "<h1 > Home Page </hi>"


@app.route('/user')
def index():
    return "<h1 > Home Page </hi>"


@app.route('/data')
def get_time():

    data = {
        'Name': "jatin",
        "Age": "22",
        "Date": 1,
        "programming": "python"
    }
    return data


@app.route('/userhomepage', methods=["POST"])
def login():

    print("login function")
    print(request.form.get('username'))
    print(request.form.get('password'))

    username = request.form.get('username')
    password = request.form.get('password')

    if(username != '' and password != ''):

        mydb = mysql.connector.connect(
            host='localhost', database='recruitemp', user='root', password='')
        sql_query = f"SELECT * FROM `user` WHERE `username`='{username}' AND `password`='{password}'"
        print(sql_query)
        cursor = mydb.cursor()

        cursor.execute(sql_query)
        user_data = cursor.fetchone()
        print(user_data)
        mydb.close()  # closing the connection

        if user_data != None:
            # redirecting to the userhomepage after successful login`
            return redirect('http://localhost:3000/userhomepage')

        else:
        	return redirect('http://localhost:3000/security/signin.html') #If credentials are wrong then it will redirect to the same page


@app.route('/security/signin.html', methods=["POST"])
def signin():

    try:
        print(request.form.get('username'))
        print(request.form.get('cnf_password'))
        print(request.form.get('email'))
        print(request.form.get('password'))
        print(request.form.get('describe'))
        print(request.form.get('state'))

        username = request.form.get('username')
        password = request.form.get('password')
        email = request.form.get('email')
        describe = request.form.get('describe')
        state = request.form.get('state')

        if (request.form.get('username') != '' and request.form.get('password') != '' and request.form.get('password') == request.form.get('cnf_password')):

            mydb = mysql.connector.connect(host='localhost',
                                           database='recruitemp',
                                           user='root',
                                           password='')
            print("sign in function")
            print(mydb)
            sql_query = f"INSERT INTO `user` (`username`, `password`, `email`, `state`, `describe`) VALUES ('{username}','{password}','{email}','{describe}', '{state}')"
            print(sql_query)
            cursor = mydb.cursor()
            cursor.execute(sql_query)
            mydb.commit()  # saving the data
            mydb.close()  # closing the connection

            return redirect('http://localhost:3000/security/signin.html')

    except Exception as e:
        print(e)
        # If user registration is not okay then it will be go to the same page
    return redirect('http://localhost:3000/security/signup1.html')


# Running app
if __name__ == '__main__':
    app.run(debug=True)

#  "proxy":"http://localhost:5000/", Enable this to connect Flask API
