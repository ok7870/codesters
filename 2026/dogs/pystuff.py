from flask import Flask, render_template

app = Flask(
	__name__, 
	template_folder='html', 
	static_folder='template'
)

owners = [
  {
    "ID": 1001,
    "name": "Joe",
    "city": "Tallinn",
    "owns": [ 2001 ]
  },
  {
    "ID": 1002,
    "name": "Mary",
    "city": "Tartu", 
    "owns": [ 2002, 2003 ]
  },
  {
    "ID": 1003,
    "name": "Mark",
    "city": "Pärnu",
    "owns": []
  }
]

walkers = [
  {
	"ID": 3001,
	"name": "John",
	"city": "Tallinn",
	"walks": [2001]
  },
  {
	"ID": 3002,
	"name": "Jane",
	"city": "Tartu",
	"walks": [2002]
  },
  {
	"ID": 3003,
	"name": "Jack",
	"city": "Pärnu",
	"walks": [2003, 2001]
  }
]

dogs = [
  {
    "ID": 2001,
    "name": "Muki",
    "breed": "Pug"
  },
  {
    "ID": 2002,
    "name": "Pitsu",
    "breed": "Husky"
  },
  {
    "ID": 2003,
    "name": "Rex",
    "breed": "Pitbull"
  },
]


@app.route("/")
def hello_world():
  return render_template("fornt.html", owners=owners, dogs=dogs, walkers=walkers)

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5500)