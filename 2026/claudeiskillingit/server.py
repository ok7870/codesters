"""
Flask server — receives text files from the HTML frontend.
Run:  pip install flask flask-cors
      python server.py
Then open http://localhost:5000 in your browser.
"""

from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # allows requests from your local HTML file

SAVE_DIR = "received_files"
os.makedirs(SAVE_DIR, exist_ok=True)

# Shared output store — set this from anywhere in your Python code
_output_text = {"value": None}

def set_output(text: str):
    """Call this from your Python code to push text to the browser Output tab."""
    _output_text["value"] = text


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/output", methods=["GET"])
def get_output():
    return jsonify({"output": _output_text["value"]}), 200


@app.route("/upload", methods=["POST"])
def upload():
    files = request.files.getlist("files")

    if not files:
        return jsonify({"error": "No files received."}), 400

    saved = []
    for f in files:
        if f.filename == "":
            continue

        save_path = os.path.join(SAVE_DIR, f.filename)
        f.save(save_path)

        # Read the content so you can work with it directly in Python
        with open(save_path, "r", encoding="utf-8", errors="replace") as fh:
            content = fh.read()

        print(f"\n--- Received: {f.filename} ---")
        print(content[:500])  # preview first 500 chars
        if len(content) > 500:
            print(f"  ... ({len(content)} characters total)")

        saved.append(f.filename)

        # -------------------------------------------------------
        # Do whatever you want with `content` here.
        # Then call set_output() to send a result back to the browser.
        # Example:
        result = f"Received '{f.filename}' ({len(content)} chars).\n\n{content[:300]}"
        set_output(result)
        # -------------------------------------------------------

    return jsonify({
        "message": f"{len(saved)} file(s) received: {', '.join(saved)}",
        "files": saved,
    }), 200


if __name__ == "__main__":
    print("Flask server running — open http://localhost:5000 in your browser")
    print(f"Files will be saved to: {os.path.abspath(SAVE_DIR)}/")
    app.run(debug=True, port=5000)