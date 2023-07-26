```python
from datetime import datetime
from mongoengine import Document, StringField, DecimalField, DateTimeField, ReferenceField
from .User import User
from .Account import Account

class Transaction(Document):
    user = ReferenceField(User, required=True)
    account = ReferenceField(Account, required=True)
    category = StringField(required=True)
    amount = DecimalField(required=True)
    date = DateTimeField(default=datetime.utcnow)

    def __str__(self):
        return f"Transaction(user='{self.user}', account='{self.account}', category='{self.category}', amount='{self.amount}', date='{self.date}')"
```