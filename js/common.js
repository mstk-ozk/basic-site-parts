// JavaScript Document
'use strict';

{
   //元アコーディオンデータ
    const dlDtClickOpen = document.getElementById('dl-dt-click-open').querySelectorAll('dt');
    dlDtClickOpen.forEach((dt,index) => {
        dlDtClickOpen[index].addEventListener('click', () => {
            dlDtClickOpen[index].nextElementSibling.classList.toggle('display-toggle')
        });
    });

　　/* アコーディオン */
    //dlのアコーディオンクラス
    class dlAccordion{
        constructor(accordion){
            const dlDtAccordion = document.getElementById(accordion.dlIdName).querySelectorAll('dt');
            dlDtAccordion.forEach((dt,index) => {
                dlDtAccordion[index].addEventListener('click', () => {
                    dlDtAccordion[index].nextElementSibling.classList.toggle('display-toggle')
                });
            });
        }
    }
    
    //dlのアコーディオンID
    const firstAccordion  = new dlAccordion({
        dlIdName: 'js-accordion',
    });
    const secondAccordion  = new dlAccordion({
        dlIdName: 'js-accordion-01',
    });
　　/* アコーディオン　END */


　　/* スクロールで表示 */
    //スクロールで表示させるclassを取得
    const scrollTarget = document.getElementsByClassName('scroll-on');
    const scrollTargets = Array.from(scrollTarget);
    
    //スクロールでコンテンツ高さの20％の領域に入ったら表示させる
    const options = {
        threshold: 0.2,
    };

    function callback(entries , obs){
        entries.forEach(entry => {
            if (!entry.isIntersecting){
                return;       
            }
        
            entry.target.classList.add('appear');
            obs.unobserve(entry.target);
        });
        
    }
    
    const observer = new IntersectionObserver(callback , options);
    
    scrollTargets.forEach(target => {
        observer.observe(target);
    });
    
　　/* スクロールで表示　END */
    
}