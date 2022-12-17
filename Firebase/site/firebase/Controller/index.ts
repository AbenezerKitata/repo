import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "../firebaseApp";
import { AddReservationType } from "../types/reservation";
export const firestore = getFirestore(app);
// Reservations collection

export const appointmentsCollection = collection(firestore, "appointments");

export const addRes = async (resData: AddReservationType) => {
  const newRes = await addDoc(appointmentsCollection, { ...resData });
  console.log(`The new Res was created at ${newRes.path}`);
};
