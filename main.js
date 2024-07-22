(function () {
    const deliverDelayHost = document.querySelector('#shadow-root');
    const thankYouDialog = deliverDelayHost.querySelector('#thank-you-dialog');
    const complainDialog = deliverDelayHost.querySelector('#complain');

    thankYouDialog.addEventListener('click', (e) => {
        if(!e.target.classList.contains('dialog-design')) thankYouDialog.close();
    })

    complainDialog.addEventListener('click', (e) => {
        if(!e.target.classList.contains('dialog-design')) complainDialog.close();
    })
    const firstDelay = setTimeout(() => {
        deliverDelayHost.querySelector('.container').classList.remove('d-none');
        deliverDelayHost.querySelector('.spinner').classList.add('d-none');
        thankYouDialog.showModal();
        clearTimeout(firstDelay);
    },1000);

    deliverDelayHost.querySelector('.why-click-here').addEventListener('click', () => {
        complainDialog.showModal();
    })
 
})();