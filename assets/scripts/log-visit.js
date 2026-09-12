import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

const encoded_key = "QUl6YVN5REE0MTRUSVlXdV9jOE9LV2oxR3ZnckdaYll6R1B6djZV";
const firebaseConfig = {
    apiKey: atob(encoded_key),
    authDomain: "counter-508020.firebaseapp.com",
    databaseURL: "https://youtube-counter-508020-default-rtdb.firebaseio.com",
    projectId: "youtube-counter-508020",
    storageBucket: "youtube-counter-508020.firebasestorage.app",
    messagingSenderId: "600998318105",
    appId: "1:600998318105:web:9835946bd363b3b57cda88"
};

const SECRET_KEY = '#EÅÏ"àë.×θÞyσJÒÙæØyXâTχË2HPoè3öÀâ[ÓNEPsοÄυîHjh(CÒÀPÐ}>M*{ÑfGoμCêKÈ"VGÄuÅç~1G?ζξLZ%MοÑÞK[òÂCYÒpöl8:';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

signInAnonymously(auth)
    .then(() => {
        const visitorData = JSON.stringify({
            page: window.location.pathname,
            time: new Date().toLocaleTimeString()
        });

        const encryptedPayload = CryptoJS.AES.encrypt(visitorData, SECRET_KEY).toString();

        push(ref(db, 'active-visitors'), {
            payload: encryptedPayload
        });
    })
    .catch((error) => {
        console.error("Visitor tracking initialization failed:", error);
    });
