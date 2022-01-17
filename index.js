var opacity = 0;
let begonetimer = 5 * 1000;

function serverAddressCopy() {
    var address = "MoonLightsS1.aternos.me"
    var dummy = document.createElement("textarea");
    var increment = 0.05
    document.body.appendChild(dummy);
    dummy.value = address;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    var popup = document.getElementById('copy-address-alert');
    popup.style.display = "flex";
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
    var popup = document.getElementById('copy-address-alert');
    var decrement = 0.05
    var instance = window.setInterval(function() {
        popup.style.opacity = opacity;
        opacity = opacity - decrement;
        if (opacity < 0) {
            begonetimer = 5 * 1000;
            window.clearInterval(instance);
            popup.style.display = "none";
        }
    },15);
}

function closePopupBarWidth() {
    var bar = document.getElementById('address-alert-bar');
    bar.style.marginTop = "22.5%"
    bar.style.width = "0"
    bar.style.transition = "width 0.3s"
}

document.querySelector("#addressCopyPopupButton").addEventListener("click", ClosePopup);

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

// ? SERVER ADDRESS

function addressHover() {
    const address = document.getElementById('address-bar');
    setTimeout(function() {
        address.style.backgroundColor = "rgb(0, 195, 255)"
        address.style.width = "275px";
        address.style.transition = "width 0.3s";
    }, 1)
}

function addressLeave() {
    const address = document.getElementById('address-bar');
    setTimeout(function() {
        address.style.backgroundColor = "rgb(0, 195, 255)"
        address.style.width = "0px";
        address.style.transition = "width 0.3s";
    }, 1)
}

// ? SERVER ADDRESS ALERT

function addressAlertHover() {
    const alert = document.getElementById('address-alert-bar');
    setTimeout(function() {
        alert.style.display = "block"
        alert.style.backgroundColor = "rgb(0, 195, 255)"
        alert.style.width = "250px";
        alert.style.transition = "width 0.3s";
    }, 1)
}

function addressAlertLeave() {
    const alert = document.getElementById('address-alert-bar');
    setTimeout(function() {
        alert.style.display = "block";
        alert.style.width = "0px";
        alert.style.transition = "width 0.3s";
    }, 1)
}