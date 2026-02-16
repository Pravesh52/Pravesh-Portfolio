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

// ================= EMAILJS CONTACT =================
function sendMail() {
    let parms = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        user_message: document.getElementById("message").value
    };

    

    emailjs.send("service_mymh6gd", "template_8ychpap", parms)
    .then(function () {

        const successBox = document.getElementById("successMessage");
        successBox.classList.add("show");

        // Auto hide after 3 seconds
        setTimeout(() => {
            successBox.classList.remove("show");
        }, 3000);

    })
    .catch(function (error) {
        console.log(error);
    });

}

// ================= FORM HANDLING =================
const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        submitBtn.disabled = true;
        sendMail();
        form.reset();
        submitBtn.disabled = false;
    });
}

// ================= FOOTER EMAIL COPY =================
const footerEmail = document.getElementById('email');

if (footerEmail) {
    footerEmail.addEventListener('click', function () {
        navigator.clipboard.writeText('Pravesh252@gmail.com')
            .then(() => alert("Email Copied!"))
            .catch(() => alert("Pravesh252@gmail.com"));
    });
}
