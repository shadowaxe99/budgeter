```python
from flask import request, jsonify
from src.models.Account import Account, AccountSchema
from src.services.ExpenseTrackingService import ExpenseTrackingService

account_schema = AccountSchema()

class AccountController:

    @staticmethod
    def create_account():
        account_data = request.get_json()
        new_account = Account(account_data['user_id'], account_data['bank_name'], account_data['account_number'])
        ExpenseTrackingService.link_account(new_account)
        return jsonify(account_schema.dump(new_account)), 201

    @staticmethod
    def get_account(account_id):
        account = Account.query.get(account_id)
        if account is None:
            return jsonify({'message': 'Account not found'}), 404
        return jsonify(account_schema.dump(account)), 200

    @staticmethod
    def update_account(account_id):
        account_data = request.get_json()
        account = Account.query.get(account_id)
        if account is None:
            return jsonify({'message': 'Account not found'}), 404
        account.bank_name = account_data['bank_name']
        account.account_number = account_data['account_number']
        ExpenseTrackingService.update_linked_account(account)
        return jsonify(account_schema.dump(account)), 200

    @staticmethod
    def delete_account(account_id):
        account = Account.query.get(account_id)
        if account is None:
            return jsonify({'message': 'Account not found'}), 404
        ExpenseTrackingService.unlink_account(account)
        return jsonify({'message': 'Account deleted'}), 200
```