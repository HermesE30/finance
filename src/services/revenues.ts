import {
  addDoc,
  collection, getDocs, Timestamp,
} from 'firebase/firestore';
import { database } from './client';
import { TransactionData } from '../Interface';

// Client for authentication service
export default class Reve {
  create(data: TransactionData): Promise<{ id: string }> {
    const docData = {
      ...data,
      createdAt: Timestamp.now(),
      deletedAt: null,
    };
    // create get requests
    return new Promise((resolve, reject) => {
      addDoc(collection(database, 'revenues'), docData).then((revenue) => {
        const { id } = revenue;
        resolve({ id });
      }).catch((e) => {
        reject(e);
      });
    });
  }

  listAll(): Promise<any[]> {
    const revenuesCollection = collection(database, 'revenues');
    return new Promise((resolve, reject) => {
      getDocs(revenuesCollection).then((revenues) => {
        const revenuesList = revenues.docs.map((doc) => doc.data());
        resolve(revenuesList);
      }).catch((e) => {
        reject(e);
      });
    });
  }
}
