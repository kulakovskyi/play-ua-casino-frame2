const itemsReview  = document.querySelectorAll('.casino__item-reviews')

itemsReview.forEach(item => {
    let buttonItem = item.querySelector('.casino__item-reviews-showMobile-text');
    let infoItem = item.querySelectorAll('.casino__item-reviews-list');
    let imagesBtn = item.querySelector('.casino__item-reviews-showMobile-icon');
    let showMobile = item.querySelector('.casino__item-reviews-showMobile');

    buttonItem.addEventListener('click', ()=>{
        !showMobile.classList.contains('_open') ? buttonItem.textContent = 'Hide' : buttonItem.textContent = 'Pros and cons'
        imagesBtn.classList.toggle('_none');
        showMobile.classList.toggle('_open');
        infoItem.forEach(info=>{
            info.classList.toggle('_open')
        })
    })
})