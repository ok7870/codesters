from flask import Flask, render_template

app = Flask(__name__, template_folder='template', static_folder='template')

books = {
    "1001": {
        "ID": 1001,
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "price": 10.99,
        "rent": 2.99,
        "picture": "https://f7.pmo.ee/dmSoqVhfpY5LXGju1LHmtyldm-8=/1299x866/smart/filters:format(webp)/duo/telecasts/22-300-220/a01d92ccdc2cf580c9e22cdf55f924aa_Hirmus%2BHenry.jpg",
        "rented": False,
        "sold": False
    },
}


@app.route("/")
def online_store():
  return render_template('front.html', books=books)

if __name__ == "__main__":
  app.run(host='127.0.0.1', port=5500)
