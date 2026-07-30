/* ==========================================================
   San3at Yad
   Search Module
   Version: 1.0
========================================================== */

import { supabase, TABLES } from "./supabase.js";
import {
    renderArtisans,
    showLoading,
    showEmptyState
} from "./ui.js";

/* ==========================================================
   Search Filters
========================================================== */

let currentProfession = "";

let currentRegion = "";

/* ==========================================================
   Set Filters
========================================================== */

export function setProfession(value) {

    currentProfession = value ?? "";

}

export function setRegion(value) {

    currentRegion = value ?? "";

}

/* ==========================================================
   Load Featured Artisans
========================================================== */

export async function loadFeaturedArtisans() {

    showLoading();

    const { data, error } =
    await supabase
        .from(TABLES.ARTISANS)
        .select("*")
        .eq("status", "approved")
        .order("rating", {
            ascending: false
        });

    if (error) {

        console.error(error);

        showEmptyState(
            "حدث خطأ أثناء تحميل البيانات."
        );

        return;

    }

    renderArtisans(data);

}

/* ==========================================================
   Search
========================================================== */

export async function searchArtisans() {

    showLoading();

    let query =
    supabase
        .from(TABLES.ARTISANS)
        .select("*")
        .eq("status", "approved");

    if (currentProfession !== "") {

        query =
        query.eq(
            "profession",
            currentProfession
        );

    }

    if (currentRegion !== "") {

        query =
        query.eq(
            "region",
            currentRegion
        );

    }

    query =
    query.order(
        "rating",
        {
            ascending:false
        }
    );

    const {
        data,
        error
    } = await query;

    if (error) {

        console.error(error);

        showEmptyState(
            "تعذر تنفيذ البحث."
        );

        return;

    }

    renderArtisans(data);

}
