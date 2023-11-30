import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Function to get items for a specific user from Firestore
export async function getItems(userId) {
    try {
      const items = [];
      const q = query(collection(db, `users/${userId}/items`));
      const querySnapshot = await getDocs(q);
  
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          data: doc.data()
        });
      });
  
      return items;
    } catch (error) {
      console.error("Error getting items: ", error);
      throw error;
    }
  }
  
  // Function to add a new item to a specific user's list of items in Firestore
  export async function addItem(userId, item) {
    try {
      const docRef = await addDoc(collection(db, `users/${userId}/items`), item);
      return docRef.id;
    } catch (error) {
      console.error("Error adding item: ", error);
      throw error;
    }
  }