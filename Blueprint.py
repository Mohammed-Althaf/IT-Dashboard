from flask import Blueprint , render_template , redirect , url_for

Dashboard = Blueprint(__name__ , "Dashboard")

@Dashboard.route("/")
def WebsiteHome():
    return render_template("home.html" )

@Dashboard.route("/users")
def users():
    return render_template("user.html" )