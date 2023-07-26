```python
from datetime import datetime
from mongoengine import Document, StringField, DateTimeField, FloatField

class Goal(Document):
    user_id = StringField(required=True)
    goal_name = StringField(required=True)
    goal_amount = FloatField(required=True)
    current_amount = FloatField(default=0.0)
    target_date = DateTimeField(required=True)
    created_at = DateTimeField(default=datetime.utcnow)

    def to_json(self):
        return {
            "user_id": self.user_id,
            "goal_name": self.goal_name,
            "goal_amount": self.goal_amount,
            "current_amount": self.current_amount,
            "target_date": self.target_date,
            "created_at": self.created_at
        }
```