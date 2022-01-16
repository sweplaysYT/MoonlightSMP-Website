// ? NAVBAR LINE

function homeLinkHover() {
    const homeBar = document.getElementById('navbar-home-bar');
    setTimeout(function() {
        homeBar.style.backgroundColor = "rgb(0, 195, 255)";
        homeBar.style.width = "128px"
        homeBar.style.transition = "width 0.3s";
    }, 1)
}

function homeLinkStopHover() {
    const homeBar = document.getElementById('navbar-home-bar');
    setTimeout(function() {
        homeBar.style.width = "0px"
        homeBar.style.transition = "width 0.3s";
    }, 1)
}

function faqLinkHover() {
    const faqBar = document.getElementById('navbar-faq-bar');
    setTimeout(function() {
        faqBar.style.backgroundColor = "rgb(0, 195, 255)";
        faqBar.style.width = "128px"
        faqBar.style.transition = "width 0.3s";
    }, 1)
}

function faqLinkStopHover() {
    const faqBar = document.getElementById('navbar-faq-bar');
    setTimeout(function() {
        faqBar.style.width = "0px"
        faqBar.style.transition = "width 0.3s";
    }, 1)
}

function rulesLinkHover() {
    const rulesBar = document.getElementById('navbar-rules-bar');
    setTimeout(function() {
        rulesBar.style.backgroundColor = "rgb(0, 195, 255)";
        rulesBar.style.width = "128px"
        rulesBar.style.transition = "width 0.3s";
    }, 1)
}

function rulesLinkStopHover() {
    const rulesBar = document.getElementById('navbar-rules-bar');
    setTimeout(function() {
        rulesBar.style.width = "0px"
        rulesBar.style.transition = "width 0.3s";
    }, 1)
}