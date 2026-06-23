// ================= HAMBURGER MENU =================
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');

if (hamburger && mainNav) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mainNav.classList.toggle('open');
    });

    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mainNav.classList.remove('open');
        });
    });
}

// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ================= PROFILE HOVER =================
const profileImage = document.querySelector('.profile-image');
const profileContainer = document.querySelector('.profile-container');

if (profileContainer && profileImage) {
    profileContainer.addEventListener('mousemove', (e) => {
        const rect = profileContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = (y - rect.height / 2) / 10;
        const rotateY = (rect.width / 2 - x) / 10;
        profileImage.style.transform =
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    profileContainer.addEventListener('mouseleave', () => {
        profileImage.style.transform =
            'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
}

// ================= SERVICE CARD HOVER =================
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// ================= BRAND LOGO HOVER =================
document.querySelectorAll('.brand-logo').forEach(logo => {
    logo.addEventListener('mouseenter', () => {
        logo.style.transform = 'scale(1.2)';
    });
    logo.addEventListener('mouseleave', () => {
        logo.style.transform = 'scale(1)';
    });
});

// ================= VIEW PROJECT =================
function viewProject(url) {
    window.open(url, "_blank");
}

// ================= CONTACT FORM + EMAILJS =================
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('userEmail').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        emailjs.send("service_mymh6gd", "template_8ychpap", {
            from_name: name,
            from_email: email,
            user_message: message
        })
        .then(function () {
            form.reset();
            submitBtn.textContent = 'Send';
            submitBtn.disabled = false;

            const successBox = document.getElementById("successMessage");
            successBox.classList.add("show");
            setTimeout(() => successBox.classList.remove("show"), 3000);
        })
        .catch(function (error) {
            console.error(error);
            alert('Something went wrong. Please try again.');
            submitBtn.textContent = 'Send';
            submitBtn.disabled = false;
        });
    });
}

// ================= FOOTER EMAIL COPY =================
const footerEmail = document.getElementById('footerEmail');

if (footerEmail) {
    footerEmail.addEventListener('click', function () {
        navigator.clipboard.writeText('Pravesh252@gmail.com')
            .then(() => {
                footerEmail.textContent = '✅ Email Copied!';
                setTimeout(() => {
                    footerEmail.textContent = 'Pravesh252@gmail.com';
                }, 2000);
            })
            .catch(() => alert('Email: Pravesh252@gmail.com'));
    });
}