$('#ok18-roadblock-wrap, .okam-device-desktop, .cube-bigyaapan, .box-wrapper, #content > div > div.row.center-aligned-ad, #roadblock-ad, .modalbox.desktop-jacket-bigyaapan, .news-whitebgcolor-popup, .modal-backdrop').remove();

$('body, html').find('a').each((i,e)=>{
    const a = $(e);
    const img = a.children('img').attr('src');
    if(img && a.attr('href').includes('http') && !a.attr('href').includes(document.location.host.replace('www.','').replace('.com',''))){
        a.remove();
    }
});
