```python
from flask import request, jsonify
from src.models.User import User, UserSchema
from src.services.SubscriptionService import subscribe
from src.utils.EncryptionUtils import encryptData

user_schema = UserSchema()

def create_user():
    req_data = request.get_json()
    data, error = user_schema.load(req_data)
    
    if error:
        return jsonify(error), 422
    
    user = User(data)
    user.password = encryptData(user.password)
    user.save()

    return user_schema.jsonify(user), 201

def get_user(user_id):
    user = User.query.get_or_404(user_id)
    return user_schema.jsonify(user)

def update_user(user_id):
    user = User.query.get_or_404(user_id)
    req_data = request.get_json()
    data, error = user_schema.load(req_data, partial=True)
    
    if error:
        return jsonify(error), 422
    
    for key, value in data.items():
        setattr(user, key, value)
    
    user.save()
    
    return user_schema.jsonify(user)

def delete_user(user_id):
    user = User.query.get_or_404(user_id)
    user.delete()
    return '', 204

def subscribe_user(user_id, subscription_plan):
    user = User.query.get_or_404(user_id)
    subscribe(user, subscription_plan)
    return user_schema.jsonify(user)
```