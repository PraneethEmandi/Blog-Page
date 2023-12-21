
document.addEventListener('DOMContentLoaded', function () {
    var authorLink = document.getElementById('authorLink');
    authorLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'index.html#authorLink';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var authorLink = document.getElementById('about');
    authorLink.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'index.html#about';
    });
});
// script.js
document.addEventListener('DOMContentLoaded', function () {
    var articleLink = document.getElementById('articleLink');
    articleLink.addEventListener('click', function () {
        window.location.href = 'article.html';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var articleLink = document.getElementById('articleLink2');
    articleLink.addEventListener('click', function () {
        window.location.href = 'article.html';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var articleLink = document.getElementById('articleLink3');
    articleLink.addEventListener('click', function () {
        window.location.href = 'article.html';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var articleLink = document.getElementById('articleLink4');
    articleLink.addEventListener('click', function () {
        window.location.href = 'article.html';
    });
});