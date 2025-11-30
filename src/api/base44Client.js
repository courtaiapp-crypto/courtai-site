import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68da6e7c977fd0d4a25bee15", 
  requiresAuth: true // Ensure authentication is required for all operations
});
