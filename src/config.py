```python
# src/config.py

# Database configuration
DATABASE_CONFIG = {
    'host': 'localhost',
    'port': 5432,
    'user': 'postgres',
    'password': 'password',
    'database': 'ai_personal_budgeter_db'
}

# API configuration
API_CONFIG = {
    'host': 'localhost',
    'port': 5000
}

# Encryption configuration
ENCRYPTION_CONFIG = {
    'encryption_key': 'your_encryption_key',
    'encryption_algorithm': 'AES'
}

# Subscription configuration
SUBSCRIPTION_CONFIG = {
    'basic_plan_price': 5.99,
    'premium_plan_price': 9.99
}

# Referral configuration
REFERRAL_CONFIG = {
    'referral_bonus': 10.00
}

# Alert configuration
ALERT_CONFIG = {
    'overspending_threshold': 0.8,  # 80% of budget
    'budget_limit_threshold': 0.9  # 90% of budget
}
```