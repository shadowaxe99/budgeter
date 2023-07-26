```python
from flask import request, jsonify
from src.models.Transaction import Transaction, TransactionSchema
from src.services.ExpenseTrackingService import trackExpense

transaction_schema = TransactionSchema()

def create_transaction():
    try:
        account_id = request.json['account_id']
        amount = request.json['amount']
        category = request.json['category']
        date = request.json['date']
        description = request.json['description']

        new_transaction = Transaction(account_id, amount, category, date, description)
        trackExpense(new_transaction)

        return jsonify(transaction_schema.dump(new_transaction)), 201

    except Exception as e:
        return jsonify({"message": str(e)}), 400

def get_transactions():
    try:
        transactions = Transaction.query.all()
        return jsonify(transaction_schema.dump(transactions, many=True)), 200

    except Exception as e:
        return jsonify({"message": str(e)}), 400

def get_transaction_by_id(transaction_id):
    try:
        transaction = Transaction.query.get(transaction_id)
        if transaction:
            return jsonify(transaction_schema.dump(transaction)), 200
        else:
            return jsonify({"message": "Transaction not found"}), 404

    except Exception as e:
        return jsonify({"message": str(e)}), 400

def update_transaction(transaction_id):
    try:
        transaction = Transaction.query.get(transaction_id)
        if transaction:
            transaction.account_id = request.json.get('account_id', transaction.account_id)
            transaction.amount = request.json.get('amount', transaction.amount)
            transaction.category = request.json.get('category', transaction.category)
            transaction.date = request.json.get('date', transaction.date)
            transaction.description = request.json.get('description', transaction.description)

            trackExpense(transaction)

            return jsonify(transaction_schema.dump(transaction)), 200
        else:
            return jsonify({"message": "Transaction not found"}), 404

    except Exception as e:
        return jsonify({"message": str(e)}), 400

def delete_transaction(transaction_id):
    try:
        transaction = Transaction.query.get(transaction_id)
        if transaction:
            Transaction.query.delete(transaction)
            return jsonify({"message": "Transaction deleted"}), 200
        else:
            return jsonify({"message": "Transaction not found"}), 404

    except Exception as e:
        return jsonify({"message": str(e)}), 400
```