"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jspdf_1 = require("jspdf");
function generateResume() {
    // Get values from the form fields
    var name = document.getElementById("name").value || "Your Name";
    var email = document.getElementById("email").value || "Email";
    var phone = document.getElementById("phone").value || "Phone";
    var linkedin = document.getElementById("linkedin").value || "LinkedIn";
    var summary = document.getElementById("summary").value || "Summary goes here...";
    var experience = document.getElementById("experience").value || "Experience goes here...";
    var education = document.getElementById("education").value || "Education details go here...";
    var skills = document.getElementById("skills").value || "Skills go here...";
    // Update the preview section with the captured data
    document.getElementById("display-name").textContent = name;
    document.getElementById("display-email").textContent = email;
    document.getElementById("display-phone").textContent = phone;
    document.getElementById("display-linkedin").textContent = linkedin;
    document.getElementById("display-summary").textContent = summary;
    document.getElementById("display-experience").textContent = experience;
    document.getElementById("display-education").textContent = education;
    document.getElementById("display-skills").textContent = skills;
    // Create a PDF using jsPDF
    var pdf = new jspdf_1.default();
    pdf.setFontSize(16);
    pdf.text("Resume", 20, 20);
    pdf.setFontSize(12);
    pdf.text("Name: ".concat(name), 20, 40);
    pdf.text("Email: ".concat(email), 20, 50);
    pdf.text("Phone: ".concat(phone), 20, 60);
    pdf.text("LinkedIn: ".concat(linkedin), 20, 70);
    pdf.text("Professional Summary:", 20, 90);
    pdf.text(summary, 20, 100, { maxWidth: 170 });
    pdf.text("Experience:", 20, 130);
    pdf.text(experience, 20, 140, { maxWidth: 170 });
    pdf.text("Education:", 20, 170);
    pdf.text(education, 20, 180, { maxWidth: 170 });
    pdf.text("Skills:", 20, 210);
    pdf.text(skills, 20, 220, { maxWidth: 170 });
    pdf.save("resume.pdf");
}
// Select elements
var generatePdfButton = document.getElementById("generate-pdf");
var toggleSkillsButton = document.getElementById("toggle-skills");
var skillsSection = document.getElementById("skills");
// Toggle skills section visibility
toggleSkillsButton.addEventListener("click", function () {
    skillsSection.style.display = skillsSection.style.display === "none" ? "block" : "none";
});
// PDF generation
generatePdfButton.addEventListener("click", function () {
    var resumeElement = document.querySelector(".resume-container");
    if (resumeElement) {
        // @ts-ignore: HTML2PDF is dynamically loaded
        html2pdf(resumeElement, {
            margin: 1,
            filename: "resume.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
        });
    }
});
// Get important parts of the page so we can work with them
var generateResumeButton = document.getElementById('generateResumeBtn');
var downloadPdfButton = document.getElementById('downloadPdfBtn');
var previewContent = document.getElementById('previewContent');
if (generateResumeButton) {
    generateResumeButton.addEventListener('click', function () {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var skills = document.getElementById('skills').value;
        var experience = document.getElementById('experience').value;
        var previewContent = document.getElementById('previewContent');
        if (previewContent) {
            previewContent.innerHTML = "\n                <h3>".concat(name, "</h3>\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Phone:</strong> ").concat(phone, "</p>\n                <hr>\n                <h4>Education</h4>\n                <p>").concat(education, "</p>\n                <h4>Skills</h4>\n                <p>").concat(skills, "</p>\n                <h4>Experience</h4>\n                <p>").concat(experience, "</p>\n            ");
        }
        var resumePreview = document.getElementById('resumePreview');
        if (resumePreview) {
            resumePreview.classList.remove('hidden');
        }
    });
}
if (downloadPdfButton) {
    downloadPdfButton.addEventListener('click', function () {
        var previewContent = document.getElementById('previewContent');
        if (previewContent) {
            html2pdf(previewContent);
        }
    });
}
;
var downloadButton = document.getElementById('downloadPdfBtn');
// When the "Download as PDF" button is clicked, generate the PDF
downloadButton.addEventListener('click', function () {
    // Use html2pdf to generate the PDF from the previewContent section
    html2pdf(previewContent);
});
