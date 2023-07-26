```python
from src.models.User import User
from src.models.Goal import Goal

class GoalSettingService:
    def __init__(self):
        pass

    def setGoal(self, user: User, goal: Goal):
        """
        Set a new financial goal for the user
        """
        user.goals.append(goal)
        user.save()

    def getGoals(self, user: User):
        """
        Get all financial goals of the user
        """
        return user.goals

    def updateGoal(self, user: User, goal: Goal):
        """
        Update a financial goal of the user
        """
        for i in range(len(user.goals)):
            if user.goals[i].id == goal.id:
                user.goals[i] = goal
                user.save()
                return
        raise Exception("Goal not found")

    def deleteGoal(self, user: User, goalId: str):
        """
        Delete a financial goal of the user
        """
        for i in range(len(user.goals)):
            if user.goals[i].id == goalId:
                del user.goals[i]
                user.save()
                return
        raise Exception("Goal not found")
```