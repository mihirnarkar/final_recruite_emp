# Write your code here

from flask import Flask, redirect, url_for, render_template, request
from recruitemp_features import *


app = Flask(__name__)


@app.route("/", methods=['POST'])
def get_dates():
    	
    # print("Hello World")

    startDate = request.form.get('startDate')
    endDate = request.form.get('endDate')

    print(startDate, endDate)

    return "<h1 > Home Page </hi>"

@app.route('/user')
def index():
    return "<h1 > Home Page </hi>"

@app.route('/data')
def get_time():
    	
	data ={
		'Name':"jatin",
		"Age":"22",
		"Date":1,
		"programming":"python"
		}

    	
	return data

@app.route('/security/signin.html', methods=["POST"] )
def login():
    print("Hello World")

    return "Login page working"

@app.route('/security/security/signup1.html')
def test():
    	print("hello ")
    
	
# Running app
if __name__ == '__main__':
	app.run(debug=True)
	
#  "proxy":"http://localhost:5000/", Enable this to connect Flask API
