
//---------------- owl-carousel ----------------
$(document).ready(function () {
    $('#first-carousel').owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        nav: true,
        responsive: {
            0: { items: 1 },
            767: { items: 2 }
        }
    });

    //---------------- owl-carousel2 ----------------

    $('#secound-carousel').owlCarousel({
        margin: 30,
        responsive: {
            0: { items: 1 },
            776: { items: 2 },
            992: { items: 3 }
        }
    })
});

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

//---------------- counters ----------------

const counters = document.querySelectorAll('.counter');
const speed = 145; // سرعة العد

const startCounting = (counter) => {
    let count = 0;
    const target = +counter.getAttribute('data-target');

    const updateCount = () => {
        const increment = target / speed;
        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            counter._counting = true; // نحفظ حالة إنه شغال
            requestAnimationFrame(updateCount);
        } else {
            counter.innerText = target;
            counter._counting = false;
        }
    };

    updateCount();
};

const resetCounter = (counter) => {
    counter.innerText = '0';
    counter._counting = false;
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const counter = entry.target;

        if (entry.isIntersecting) {
            // كل مرة يدخل العنصر على الشاشة، نعيد العد من جديد
            resetCounter(counter);
            startCounting(counter);
        } else {
            // لما يخرج من الشاشة، نوقفه ونرجعه صفر
            resetCounter(counter);
        }
    });
}, { threshold: 0.6 });

counters.forEach(counter => {
    observer.observe(counter);
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