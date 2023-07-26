```python
from models.User import User
from models.Account import Account

class ReferralService:
    def __init__(self):
        self.referral_commission = 0.02  # 2% commission for each referral

    def refer(self, user: User, referral_code: str):
        referred_user = User.objects(referral_code=referral_code).first()
        if referred_user:
            self.add_referral_bonus(user, referred_user)
            return True
        return False

    def add_referral_bonus(self, user: User, referred_user: User):
        referral_bonus = self.calculate_referral_bonus(referred_user)
        user.account.balance += referral_bonus
        user.save()

    def calculate_referral_bonus(self, referred_user: User):
        total_spent = 0
        for transaction in referred_user.account.transactions:
            total_spent += transaction.amount
        return total_spent * self.referral_commission
```