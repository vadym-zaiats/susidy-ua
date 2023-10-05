function detectOS() {
    return navigator.platform.indexOf('Win') > -1;
}
if (detectOS()) {
    document.querySelector('.outer').addEventListener('wheel', function(e) {
        this.scrollTop -= (e.deltaY);
        e.preventDefault();
    }, false);
}