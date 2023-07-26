```python
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from src.config import config

class AlertService:
    def __init__(self, user):
        self.user = user

    def send_alert(self, message_name, message_body):
        msg = MIMEMultipart()
        msg['From'] = config['EMAIL']
        msg['To'] = self.user.email
        msg['Subject'] = message_name

        msg.attach(MIMEText(message_body, 'plain'))

        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(config['EMAIL'], config['PASSWORD'])
        text = msg.as_string()
        server.sendmail(config['EMAIL'], self.user.email, text)
        server.quit()

    def check_overspending(self, transaction):
        if transaction.amount > self.user.budget:
            self.send_alert('OVERSPENDING_ALERT', 'You have exceeded your budget limit.')

    def check_budget_limit(self, category):
        category_spending = sum(transaction.amount for transaction in self.user.transactions if transaction.category == category)
        if category_spending > self.user.budget[category]:
            self.send_alert('BUDGET_LIMIT_ALERT', f'You have reached your budget limit for {category}.')
```
