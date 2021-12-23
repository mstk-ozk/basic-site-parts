// JavaScript Document
'use strict';

{
    const dlDtClickOpen = document.getElementById('dl-dt-click-open').querySelectorAll('dt');
    
    dlDtClickOpen.forEach((dt,index) => {
        dlDtClickOpen[index].addEventListener('click', () => {
            dlDtClickOpen[index].nextElementSibling.classList.toggle('display-toggle')
        });
    
    });
    
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
    
    const firstAccordion  = new dlAccordion({
        dlIdName: 'js-accordion',
    });
    const secondAccordion  = new dlAccordion({
        dlIdName: 'js-accordion-01',
    });

    
    
    
    
}