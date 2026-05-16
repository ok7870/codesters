
from flask import Flask, render_template

app = Flask(__name__, template_folder='templates', static_folder='static')

user_details = {
  'first_name': 'John',
  'last_name': 'Doe',
  'age': 18
}

@app.route("/")
def hello_world():
  return render_template('website.html', user=user_details)

if __name__ == "__main__":
  app.run(host='127.0.0.1', port=5500)
