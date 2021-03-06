import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import jsonInfo from "../json/jsonInfo.json";
import products from "../json/products.json"


// INITIALIZE FIREBASE
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APPID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID
}

firebase.initializeApp(firebaseConfig);
// REFERENCE PRODUCTS
const productsCollectionRef = firebase.firestore().collection("products");
const productsDocRef = productsCollectionRef.doc("json");
const allProductsCollectionRef = productsDocRef.collection("allProducts");
const allOrdersCollectionRef = firebase.firestore().collection("allOrders");

//REFERENCE AUTH
const auth = firebase.auth();

export const getProductById = async (productId) => {
    // REFERENCE PRODUCTS COLLECTION
    const doc = await allProductsCollectionRef.doc(productId).get();
    return doc.data()
}

export const getProducts = async (url) => {
    const collection = jsonInfo.find(element => element.url === url);
    const collectionName = collection.name || "allProducts";
    console.log(collectionName)
    let jsonProducts = [];
  
    // QUERY PRODUCTS
    let querySnapshot;
    if (collectionName === "allProducts")
      querySnapshot = await allProductsCollectionRef.get();
    else
      querySnapshot = await allProductsCollectionRef.where("category", "==", collectionName).get();
    querySnapshot.forEach((doc) => {
      jsonProducts.push(doc.data());
    });
    return jsonProducts;
  }

// export const getJSON = (url) => {
//     switch (url) {
//         case "/store":
//             return products;
//         case "/store/newest":
//             return newest;
//         case "/store/taiwan":
//             return taiwan;
//         case "/store/topproduct":
//             return topproduct;
//         default:
//         return products;
//     }
// };

export const feedProducts = () => {
    products.forEach((product) => {
      const docRef = allProductsCollectionRef.doc();
      const id = docRef.id;
      // Store Data for Aggregation Queries
      docRef.set({
        ...product,
        id
      });
    })
}
export const signInWithEmailPassword = async (email, password) => {
    return await auth.signInWithEmailAndPassword(email, password);
}
  
export const registerWithEmailPassword = async (email, password, name) => {
    await auth.createUserWithEmailAndPassword(email, password);
    const user = auth.currentUser;
    await user.updateProfile({
      displayName: name,
    })
    return user;
}

export const updateUserInfoApi = async (email, password, displayName) => {
    console.log(email);
    console.log(password);
    console.log(displayName)
    const user = auth.currentUser;
    if(displayName)
      await user.updateProfile({ displayName });
    if(email)
      await user.updateEmail(String(email));
    if(password)
      await user.updatePassword(password);
    return user;
}

export const addOrderApi = async (order) => {
    const orderRef = await allOrdersCollectionRef.doc();
    const id = orderRef.id;
    // Store Data for Aggregation Queries
    await orderRef.set({
      ...order,
      id
    });
    return { ...order, id };
}
  
export const signOut = () => {
    auth.signOut();
}  
//   export const authenticateAnonymously = () => {
//     return firebase.auth().signInAnonymously();
//   };
  