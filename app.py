from flask import Flask
from Blueprint import Dashboard
import time 

app = Flask(__name__)
app.register_blueprint(Dashboard , url_prefix="/")

if __name__ == '__main__':
    app.run(debug=True ,  port=8000 )

time.sleep(10)
