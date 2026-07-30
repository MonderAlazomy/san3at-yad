/* ==========================================================
   San3at Yad
   App Entry Point
   Version: 1.0
========================================================== */

import { checkConnection } from "./supabase.js";

/* ==========================================================
   App Initialization
========================================================== */

async function initializeApp() {

    console.log("Starting San3at Yad...");

    const connected = await checkConnection();

    if (!connected) {

        alert("تعذر الاتصال بقاعدة البيانات.");

        return;

    }

    console.log("Application Ready");

}

/* ==========================================================
   Start Application
========================================================== */

document.addEventListener(
    "DOMContentLoaded",
    initializeApp
);
