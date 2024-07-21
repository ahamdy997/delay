(function () {
    const deliverDelayHost = document.querySelector('#shadow-root').shadowRoot;
    const firstDelay = setTimeout(() => {
        deliverDelayHost.querySelector('.container').classList.remove('d-none');
        deliverDelayHost.querySelector('.spinner').classList.add('d-none');
        deliverDelayHost.querySelector('#thank-you-dialog').showModal();
        clearTimeout(firstDelay);
    },1000)
 
})();