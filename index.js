var opacity = 0;

function serverAddressCopy() {
    document.getElementById('copyAddressButton')
    var address = "MoonLightsS1.aternos.me"
    var dummy = document.createElement("textarea");
    var increment = 0.05
    document.body.appendChild(dummy);
    dummy.value = address;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    var popup = document.getElementById('address-popup');
    popup.style.display = "block";
    var instance = window.setInterval(function() {
        popup.style.opacity = opacity;
        opacity = opacity + increment;
        if (opacity >= 1.1) {
            window.clearInterval(instance);
        }
    },15);
}

document.querySelector("#copyAddressButton").addEventListener("click", serverAddressCopy);

function ClosePopup() {
    var popup = document.getElementById('address-popup');
    var decrement = 0.05
    var instance = window.setInterval(function() {
        popup.style.opacity = opacity;
        opacity = opacity - decrement;
        if (opacity < 0) {
            window.clearInterval(instance);
            popup.style.display = "none";
        }
    },15);

}

document.querySelector("#addressCopyPopupButton").addEventListener("click", ClosePopup);

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