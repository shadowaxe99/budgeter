**Shared Dependencies:**

**Exported Variables:**
- `config`: Configuration settings used across multiple files.
- `user`: User data used in UserController, AccountController, TransactionController, GoalController, and various services.
- `account`: Account data used in AccountController, TransactionController, and ExpenseTrackingService.
- `transaction`: Transaction data used in TransactionController and ExpenseTrackingService.
- `goal`: Goal data used in GoalController and GoalSettingService.

**Data Schemas:**
- `UserSchema`: Defines the structure of user data, used in User.py and UserController.py.
- `AccountSchema`: Defines the structure of account data, used in Account.py and AccountController.py.
- `TransactionSchema`: Defines the structure of transaction data, used in Transaction.py and TransactionController.py.
- `GoalSchema`: Defines the structure of goal data, used in Goal.py and GoalController.py.

**DOM Element IDs:**
- `homeScreen`: Used in HomeScreen.js and App.js.
- `accountScreen`: Used in AccountScreen.js and App.js.
- `transactionScreen`: Used in TransactionScreen.js and App.js.
- `goalScreen`: Used in GoalScreen.js and App.js.
- `subscriptionScreen`: Used in SubscriptionScreen.js and App.js.
- `referralScreen`: Used in ReferralScreen.js and App.js.

**Message Names:**
- `OVERSPENDING_ALERT`: Used in AlertService.py and Alert.js.
- `BUDGET_LIMIT_ALERT`: Used in AlertService.py and Alert.js.

**Function Names:**
- `trackExpense`: Used in ExpenseTrackingService.py and ExpenseTracker.js.
- `analyzeSpending`: Used in BudgetingService.py and BudgetPlanner.js.
- `setGoal`: Used in GoalSettingService.py and GoalSetter.js.
- `analyzeExpense`: Used in ExpenseAnalysisService.py and ExpenseAnalyzer.js.
- `subscribe`: Used in SubscriptionService.py and Subscription.js.
- `refer`: Used in ReferralService.py and Referral.js.
- `encryptData`: Used in EncryptionUtils.py and securityUtils.js.
- `secureProtocol`: Used in SecurityUtils.py and securityUtils.js.