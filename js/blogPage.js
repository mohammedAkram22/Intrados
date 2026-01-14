//---------------- navbar ----------------
window.onload = () => {
    scrollY > 100 ? header.classList.add("scrolled") : header.classList.remove("scrolled")
}
let header = document.querySelector('header');
let to_up_btn = document.querySelector(".to-up-btn");

window.onscroll = () => {
    scrollY > 100 ? header.classList.add("scrolled") : header.classList.remove("scrolled")
}

//---------------- collapse ----------------

let navbar_toggler_btn = document.querySelector(".navbar-toggler");
let navbar_toggler_icon = document.querySelector(".navbar-toggler span");
let collapse = document.querySelector(".collapse");
navbar_toggler_btn.onclick = () => {
    if (navbar_toggler_icon.classList.contains("fa-bars")) {
        navbar_toggler_icon.classList.replace("fa-bars", "fa-close")
    } else {
        navbar_toggler_icon.classList.replace("fa-close", "fa-bars")
    }
}

const toggler = document.querySelector('.navbar-toggler');

toggler.addEventListener('click', () => {
    setTimeout(() => {
        const expanded = toggler.getAttribute('aria-expanded') === 'true';
        if (expanded) {
            // امنع التمرير تمامًا
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100vh';
        } else {
            // رجّع التمرير طبيعي
            document.body.style.overflow = '';
            document.body.style.height = '';
        }
    }, 10); // ننتظر تحديث aria-expanded من Bootstrap
});
//---------------- TO TOP BTN ----------------

to_up_btn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

//---------------- Dark Mood ----------------
let dark_mood_btn = document.querySelector(".dark-btn")
let mood_icon = document.querySelector(".dark-btn .fa-moon")

if (localStorage.getItem('theme') === 'dark') {
    mood_icon.classList.replace("fa-moon", "fa-sun")
    document.body.classList.toggle("dark")
}
dark_mood_btn.onclick = () => {
    document.body.classList.toggle("dark")
    if (document.body.classList.contains("dark")) {
        mood_icon.classList.replace("fa-moon", "fa-sun")
        localStorage.setItem('theme', 'dark');
    } else {
        mood_icon.classList.replace("fa-sun", "fa-moon")
        localStorage.setItem('theme', 'light');
    }
}