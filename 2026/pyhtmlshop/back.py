from flask import Flask, render_template

app = Flask(__name__, template_folder='template', static_folder='template')




productss = [
  {
	'name': 'T-shirt',
    'quantity':10,
    'discount': False,
    'price':15
  },
  {
	'name': 'Hoodie',
    'quantity':2,
    'discount': False,
    'price':25
  },
	{
	'name': 'Skirt',
    'quantity':15,
    'discount': True,
    'price':25
  },
  {
	'name': 'Dress',
    'quantity':0,
    'discount': False,
    'price':50
  },
  {
	'name': 'Hat',
    'quantity':20,
    'discount': True,
    'price':5
  },
  {
	'name': 'Scarf',
    'quantity':0,
    'discount': False,
    'price':5
  }
]


@app.route("/")
def online_store():
  return render_template('index.html', products=productss)

if __name__ == "__main__":
  app.run(host='127.0.0.1', port=5500)
