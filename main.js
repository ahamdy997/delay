(function () {
    const deliverDelayHost = document.querySelector('#shadow-root');
    const thankYouDialog = deliverDelayHost.querySelector('#thank-you-dialog');

   
    const firstDelay = setTimeout(() => {
        deliverDelayHost.querySelector('.container').classList.remove('d-none');
        deliverDelayHost.querySelector('.spinner').remove();
        thankYouDialog.showModal();
        clearTimeout(firstDelay);
    },1000);

 
})();
const deliverDelayHost = document.querySelector('#shadow-root');
const complainDialog = deliverDelayHost.querySelector('#complain');
const thankYouDialog = deliverDelayHost.querySelector('#thank-you-dialog');

thankYouDialog.addEventListener('click', (e) => {
    if(!e.target.classList.contains('dialog-design')) thankYouDialog.close();
})

complainDialog.addEventListener('click', (e) => {
    if(!e.target.classList.contains('dialog-design')) complainDialog.close();
})

deliverDelayHost.querySelector('.why-click-here').addEventListener('click', () => {
    complainDialog.showModal();
    complainDialog.querySelector('input[radio]')

})
