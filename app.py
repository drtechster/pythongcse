from flask import Flask, render_template, jsonify
import json

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/words')
def get_words():
    with open('words.json', 'r') as f:
        words = json.load(f)
    return jsonify(words)

if __name__ == '__main__':
    app.run(debug=True)
