import jsPDF from "jspdf";

function generateResume() {
    // Get values from the form fields
    const name = (document.getElementById("name") as HTMLInputElement).value || "Your Name";
    const email = (document.getElementById("email") as HTMLInputElement).value || "Email";
    const phone = (document.getElementById("phone") as HTMLInputElement).value || "Phone";
    const linkedin = (document.getElementById("linkedin") as HTMLInputElement).value || "LinkedIn";
    const summary = (document.getElementById("summary") as HTMLTextAreaElement).value || "Summary goes here...";
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value || "Experience goes here...";
    const education = (document.getElementById("education") as HTMLTextAreaElement).value || "Education details go here...";
    const skills = (document.getElementById("skills") as HTMLInputElement).value || "Skills go here...";
  
    // Update the preview section with the captured data
    (document.getElementById("display-name") as HTMLElement).textContent = name;
    (document.getElementById("display-email") as HTMLElement).textContent = email;
    (document.getElementById("display-phone") as HTMLElement).textContent = phone;
    (document.getElementById("display-linkedin") as HTMLElement).textContent = linkedin;
    (document.getElementById("display-summary") as HTMLElement).textContent = summary;
    (document.getElementById("display-experience") as HTMLElement).textContent = experience;
    (document.getElementById("display-education") as HTMLElement).textContent = education;
    (document.getElementById("display-skills") as HTMLElement).textContent = skills;
  
    // Create a PDF using jsPDF
    const pdf = new jsPDF();
    pdf.setFontSize(16);
    pdf.text("Resume", 20, 20);
    pdf.setFontSize(12);
    pdf.text(`Name: ${name}`, 20, 40);
    pdf.text(`Email: ${email}`, 20, 50);
    pdf.text(`Phone: ${phone}`, 20, 60);
    pdf.text(`LinkedIn: ${linkedin}`, 20, 70);
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
const generatePdfButton = document.getElementById("generate-pdf") as HTMLButtonElement;
const toggleSkillsButton = document.getElementById("toggle-skills") as HTMLButtonElement;
const skillsSection = document.getElementById("skills") as HTMLElement;

// Toggle skills section visibility
toggleSkillsButton.addEventListener("click", () => {
  skillsSection.style.display = skillsSection.style.display === "none" ? "block" : "none";
});

// PDF generation
  const resumeElement = document.querySelector(".resume-container") as HTMLElement;

  if (resumeElement) {
    // @ts-ignore: HTML2PDF is dynamically loaded
    html2pdf(resumeElement, {
      margin: 1,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
    });
};

