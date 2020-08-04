const timelineData = [
  {
    name: "NASA Proposal Writing and Evaluation Experience (NPWEE)",
    title: "Virtual Academy Student",
    fromDate: "March 2019",
    tillDate: "Present",
    description:
      "Work with a team of students to develop an official NASA proposal for a New Technology Report based on NASA Taxonomies. Gain experience in the process of writing, reviewing, and scoring proposals through mentoring sessions by NASA reviewers. Compose an NTR proposal to explore lunar surface and subsurface using an advanced robotic drill with environmental sensors.",
  },
  {
    name: "NASA L’SPACE Mission Concept Academy",
    title: "Project Controls Analyst",
    fromDate: "January 2020",
    tillDate: "May 2020",
    description:
      "Developed a lunar mission concept to investigate the resource potential of, and characterize polar water ice on the moon. Designed a form factor lunar lander payload to deploy and successfully land a payload on Shackleton Crater using a budget of $35M and a mass constraint of 10 kilograms. Redacted and performed a Preliminary Design Review.",
  },
  {
    name: "AT&T Summer Learning Academy Externship",
    title: "Extern",
    fromDate: "June 2020",
    tillDate: "July 2020",
    description:
      "Participant in an externship program focusing on topics such as Project Management, Design Thinking, Personal/Professional Development, and Leadership.",
  },
  {
    name: "Chick-fil-A Aspire Leadership Conference",
    title: "Participant",
    fromDate: "June 2019",
    tillDate: "(3 Day Event)",
    description: "",
  },
  {
    name: "Aramark Food Services",
    title: "Frontline Associate",
    fromDate: "September 2018",
    tillDate: "Present",
    description:
      "Improve guest satisfaction rates by identifying and anticipating the needs of 60+ guests daily through effective communication. Oversee the training of new student employees to increase workplace productivity and prevent accidents. Execute closing activities and maintain workplace cleanliness in a diligent and systematic manner.",
  },
  {
    name: "Cook Library, USM",
    title: "Student Library Assistant",
    fromDate: "June 2019",
    tillDate: "Present",
    description:
      "Solve system and database inquiries weekly from 80+ patrons needing front-desk aid and information efficiently. Manage monetary transactions at the register, ensuring 100% fiscal accuracy. Implemented strong analytical and conflict resolution skills to identify, track, resolve, and report any issues promptly",
  },
  {
    name: "Lantai Book Enterprise",
    title: "Sales Associate",
    fromDate: "July 2017",
    tillDate: "April 2018",
    description:
      "Maintained high quality of store image through diligent organization and execution of administrative tasks. Boosted profit generation up to 10% by spearheading group collaboration to improve efficiency procedures. Analyzed and quantified stock inventory and monetary procedures, ensuring 100% fiscal accuracy.",
  },
];

const timelineContainer = document.querySelector(".timeline");
const themeToggler = document.querySelector(".theme-toggler");

themeToggler.addEventListener("click", (ev) => {
  const body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark")
    body.classList.add("light")
    themeToggler.innerHTML = '<i class="far fa-moon"></i>';
  } else {
    body.classList.add("dark")
    body.classList.remove("light")
    themeToggler.innerHTML = '<i class="far fa-sun"></i>';
  }
})  // Event listener to toggle light/dark mode

timelineData.sort((a, b) => {
  return new Date(b.fromDate) - new Date(a.fromDate);
}); // sort the timeline data in descending order

// Appending html in the DOM
timelineData.forEach((data) => {
  const template = `
    <li class="timeline-item">
      <div class="timeline-info">
        ${data.fromDate} - ${data.tillDate}
      </div>
      <div class="timeline-marker"></div>
      <div class="timeline-content text-left">
        <div class="box">
          <h3 class="timeline-title">${data.name}</h3>
          <h5 class="timeline-subtitle">${data.title}</h5>
          <p>${data.description}</p>
        </div>
      </div>
    </li>`;

  timelineContainer.insertAdjacentHTML("beforeend", template);
});
