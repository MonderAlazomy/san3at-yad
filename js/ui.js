/* ==========================================================
   San3at Yad
   UI Module
   Version: 1.0
========================================================== */

/* ==========================================================
   DOM Elements
========================================================== */

const featuredSection =
document.getElementById("featured-artisans");

/* ==========================================================
   Empty State
========================================================== */

export function showEmptyState(message) {

    if (!featuredSection) return;

    featuredSection.innerHTML = `
        <div class="empty-state">

            <h3>لا توجد نتائج</h3>

            <p>${message}</p>

        </div>
    `;

}

/* ==========================================================
   Loading State
========================================================== */

export function showLoading() {

    if (!featuredSection) return;

    featuredSection.innerHTML = `
        <div class="loading-state">

            جاري تحميل الحرفيين...

        </div>
    `;

}

/* ==========================================================
   Render Artisan Cards
========================================================== */

export function renderArtisans(artisans) {

    if (!featuredSection) return;

    if (!artisans || artisans.length === 0) {

        showEmptyState(
            "لم يتم العثور على حرفيين."
        );

        return;

    }

    featuredSection.innerHTML =
        artisans.map(createCard).join("");

}

/* ==========================================================
   Artisan Card
========================================================== */

function createCard(artisan) {

    return `

        <article class="artisan-card">

            <div class="card-header">

                <div class="card-icon">

                    🛠️

                </div>

                <div class="card-info">

                    <h3 class="card-name">

                        ${artisan.full_name}

                    </h3>

                    <p class="card-profession">

                        ${artisan.profession}

                    </p>

                    <p class="card-city">

                        ${artisan.region}

                    </p>

                    <div class="card-rating">

                        ⭐ ${artisan.rating ?? 0}

                    </div>

                </div>

            </div>

        </article>

    `;

}
