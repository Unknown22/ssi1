
import os
from flask import Flask, render_template, request, json, jsonify

app = Flask(__name__)

users = {
            'user' : 'pass',
        }

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/go', methods=['POST'])
def go():
    username = request.form['username'];
    password = request.form['password'];
    return json.dumps({'username':username, 'password':password});

@app.route('/ajax', methods = ['POST'])
def ajax_request():
    username = request.form['username']
    password = request.form['password']
    if username in users.keys():
        response = '<h3 class="form-response form-signin">Given user exists</h3>'
    else:
        users[username] = password
        response = '<h3 class="form-signin">Registration success</h3>'
    return json.dumps({'response': response})

if __name__=="__main__":
    app.run()