(function () {
    const deliverDelayHost = document.querySelector('#shadow-root').shadowRoot;
    const firstDelay = setTimeout(() => {
        deliverDelayHost.querySelector('main').classList.remove('d-none');
        deliverDelayHost.querySelector('.spinner').classList.add('d-none');
        clearTimeout(firstDelay);
    },1000)
    // deliverDelayHost.querySelector('.layer').addEventListener('click', () => {
    //     deliverDelayHost.querySelector('.spinner').classList.remove('d-none');
    //     deliverDelayHost.querySelector('#thank-you-dialog').close();
    //     deliverDelayHost.querySelector('#complain').close();
    //     deliverDelayHost.querySelector('.layer').style.opacity = 0;
    //     deliverDelayHost.querySelector('.layer').style.zIndex = -10;

    //     const handleSpinner = setTimeout(() => {
    //         deliverDelayHost.querySelector('.spinner').classList.add('d-none');
    //         deliverDelayHost.querySelectorAll('.why-delay').forEach(el => el.classList.remove('d-none'));
    //         clearTimeout(handleSpinner);
    //     },500)


    //     const complainBtn = deliverDelayHost.querySelector('.why-click-here');
    //     complainBtn.addEventListener('click', () => {
    //         deliverDelayHost.querySelector('.spinner').classList.remove('d-none');
    //         const finalDelay = setTimeout(() => {
    //             deliverDelayHost.querySelector('.spinner').classList.add('d-none');
    //             deliverDelayHost.querySelector('#complain').show();
    //             deliverDelayHost.querySelector('.layer').style.opacity = 1;
    //             deliverDelayHost.querySelector('.layer').style.zIndex = 1;
    //             clearTimeout(finalDelay);
    //         },500)
    //     })
       
        
    // })
})();