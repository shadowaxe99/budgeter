```python
import unittest
from src.controllers import UserController, AccountController, TransactionController, GoalController

class TestControllers(unittest.TestCase):

    def setUp(self):
        self.user_controller = UserController()
        self.account_controller = AccountController()
        self.transaction_controller = TransactionController()
        self.goal_controller = GoalController()

    def test_user_controller(self):
        user = self.user_controller.create_user('test_user', 'test_password')
        self.assertEqual(user.username, 'test_user')
        self.assertEqual(user.password, 'test_password')

    def test_account_controller(self):
        account = self.account_controller.create_account('test_account', 'test_user')
        self.assertEqual(account.name, 'test_account')
        self.assertEqual(account.user, 'test_user')

    def test_transaction_controller(self):
        transaction = self.transaction_controller.create_transaction('test_transaction', 'test_account', 100)
        self.assertEqual(transaction.name, 'test_transaction')
        self.assertEqual(transaction.account, 'test_account')
        self.assertEqual(transaction.amount, 100)

    def test_goal_controller(self):
        goal = self.goal_controller.create_goal('test_goal', 'test_user', 1000)
        self.assertEqual(goal.name, 'test_goal')
        self.assertEqual(goal.user, 'test_user')
        self.assertEqual(goal.target, 1000)

if __name__ == '__main__':
    unittest.main()
```