// hooks/useGoogleSignIn.js
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import Constants from 'expo-constants';

WebBrowser.maybeCompleteAuthSession(); // Important for iOS

const extra = Constants.expoConfig?.extra ?? {};
const API_BASE_URL = extra.API_BASE_URL;

export function useGoogleSignIn() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: extra.GOOGLE_EXPO_CLIENT_ID,
    iosClientId: extra.GOOGLE_IOS_CLIENT_ID,
    androidClientId: extra.GOOGLE_ANDROID_CLIENT_ID,
    // FORCE the Expo proxy so redirect is https://auth.expo.io/@adit1212/SavifyApp
    useProxy: true,
  });

  const signIn = async () => {
    // Opens Google; response handled below
    await promptAsync({ useProxy: true });
  };

  const exchange = async () => {
    if (response?.type !== 'success') return null;
    const idToken = response.authentication?.idToken;
    if (!idToken) throw new Error('No id_token from Google');

    // Send to your server for verification + app JWT
    const res = await fetch(`${API_BASE_URL}/api/auth/google/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idToken }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.message || 'Google token verification failed');
    }
    return res.json(); // => { token, user: { id, name, email, picture } }
  };

  return { request, response, signIn, exchange };
}
