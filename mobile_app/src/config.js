const config = {
  API_ENDPOINT: 'https://api.aipersonalbudgeter.com',
  ENCRYPTION_KEY: 'YOUR_ENCRYPTION_KEY',
  SECURE_PROTOCOL: 'https',
  OVERSPENDING_ALERT: 'You are overspending in this category',
  BUDGET_LIMIT_ALERT: 'You have reached your budget limit for this category',
  SUBSCRIPTION_PLAN: {
    BASIC: {
      price: 0,
      features: ['Expense Tracking', 'Budgeting']
    },
    PREMIUM: {
      price: 9.99,
      features: ['Expense Tracking', 'Budgeting', 'Real-time Alerts', 'Goal Setting', 'Expense Analysis', 'Personalized Financial Advice']
    }
  },
  REFERRAL_COMMISSION: 0.1
};

export default config;