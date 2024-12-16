document.addEventListener("DOMContentLoaded", function() {
    const times = document.querySelectorAll("li");
    const observer = new IntersectionObserver((sections) => {
        sections.forEach(section => {
            if (section.isIntersecting) {
                section.target.classList.add("show");
            }
            else {
                section.target.classList.remove("show");
            }
        });
    }, {
        threshold: 0.1    });

    times.forEach(time => {
        observer.observe(time);
    });
});

const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute('data-section');
        scrollToPosition(sectionId);
    });
});

function scrollToPosition(sectionId) {
    let targetElement;

    switch (sectionId) {
        case 'top':
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        case 'intro':
            targetElement = document.querySelector('.intro');
            break;
        case 'project':
            targetElement = document.querySelector('.project');
            break;
        case 'connect':
            targetElement = document.querySelector('footer');
            break;
        default:
            return;
    }

    if (targetElement) {
        const position = targetElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: position, behavior: 'smooth' });
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const modals = {
        project1: document.getElementById('modal1'),
        project2: document.getElementById('modal2'),
        project3: document.getElementById('modal3'),
        project4: document.getElementById('modal4'),
        project5: document.getElementById('modal5'),
        project6: document.getElementById('modal6'),
    };

    const modalTriggers = document.querySelectorAll('.project-container a');
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(event) {
            event.preventDefault();
            const modalId = this.id;
            modals[modalId].style.display = "block";
        });
    });

    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = "none";
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = "none";
        }
    });
});