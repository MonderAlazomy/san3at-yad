/* ==========================================================
   San3at Yad
   Supabase Configuration
   Version: 1.0
========================================================== */

import { createClient }
from "https://esm.sh/@supabase/supabase-js@2";

/* ==========================================================
   Project Configuration
========================================================== */

const SUPABASE_URL =
"ضع رابط مشروع Supabase هنا";

const SUPABASE_ANON_KEY =
"ضع مفتاح anon هنا";

/* ==========================================================
   Client
========================================================== */

export const supabase =
createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

/* ==========================================================
   Database Tables
========================================================== */

export const TABLES = {

    CITIES: "cities",

    PROFESSIONS: "professions",

    ARTISANS: "artisans",

    USERS: "users",

    RATINGS: "ratings",

    FAVORITES: "favorites",

    ADMINS: "admins"

};

/* ==========================================================
   Health Check
========================================================== */

export async function checkConnection() {

    const { error } =
    await supabase
        .from(TABLES.CITIES)
        .select("id")
        .limit(1);

    if (error) {

        console.error(
            "Supabase Connection Failed",
            error.message
        );

        return false;

    }

    console.log(
        "Supabase Connected Successfully"
    );

    return true;

}
