```python
from flask import Flask
from src import config
from src.routes import setup_routes

app = Flask(__name__)
app.config.from_object(config)

# Setup routes
setup_routes(app)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
```