document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('search-btn');
    const searchContainer = document.getElementById('search-container');
    const searchCancel = document.getElementById('search-cancel');
    const searchRecomContainer = document.querySelector('.search-recom-container');
    const mainContent = document.getElementById('main-content');
    let isSearchOpen = false;

    function toggleSearch() {
        if (!isSearchOpen) {
            searchContainer.style.display = 'flex';
            searchRecomContainer.style.display = 'block';
            mainContent.style.display = 'none';
            setTimeout(() => {
                searchContainer.classList.add('show');
                searchRecomContainer.classList.add('show');
            }, 10);
            isSearchOpen = true;
        } else {
            searchContainer.classList.remove('show');
            searchRecomContainer.classList.remove('show');
            setTimeout(() => {
                searchContainer.style.display = 'none';
                searchRecomContainer.style.display = 'none';
                mainContent.style.display = 'block';
            }, 300);
            isSearchOpen = false;
        }
    }

    searchBtn.addEventListener('click', toggleSearch);
    searchCancel.addEventListener('click', toggleSearch);
});