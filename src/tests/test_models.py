```python
import unittest
from src.models.User import User
from src.models.Account import Account
from src.models.Transaction import Transaction
from src.models.Goal import Goal

class TestModels(unittest.TestCase):

    def setUp(self):
        self.user = User('John Doe', 'john@example.com', 'password')
        self.account = Account(self.user, 'Bank', 'Checking', 1000)
        self.transaction = Transaction(self.account, 'Groceries', 50)
        self.goal = Goal(self.user, 'Vacation', 2000)

    def test_user_creation(self):
        self.assertEqual(self.user.name, 'John Doe')
        self.assertEqual(self.user.email, 'john@example.com')
        self.assertEqual(self.user.password, 'password')

    def test_account_creation(self):
        self.assertEqual(self.account.user, self.user)
        self.assertEqual(self.account.bank, 'Bank')
        self.assertEqual(self.account.type, 'Checking')
        self.assertEqual(self.account.balance, 1000)

    def test_transaction_creation(self):
        self.assertEqual(self.transaction.account, self.account)
        self.assertEqual(self.transaction.category, 'Groceries')
        self.assertEqual(self.transaction.amount, 50)

    def test_goal_creation(self):
        self.assertEqual(self.goal.user, self.user)
        self.assertEqual(self.goal.name, 'Vacation')
        self.assertEqual(self.goal.target, 2000)

if __name__ == '__main__':
    unittest.main()
```