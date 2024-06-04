function searchTrailer() {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        const video = `https://www.youtube.com/results?search_query=${query}+трейлер`;
        window.open(video, '_blank')
    } else {
        alert("Пожалуйста, введите название фильма.");
    }
}