from datetime import date
from flask import Flask, redirect, flash, url_for, render_template, request, redirect, flash, jsonify
import mysql.connector
import resume_word_cloud
from flask_cors import CORS, cross_origin
cors = CORS(resources={r"/*": {"origins": "*",
            "allow_headers": "*", "expose_headers": "*"}})


app = Flask(__name__)

CORS(app)
app.secret_key = "super secret key"


test_data = {
    'Name': "jatin",
    "Age": "22",
    "Date": 1,
    "programming": "python"
}


@app.route("/", methods=['POST'])
def get_dates():
    print("file upload")
    # formData=request.json

    # # print(formData)

    return "<h1 > Home Page </hi>"


@app.route('/user')
def index():
    return "<h1 > Home Page </hi>"


@app.route('/data')
def get_time():

    return test_data


@app.route('/userhomepage', methods=["POST"])
def login():
    username = request.form.get('username')
    password = request.form.get('password')

    if(username != '' and password != ''):

        print("login function")
        print(request.form.get('username'))
        print(request.form.get('password'))

        mydb = mysql.connector.connect(
            host='sql787.main-hosting.eu', database='u844323284_Recruitemp', user='u844323284_project', password='Recruitemp@1234')
        sql_query = f"SELECT * FROM `user` WHERE `username`='{username}' AND `password`='{password}'"
        print(sql_query)
        cursor = mydb.cursor()

        cursor.execute(sql_query)
        user_data = cursor.fetchone()
        print(user_data)
        mydb.close()  # closing the connection

        if user_data != None:
            
            # redirecting to the userhomepage after successful login`
            flash("You have been logged in")
            return redirect('http://localhost:3000/userhomepage')
        else:
            # If credentials are wrong then it will redirect to the same page
            return redirect('http://localhost:3000/security/signin.html')


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

            mydb = mysql.connector.connect(host='sql787.main-hosting.eu',
                                           database='u844323284_Recruitemp',
                                           user='u844323284_project',
                                           password='Recruitemp@1234')
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



# Admin signup process
@app.route('/security/adminsignup.html', methods=["POST"])
def admin_signup():

    try:

        username = request.form.get('username')
        companyname = request.form.get('companyname')
        companydomain = request.form.get('companydomain')
        password = request.form.get('password')
        cnf_password = request.form.get('cnf_password')

        if (request.form.get('username') != '' and request.form.get('companyname') != '' and request.form.get('companydomain') != '' and  request.form.get('password') != '' and request.form.get('password') and request.form.get('password') == request.form.get('cnf_password')):

            mydb = mysql.connector.connect(host='sql787.main-hosting.eu',
                                           database='u844323284_Recruitemp',
                                           user='u844323284_project',
                                           password='Recruitemp@1234')
            print("sign in function")
            print(mydb)
            sql_query = f"INSERT INTO `admin` (`username`, `company_name`, `company_domain`, `password`, `confirm_password`) VALUES ('{username}','{companyname}','{companydomain}','{password}', '{cnf_password}')"
            print(sql_query)
            cursor = mydb.cursor()
            cursor.execute(sql_query)
            mydb.commit()  # saving the data
            mydb.close()  # closing the connection

            return redirect('http://localhost:3000/security/AdminSignin.html')

    except Exception as e:
        print(e)
        # If user registration is not okay then it will be go to the same page
    return redirect('http://localhost:3000/security/AdminSignup.html')


# Admin signin process
@app.route('/adminhomepage', methods=["POST"])
def admin_login():
    username = request.form.get('username')
    companyname = request.form.get('companyname')
    password = request.form.get('password')

    if(username != '' and password != '' and companyname != ''):

        print("login function")
        print(request.form.get('username'))
        print(request.form.get('companyname'))
        print(request.form.get('password'))

        mydb = mysql.connector.connect(
            host='sql787.main-hosting.eu', database='u844323284_Recruitemp', user='u844323284_project', password='Recruitemp@1234')
        sql_query = f"SELECT * FROM `admin` WHERE `username`='{username}' AND `company_name`='{companyname}' AND `password`='{password}'"
        print(sql_query)
        cursor = mydb.cursor()

        cursor.execute(sql_query)
        user_data = cursor.fetchone()
        print(user_data)
        mydb.close()  # closing the connection

        if user_data != None:
            # redirecting to the userhomepage after successful login`
            flash("You have been logged in")
            return redirect('http://localhost:3000/adminhomepage')
        else:
            # If credentials are wrong then it will redirect to the same page
            return redirect('http://localhost:3000/security/AdminSignin.html')




@app.route('/Resume_word_cloud', methods=["POST"])
def resume_word_cloud_checker():
    # print("resume_word_cloud")

    print(request.json['firstName'])
    job_desc = request.json['job_desc']
    resume_name = request.json['resume_name']
    # formData=request.json['formData']

    print(job_desc)
    print(resume_name)

    result_matched = resume_word_cloud.start_word_cloud()

    print(result_matched)

    # flash("You have been flashed hahaha", "info")

    return test_data
 

@app.route('/jobApplypage2', methods=['POST'])
def job_apply():
    try:
        print(request.form.get('name'))
        print(request.form.get('email'))
        print(request.form.get('phone'))
        print(request.form.get('current_location'))
        print(request.form.get('gender'))
        print(request.form.get('dob'))
        print(request.form.get('college_name'))
        print(request.form.get('passing_year'))
        print(request.form.get('degree_name'))
        print(request.form.get('degree_specialization'))
        print(request.form.get('preferred_location'))

        name = request.form.get('name')
        email = request.form.get('email')
        phone = request.form.get('phone')
        current_location = request.form.get('current_location')
        gender = request.form.get('gender')
        dob = request.form.get('dob')
        college_name = request.form.get('college_name')
        passing_year = request.form.get('passing_year')
        degree_specialization = request.form.get('degree_specialization')
        preferred_location = request.form.get('preferred_location')

        dates = date.today()
        # dd/mm/YY
        dates = dates.strftime("%d/%m/%Y")
        print(dates)

        if (request.form.get('username') != '' and request.form.get('email') != '' and request.form.get('phone') != '' and request.form.get('current_location')) != '':

            print("came to if condition of applicant data form")

            mydb = mysql.connector.connect(host='sql787.main-hosting.eu',
                                           database='u844323284_Recruitemp',
                                           user='u844323284_project',
                                           password='Recruitemp@1234')

            print(mydb)
            sql_query = f"INSERT INTO `applicant`(`name`, `email`, `phone _number`, `current_location`, `dob`, `gender`, `college`, `passing_year`, `degree_name`,  `preferred_network`,`date`) VALUES ('{name}','{email}','{phone}','{current_location}','{dob}','{gender}','{college_name}','{passing_year}','{degree_specialization}','{preferred_location}', '{dates}')"
            print(sql_query)
            cursor = mydb.cursor()
            cursor.execute(sql_query)
            mydb.commit()  # saving the data
            mydb.close()  # closing the connection

            return redirect('/trackapp')

    except Exception as e:
        print(e)
        # If user registration is not okay then it will be go to the same page
    return redirect('/jobApplypage2')


@app.route('/datas',  methods=['GET'])
def get_times():

    return test_data


@app.route('/trackapp', methods=['GET'])
def track_application():

    # id = request.json['id']
    # print(id)

    if(1 == 1):
        mydb = mysql.connector.connect(host='sql787.main-hosting.eu',
                                            database='u844323284_Recruitemp',
                                            user='u844323284_project',
                                            password='Recruitemp@1234')

        sql_query = f"SELECT * FROM `applicant` WHERE `sr`={1}"

        cursor = mydb.cursor()
        cursor.execute(sql_query)
        applicant_data = cursor.fetchone()
        print(applicant_data)
        mydb.close()

        dates = applicant_data[12]

        data = {

            'Name': "jatin",
            "Age": "22",
            # "Date": 1,
            "programming": "python",
            "Date": applicant_data[12]


        }
        return data

    return test_data



# @app.route('/services', method=['GET'])
# def desired_job():

#     if(1 == 1):
#         mydb = mysql.connector.connect(host='sql787.main-hosting.eu',
#                                             database='u844323284_Recruitemp',
#                                             user='u844323284_project',
#                                             password='Recruitemp@1234')

#         sql_query = f"INSERT INTO `desired_job`( `name`, `email`, `phone _number`, `exp`, `desired_post`, `address`) VALUES ('{}','{}','{}','{}','{}','{}');"

#         cursor = mydb.cursor()
#         cursor.execute(sql_query)
#         applicant_data = cursor.fetchone()
#         print(applicant_data)
#         mydb.close()

#         dates = applicant_data[12]

#         return data

#     return test_data


# Admin post job
@app.route('/AdminPostjob', methods=['POST'])
def receive_data():
    jobname = request.json.get('jobname')
    companyemail = request.json.get('companyemail')
    contact = request.json.get('contact')
    exp = request.json.get('exp')
    jobCategory = request.json.get('jobCategory')
    jobdesc = request.json.get('jobdesc')
    print(jobname)
    print(companyemail)
    print(contact)
    print(exp)
    print(jobCategory)
    print(jobdesc)
    
    # Saving data to database:
    mydb = mysql.connector.connect(host='sql787.main-hosting.eu',
                                            database='u844323284_Recruitemp',
                                            user='u844323284_project',
                                            password='Recruitemp@1234')

    # sql_query = f"INSERT INTO `postjob`( `job_name`, `company_email`, `contact_no`, `experience_expected`, `job_category`, `job_descriptions`) VALUES ('{jobname}','{companyemail}','{contact}','{exp}','{jobCategory}','{jobdesc}');"

    sql_query = f"INSERT INTO `postjob` (`job_name`, `company_email`, `contact_no`, `experience_expected`, `job_category`, `job_descriptions`) VALUES ('{jobname}', '{companyemail}', '{contact}', '{exp}', '{jobCategory}', '{jobdesc}');"

    cursor = mydb.cursor()
    cursor.execute(sql_query)
    mydb.commit() 
    mydb.close()

    return jsonify({'success': True, 'message': 'Job posted Successfully'})




# Job 1:
@app.route('/fetchpostjob', methods=['GET'])
def get_job():
    mydb = mysql.connector.connect(host='sql787.main-hosting.eu',
                                   database='u844323284_Recruitemp',
                                   user='u844323284_project',
                                   password='Recruitemp@1234')

    # sql_query = f"SELECT * FROM `postjob` WHERE `sr_no`={2}"
    sql_query = f"SELECT * FROM `postjob` WHERE `sr_no`={1}"
    
    mycursor = mydb.cursor()
    mycursor.execute(sql_query)
    data = mycursor.fetchone()
    mycursor.close()

    data = {
            'jobname': data[1],
            "companyemail": data[2],
            "exp": data[4],
            "jobcategory": data[5],
            "jobdesc": data[6],
    }

    return data


# Job 2:
@app.route('/fetchpostjob1', methods=['GET'])
def get_job1():
    mydb = mysql.connector.connect(host='sql787.main-hosting.eu',
                                   database='u844323284_Recruitemp',
                                   user='u844323284_project',
                                   password='Recruitemp@1234')
    
    sql_query1 = f"SELECT * FROM `postjob` WHERE `sr_no`={2}"
    mycursor1 = mydb.cursor()
    mycursor1.execute(sql_query1)
    data1 = mycursor1.fetchone()

    data1 = {
            'jobname': data1[1],
            "companyemail": data1[2],
            "exp": data1[4],
            "jobcategory": data1[5],
            "jobdesc": data1[6],
    }

    return data1


# Job 3:
@app.route('/fetchpostjob2', methods=['GET'])
def get_job2():
    mydb = mysql.connector.connect(host='sql787.main-hosting.eu',
                                   database='u844323284_Recruitemp',
                                   user='u844323284_project',
                                   password='Recruitemp@1234')
    
    sql_query2 = f"SELECT * FROM `postjob` WHERE `sr_no`={3}"
    mycursor2 = mydb.cursor()
    mycursor2.execute(sql_query2)
    data2 = mycursor2.fetchone()

    data2 = {
            'jobname': data2[1],
            "companyemail": data2[2],
            "exp": data2[4],
            "jobcategory": data2[5],
            "jobdesc": data2[6],
    }

    return data2

# Job 4:
@app.route('/fetchpostjob3', methods=['GET'])
def get_job3():
    mydb = mysql.connector.connect(host='sql787.main-hosting.eu',
                                   database='u844323284_Recruitemp',
                                   user='u844323284_project',
                                   password='Recruitemp@1234')
    
    sql_query3 = f"SELECT * FROM `postjob` WHERE `sr_no`={4}"
    mycursor3 = mydb.cursor()
    mycursor3.execute(sql_query3)
    data3 = mycursor3.fetchone()

    data3 = {
            'jobname': data3[1],
            "companyemail": data3[2],
            "exp": data3[4],
            "jobcategory": data3[5],
            "jobdesc": data3[6],
    }

    return data3

# Job 5:
@app.route('/fetchpostjob4', methods=['GET'])
def get_job4():
    mydb = mysql.connector.connect(host='sql787.main-hosting.eu',
                                   database='u844323284_Recruitemp',
                                   user='u844323284_project',
                                   password='Recruitemp@1234')
    
    sql_query4 = f"SELECT * FROM `postjob` WHERE `sr_no`={5}"
    mycursor4 = mydb.cursor()
    mycursor4.execute(sql_query4)
    data4 = mycursor4.fetchone()

    data4 = {
            'jobname': data4[1],
            "companyemail": data4[2],
            "exp": data4[4],
            "jobcategory": data4[5],
            "jobdesc": data4[6],
    }

    return data4
    
# Job 6:
@app.route('/fetchpostjob5', methods=['GET'])
def get_job5():
    mydb = mysql.connector.connect(host='sql787.main-hosting.eu',
                                   database='u844323284_Recruitemp',
                                   user='u844323284_project',
                                   password='Recruitemp@1234')
    
    sql_query5 = f"SELECT * FROM `postjob` WHERE `sr_no`={6}"
    mycursor5 = mydb.cursor()
    mycursor5.execute(sql_query5)
    data5 = mycursor5.fetchone()

    data5 = {
            'jobname': data5[1],
            "companyemail": data5[2],
            "exp": data5[4],
            "jobcategory": data5[5],
            "jobdesc": data5[6],
    }

    return data5
    





# Running app
if __name__ == '__main__':
    app.run(debug=True)

#  "proxy":"http://localhost:5000/", Enable this to connect Flask API
CORS(app, expose_headers='Authorization')
