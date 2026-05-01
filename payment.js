const API_KEY = "sk_test_123456789_FAKE_DEMO_KEY_DO_NOT_USE";

function processPayment(amount) {
  return {
    success: true,
    amount,
    keyUsed: API_KEY
  };
}

module.exports = {
  processPayment
};
