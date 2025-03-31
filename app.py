from flask import Flask,render_template
app = Flask(__name__,template_folder="templates")
@app.route('/')
def home():
    return render_template('index.html', title="acceuil")
@app.route('/course')
def course():
    return render_template('course.html', title="Cours")
@app.route('/blog')
def blog():
    return render_template('blog.html', title="blog")
@app.route('/contact')
def contact():
    return render_template('contact.html', title="Contact")
@app.route('/apropos')
def about():
    return render_template('apropos.html', title="a propos")
@app.route('/login')
def login():
    return render_template('Login.html', title="login")
if __name__ == '__main__':
    app.run(debug=True)