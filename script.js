let currentReview = 1;
const totalReviews = 4;

function showReview(reviewNumber) {
    for (let i = 1; i <= totalReviews; i++) {
        document.getElementById(`review-${i}`).style.display = 'none';
    }
    document.getElementById(`review-${reviewNumber}`).style.display = 'flex';
    
    document.querySelectorAll('.indicator').forEach(indicator => {
        indicator.classList.remove('active');
    });
    document.querySelector(`[data-slide="${reviewNumber}"]`).classList.add('active');
}

document.getElementById('next-btn').addEventListener('click', () => {
    currentReview = currentReview === totalReviews ? 1 : currentReview + 1;
    showReview(currentReview);
});

document.getElementById('prev-btn').addEventListener('click', () => {
    currentReview = currentReview === 1 ? totalReviews : currentReview - 1;
    showReview(currentReview);
});

document.querySelectorAll('.indicator').forEach(indicator => {
    indicator.addEventListener('click', () => {
        currentReview = parseInt(indicator.dataset.slide);
        showReview(currentReview);
    });
});

let searchActive = false;
const searchContainer = document.getElementById('search-container');
const mainContent = document.getElementById('main-content');
const recomContainer = document.querySelector('.search-recom-container');

function toggleSearch() {
    if (!searchActive) {
        searchContainer.style.display = 'flex';
        recomContainer.style.display = 'block';
        mainContent.classList.add('hide');
        setTimeout(() => {
            searchContainer.classList.add('show');
            recomContainer.classList.add('show');
        }, 10);
        setTimeout(() => mainContent.style.display = 'none', 300);
        searchActive = true;
    } else {
        searchContainer.classList.remove('show');
        recomContainer.classList.remove('show');
        mainContent.style.display = 'block';
        mainContent.classList.remove('hide');
        setTimeout(() => {
            searchContainer.style.display = 'none';
            recomContainer.style.display = 'none';
        }, 300);
        searchActive = false;
    }
}

document.getElementById('search-btn').addEventListener('click', (e) => {
    e.preventDefault();
    toggleSearch();
});

document.getElementById('search-cancel').addEventListener('click', () => {
    if (searchActive) {
        toggleSearch();
    }
});