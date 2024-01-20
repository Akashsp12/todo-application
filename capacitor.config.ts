import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.arthiyak',
  appName: 'arthiyak',
  webDir: 'www',
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      serverClientId: '950069122964-ip7vfu37faao902o350p6uqqsc97ajkl.apps.googleusercontent.com',
      forceCodeForRefreshToken: true
    },
    FirebaseAuthentication: {
      skipNativeAuth: false,
      providers: [
        "google.com",
      ]
    }
  },

  server: {
    androidScheme: 'https'
  }
}

export default config;

