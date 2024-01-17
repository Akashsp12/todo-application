import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.arthiyak',
  appName: 'arthiyak',
  webDir: 'www',
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      serverClientId: '152154204031-gaebq93m25k7adfr0otbqaj68olg8ljt.apps.googleusercontent.com',
      forceCodeForRefreshToken: true
    }
  },

  server: {
    androidScheme: 'https'
  }
}

export default config;
