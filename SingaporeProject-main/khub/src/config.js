// Common API configuration
const config = {
  development: {
    API_URL: 'http://localhost:4000',
  },
  production: {
    API_URL: 'https://your-api-domain.z.com',  // Replace with your z.com API domain
  }
};

const environment = import.meta.env.MODE || 'development';
export const API_CONFIG = config[environment];