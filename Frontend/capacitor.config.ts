import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'arthiyak',
  webDir: 'www',
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      clientId: '152154204031-0k169b8hvl5gkrg3kbq3r4ctol94t03i.apps.googleusercontent.com',
      serverClientId: '52154204031-0k169b8hvl5gkrg3kbq3r4ctol94t03i.apps.googleusercontent.com',
      androidClientId: '152154204031-c4nhc5v2oahtm5jd9cfhnfj83dasbe5c.apps.googleusercontent.com',
      forceCodeForRefreshToken: true
    }
  },

  server: {
    androidScheme: 'https'
  }
}

export default config;
