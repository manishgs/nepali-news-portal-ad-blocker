const domain = document.location.host.replace('www.','');

const popup_removers = {
    'onlinekhabar.com' : '#ok18-roadblock-wrap, .okam-device-desktop',
    'setopati.com' : '.modalbox.desktop-jacket-bigyaapan',
    'ratopati.com':'.news-whitebgcolor-popup, .box-wrapper.text-center, .modal-backdrop ',
    'ekantipur.com' : '#roadblock-ad'
}

if(popup_removers[domain]){
    $(popup_removers[domain]).remove();
}

if(domain === 'setopati.com'){
    $('body').removeClass('modal-open');
}

if(domain === 'annapurnapost.com'){
    $('.opac').on('DOMSubtreeModified', function(){
        replaceImages();
        $('.advertisement ').remove();
    });
}

const replaceImages = function(){
    $('body').find('a').each((i,e)=>{
        const a = $(e);
        const img = a.children('img').attr('src');
        if(img && a.attr('href').includes('http') && !a.attr('href').includes(domain)){
            a.remove();
        }else if(img && img.endsWith('.gif')){
            a.remove();
        }
    });    
}

replaceImages();