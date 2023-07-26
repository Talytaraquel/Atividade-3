from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/questao1')
def questao1():
    return render_template('questao1.html')

@app.route('/questao2')
def questao2():
    return render_template('questao2.html')

@app.route('/questao3')
def questao3():
    return render_template('questao3.html')

@app.route('/questao4')
def questao4():
    return render_template('questao4.html')

@app.route('/questao5')
def questao5():
    return render_template('questao5.html')


app.run(host="0.0.0.0", port=81, debug=True)