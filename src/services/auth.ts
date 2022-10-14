import {
  createUserWithEmailAndPassword,
  getAuth,
  getIdToken,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { firebaseApp } from './client';

// Client for authentication service
export default class AuthServices {
  login(email: string, password: string): Promise<{ jwtToken: string }> {
    // create a client for private routes
    const auth = getAuth(firebaseApp);
    // create get request
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const { user } = userCredential;
          getIdToken(user, true).then((jwtToken: string) => {
            resolve({ jwtToken });
          });
        }).catch((e) => {
          reject(e);
        });
    });
  }

  create(email: string, password: string): Promise<any> {
    // create a client for private routes
    const auth = getAuth(firebaseApp);
    // create get request
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const { user } = userCredential;
          resolve({ user });
        }).catch((e) => {
          reject(e);
        });
    });
  }
}
