```python
from models.User import User
from models.Account import Account

class SubscriptionService:
    def __init__(self):
        self.users = User.query.all()
        self.accounts = Account.query.all()

    def subscribe(self, user_id, subscription_plan):
        user = next((user for user in self.users if user.id == user_id), None)
        if user:
            user.subscription_plan = subscription_plan
            user.save()
            return True
        return False

    def unsubscribe(self, user_id):
        user = next((user for user in self.users if user.id == user_id), None)
        if user:
            user.subscription_plan = None
            user.save()
            return True
        return False

    def check_subscription(self, user_id):
        user = next((user for user in self.users if user.id == user_id), None)
        if user and user.subscription_plan:
            return user.subscription_plan
        return None

    def upgrade_subscription(self, user_id, new_plan):
        user = next((user for user in self.users if user.id == user_id), None)
        if user:
            user.subscription_plan = new_plan
            user.save()
            return True
        return False
```