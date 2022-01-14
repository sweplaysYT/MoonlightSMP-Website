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