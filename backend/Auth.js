import { auth } from "./Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";

export async function signup(email, password, setUser) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  setUser(user);
  console.log("User signed up:", user);
  return user;
}


export async function login(email, password, setUser) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  setUser(user);
  console.log("User logged in:", user);
  return user;
}


export async function isEmailInUse(email) {
  return fetchSignInMethodsForEmail(auth, email);
}

