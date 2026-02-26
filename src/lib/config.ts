export const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

export const config = {
    appUrl,
    registrationEnabled: process.env.NEXT_PUBLIC_REGISTRATION_ENABLED !== 'false',
};
