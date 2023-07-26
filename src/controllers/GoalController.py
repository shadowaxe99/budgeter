```python
from flask import request, jsonify
from src.models.Goal import Goal
from src.services.GoalSettingService import GoalSettingService

class GoalController:

    def __init__(self):
        self.goal_setting_service = GoalSettingService()

    def create_goal(self):
        data = request.get_json()
        goal = Goal(data)
        result = self.goal_setting_service.setGoal(goal)
        return jsonify(result)

    def get_goals(self, user_id):
        goals = self.goal_setting_service.getGoals(user_id)
        return jsonify(goals)

    def update_goal(self, goal_id):
        data = request.get_json()
        result = self.goal_setting_service.updateGoal(goal_id, data)
        return jsonify(result)

    def delete_goal(self, goal_id):
        result = self.goal_setting_service.deleteGoal(goal_id)
        return jsonify(result)
```