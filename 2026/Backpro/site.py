from flask import Flask, render_template

app = Flask(
	__name__, 
	template_folder='html', 
	static_folder='html'
)


@app.route("/")
def index():
    return render_template('main.html')
@app.route("/new_post")
def new_post():
    return render_template('new_post.html')

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5500)