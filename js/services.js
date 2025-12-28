
//---------------- navbar ----------------
let header = document.querySelector('header');
let logo = document.querySelector('.logo');
let dark_btn = document.querySelector('.dark-btn');
let nav_link = document.querySelectorAll('.nav-item .link');
let active_nav_link = document.querySelector('.nav-item .active');
let to_up_btn = document.querySelector(".to-up-btn");

window.onscroll = () => {
    if (scrollY > 100) {
        if (document.body.classList.contains("dark")) {
            header.style.backgroundColor = "#000";
            logo.style.color = "#FFF"
            dark_btn.style.color = "#FFF"
            header.style.boxShadow = "0 25px 90px 0 rgb(4 2 0 / 3%)";
            nav_link.forEach(link => {
                link.style.setProperty("color", "#eee");
            });
            to_up_btn.style.marginBottom = "0";
        } else {
            header.style.backgroundColor = '#FFF'
            logo.style.color = "#000"
            dark_btn.style.color = "#000"
            header.style.boxShadow = "0 25px 90px 0 rgb(4 2 0 / 3%)";
            nav_link.forEach(link => {
                link.style.setProperty("color", "#060500");
                link.style.opacity = "0.8";
            });
            to_up_btn.style.marginBottom = "0";
        }
        header.style.minHeight = '90px';
    } else {
        header.style.backgroundColor = "transparent";
        logo.style.color = "#FFF"
        header.style.minHeight = '100px';
        dark_btn.style.color = "#FFF"
        nav_link.forEach(link => {
            link.style.setProperty("color", "#eee");
            link.style.opacity = "1";
        });
        to_up_btn.style.marginBottom = "-100px";
        if (window.innerWidth < 992) {
            nav_link.forEach(link => {
                link.style.setProperty("color", "#000");
                link.style.opacity = "1";
            });
        }
    }
    active_nav_link.style.color = "#ff9e00"
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