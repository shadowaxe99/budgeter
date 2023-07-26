```python
from flask import Flask
from src.controllers import UserController, AccountController, TransactionController, GoalController

app = Flask(__name__)

@app.route('/user', methods=['POST'])
def create_user():
    return UserController.create_user()

@app.route('/user/<user_id>', methods=['GET'])
def get_user(user_id):
    return UserController.get_user(user_id)

@app.route('/account', methods=['POST'])
def create_account():
    return AccountController.create_account()

@app.route('/account/<account_id>', methods=['GET'])
def get_account(account_id):
    return AccountController.get_account(account_id)

@app.route('/transaction', methods=['POST'])
def create_transaction():
    return TransactionController.create_transaction()

@app.route('/transaction/<transaction_id>', methods=['GET'])
def get_transaction(transaction_id):
    return TransactionController.get_transaction(transaction_id)

@app.route('/goal', methods=['POST'])
def create_goal():
    return GoalController.create_goal()

@app.route('/goal/<goal_id>', methods=['GET'])
def get_goal(goal_id):
    return GoalController.get_goal(goal_id)

if __name__ == '__main__':
    app.run(debug=True)
```