(function() {
        // update footer year automatically (optional)
        let footerPara = document.querySelector('.footer-copyright');
        if(footerPara) {
            let currentYear = new Date().getFullYear();
            if(footerPara.innerText.includes('2026')) {
                footerPara.innerText = footerPara.innerText.replace('2026', currentYear);
            }
        }
        console.log("Portfolio ready - simple flexbox version!");
    })();