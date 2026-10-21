const env = import.meta.env;

export default {
  contact: {
    EMAIL: env.VITE_EMAIL || 'hello@successlane.com',
    PHONE: env.VITE_PHONE || '',
    ADDRESS: env.VITE_ADDRESS || '',
  },
  social: {
    FB_URL: env.VITE_FACEBOOK_URL || '',
    INSTA_URL: env.VITE_INSTA_URL || '',
    TWITTER_URL: env.VITE_TWITTER_URL || '',
    GITHUB_URL: env.VITE_GITHUB_URL || '',
  },
  legal: {
    PRIVACY_POLICY_URL: env.VITE_PRIVACY_POLICY_URL || '',
  },
  payments: {
    paypal: env.VITE_PAYPAL_DONATE_BUTTON_ID || '',
  },
};
