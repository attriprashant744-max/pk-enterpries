// APNA WHATSAPP NUMBER YAHAN DAALEIN (91 ke saath, bina + ya space ke)
const PK_WHATSAPP = "919876543210";

document.addEventListener("DOMContentLoaded", () => {

    // 1. Mobile Menu Toggle
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
        });
    });

    // 2. FAQ Accordion Open/Close
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        question.addEventListener("click", () => {
            item.classList.toggle("open");
            const symbol = question.querySelector("span");
            symbol.textContent = item.classList.contains("open") ? "−" : "+";
        });
    });

    // 3. Direct WhatsApp Inquiry Form
    const staffForm = document.getElementById("staffForm");
    staffForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("compName").value.trim();
        const phone = document.getElementById("compPhone").value.trim();
        const role = document.getElementById("staffRole").value;
        const qty = document.getElementById("staffQty").value;
        const details = document.getElementById("siteDetails").value.trim();

        if (phone.length < 10 || isNaN(phone)) {
            alert("Kripya sahi 10-digit mobile number daalein.");
            return;
        }

        const msg = `*New Staff Inquiry - PK Enterprises*%0A%0A` +
                    `*Client/Company:* ${encodeURIComponent(name)}%0A` +
                    `*Phone:* ${encodeURIComponent(phone)}%0A` +
                    `*Staff Category:* ${encodeURIComponent(role)}%0A` +
                    `*Quantity:* ${encodeURIComponent(qty)}%0A` +
                    `*Site & Shift:* ${encodeURIComponent(details || "Not specified")}`;

        window.open(`https://wa.me/${PK_WHATSAPP}?text=${msg}`, "_blank");
        staffForm.reset();
    });

    // 4. Floating WhatsApp Chat Button
    const waBtn = document.createElement("a");
    waBtn.href = `https://wa.me/${PK_WHATSAPP}?text=${encodeURIComponent("Hello PK Enterprises, mujhe staff requirement ke baare mein baat karni hai.")}`;
    waBtn.target = "_blank";
    waBtn.innerText = "💬 WhatsApp Us";
    Object.assign(waBtn.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#25D366",
        color: "#ffffff",
        padding: "12px 18px",
        borderRadius: "50px",
        fontWeight: "bold",
        fontSize: "14px",
        textDecoration: "none",
        boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        zIndex: "9999"
    });
    document.body.appendChild(waBtn);
});