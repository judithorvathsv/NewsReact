
export function updateClampClassMobileShort() {
    const articleTexts = document.querySelectorAll('.main__article-text-mobile-short');
    const width = window.innerWidth;

    articleTexts.forEach(articleText => {
        articleText.classList.remove('clamp-2', 'clamp-6');

        if (width < 768) {
            articleText.classList.add('clamp-2');
        } else if (width >= 768) {
            articleText.classList.add('clamp-6');
        }
    });
}

export function updateClampClassTabletLong() {
    const articleTexts = document.querySelectorAll('.main__article-text-tablet-long');
    const width = window.innerWidth;

    articleTexts.forEach(articleText => {
        articleText.classList.remove('clamp-2', 'clamp-6');

        if (width < 768) {
            articleText.classList.add('clamp-2');
        } else if (width >= 768 && width < 1024) {
            articleText.classList.add('clamp-6');
        } else {
            articleText.classList.add('clamp-2');
        }
    });
}

export function toggleFullscreen(article: HTMLElement) {
    if (article.classList.contains('fullscreen')) {
        article.classList.remove('fullscreen');       
        const image = article.querySelector('.main__article-image') as HTMLElement; 
        if (image) {
            image.style.display = ''; 
        }
    } else {   
        article.classList.add('fullscreen');
        const image = article.querySelector('.main__article-image') as HTMLElement; 
        if (image) {
            image.style.display = 'none'; 
        }
    }
}



