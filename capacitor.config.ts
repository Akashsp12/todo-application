import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'arthiyak',
  webDir: 'www',
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      serverClientId: "152154204031-0k169b8hvl5gkrg3kbq3r4ctol94t03i.apps.googleusercontent.com",
      forceCodeForRefreshToken: true
    }
  },

  server: {
    androidScheme: 'https'
  }
}

export default config;
