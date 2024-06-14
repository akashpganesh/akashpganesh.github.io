// document.getElementById('resume_btn').addEventListener('click', function() {
//     var url = './assets/resume/AkashPGaneshResume.pdf';
//     var a = document.createElement('a');
//     a.href = url;
//     a.download = 'Akash_P_Ganesh.pdf';
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
// });

var toggle = document.getElementById("toggle-ul")

const toggleMenu = () => {
    toggle.style.transform = "translateX(50%)"
}

const toggleClose = () => {
    toggle.style.transform = "translateX(100%)"
}