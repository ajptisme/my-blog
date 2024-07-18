document.addEventListener('DOMContentLoaded', () => {
    const posts = document.querySelectorAll('.post');

    posts.forEach(post => {
        const reactionButtons = post.querySelectorAll('.reaction-btn');
        
        reactionButtons.forEach(button => {
            button.addEventListener('click', () => {
                const emoji = button.getAttribute('data-emoji');
                const countSpan = post.querySelector(`.${emoji}-count`);
                countSpan.textContent = parseInt(countSpan.textContent) + 1;
            });
        });
    });
});
