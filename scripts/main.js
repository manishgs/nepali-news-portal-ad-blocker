const domain = document.location.host.replace('www.','');
const settings = {
    show_ads: false
};
  
const popup_removers = {
    'onlinekhabar.com' : '#ok18-roadblock-wrap, .okam-device-desktop',
    'setopati.com' : '.modalbox.desktop-jacket-bigyaapan',
    'ratopati.com':'.news-whitebgcolor-popup, .box-wrapper.text-center, .modal-backdrop ',
    'ekantipur.com' : '#roadblock-ad'
}

const replaceImages = function(){
    if(popup_removers[domain]){
        $(popup_removers[domain]).remove();
    }
    
    if(domain === 'ratopati.com'){
        $('body').removeClass('modal-open');
    }
    
    if(domain === 'annapurnapost.com'){
        $('.opac').on('DOMSubtreeModified', function(){
            replaceImages();
            $('.advertisement ').remove();
        });
    }

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

chrome.storage.sync.get('show_ads',function(data){
    settings.show_ads = !!data.show_ads;
    if(!settings.show_ads){
        replaceImages();
     }
});

