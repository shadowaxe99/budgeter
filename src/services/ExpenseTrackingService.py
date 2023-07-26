```python
from src.models import User, Account, Transaction
from src.utils import EncryptionUtils, SecurityUtils

class ExpenseTrackingService:
    def __init__(self):
        self.user = User()
        self.account = Account()
        self.transaction = Transaction()

    def link_account(self, user_id, account_details):
        encrypted_details = EncryptionUtils.encryptData(account_details)
        self.user.link_account(user_id, encrypted_details)

    def track_expense(self, user_id, transaction_details):
        encrypted_details = EncryptionUtils.encryptData(transaction_details)
        self.transaction.add_transaction(user_id, encrypted_details)

    def categorize_expense(self, transaction_id, category):
        self.transaction.categorize_transaction(transaction_id, category)

    def get_expenses(self, user_id):
        transactions = self.transaction.get_transactions(user_id)
        decrypted_transactions = [EncryptionUtils.decryptData(t) for t in transactions]
        return decrypted_transactions
```