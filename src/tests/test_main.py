```python
import unittest
from src.main import app
from src.config import config
from src.models.User import User
from src.models.Account import Account
from src.models.Transaction import Transaction
from src.models.Goal import Goal

class TestMain(unittest.TestCase):

    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True 

    def test_home_page(self):
        result = self.app.get('/')
        self.assertEqual(result.status_code, 200)

    def test_user_creation(self):
        user = User("test_user", "test_password")
        self.assertEqual(user.username, "test_user")
        self.assertEqual(user.password, "test_password")

    def test_account_creation(self):
        account = Account("test_account", 1000)
        self.assertEqual(account.name, "test_account")
        self.assertEqual(account.balance, 1000)

    def test_transaction_creation(self):
        transaction = Transaction("test_transaction", 100, "expense")
        self.assertEqual(transaction.name, "test_transaction")
        self.assertEqual(transaction.amount, 100)
        self.assertEqual(transaction.type, "expense")

    def test_goal_creation(self):
        goal = Goal("test_goal", 1000, "save")
        self.assertEqual(goal.name, "test_goal")
        self.assertEqual(goal.amount, 1000)
        self.assertEqual(goal.type, "save")

if __name__ == "__main__":
    unittest.main()
```