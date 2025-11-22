console.log("Portfolio script loaded successfully!");
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const path1 = document.querySelector('.path-1');
    const path2 = document.querySelector('.path-2');
    const path3 = document.querySelector('.path-3');

    let angle1 = 0;
    let angle2 = 60; 
    let angle3 = 120;
    function animateAtomicStructure() {
        angle1 = (angle1 + 0.5) % 360; 
        angle2 = (angle2 - 0.7) % 360; 
        angle3 = (angle3 + 0.6) % 360; 
        path1.style.transform = `rotate(${angle1}deg)`;
        path2.style.transform = `rotate(${angle2}deg)`;
        path3.style.transform = `rotate(${angle3}deg)`;
        requestAnimationFrame(animateAtomicStructure);
    }
    if (path1 && path2 && path3) {
        animateAtomicStructure();
    }
});