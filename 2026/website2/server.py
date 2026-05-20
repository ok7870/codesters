import flask
app = flask.Flask(__name__, template_folder='templates', static_folder='templates')

@app.route('/')
def index():
    return flask.render_template('hero.html')

@app.route('/main')
def main():
    return flask.render_template('main.html')

@app.route('/valjund', methods=['POST'])
def valjund():
    text = flask.request.form.get("text", "ded")
    return "abc" + text

if __name__ == "__main__":
  app.run(host='127.0.0.1', port=5500)