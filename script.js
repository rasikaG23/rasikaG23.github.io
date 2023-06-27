function sendMail(params) {
  var tempParams = {
    from_name: document.getElementById("fromName").value,
    email_sender: document.getElementById("emailSender").value,
    subject_sender: document.getElementById("subjectSender").value,
    message_sender: document.getElementById("message").value,
  };
  emailjs
    .send("{{SERVICE ID}}", "{{TEMPLATE ID}}", tempParams)
    .then(function (res) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Mail Sent Successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    });
}

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing animation script
  var typed = new Typed(".typing", {
    strings: ["Aspiring Full Stack Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
    fadeOut: true,
  });
  var typed = new Typed(".typing-2", {
    strings: ["Full Stack Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});

// Scroll to top button script
const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

GitHubCalendar(".calendar", "rasikaG23", { responsive: true });

// Resume
var resumeLink = document.querySelector("#resume-button-1");
resumeLink.addEventListener("click", function (event) {
  event.preventDefault();
  window.open(
    "https://www.canva.com/design/DAFf0RPJjZo/btL-6MsEN--Di5AF0pSp9w/view?utm_content=DAFf0RPJjZo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    "_blank"
  );
  let link = document.createElement("a");
  link.href =
    "https://drive.google.com/file/d/1CxtYsBWzqSZWTSklz-ezYLX6hheYPAQo/view?usp=sharing";
  link.download = "https://drive.google.com/file/d/1CxtYsBWzqSZWTSklz-ezYLX6hheYPAQo/view?usp=sharing";
  link.click();
});

var resumeLink = document.querySelector("#resume-button-2");
resumeLink.addEventListener("click", function (event) {
  event.preventDefault();
  window.open(
    "https://drive.google.com/file/d/1CxtYsBWzqSZWTSklz-ezYLX6hheYPAQo/view?usp=sharing",
    "_blank"
  );
  let link = document.createElement("a");
  link.href =
    "https://drive.google.com/file/d/1CxtYsBWzqSZWTSklz-ezYLX6hheYPAQo/view?usp=sharing";
  link.download = "rasika_gujar_resume";
  link.click();
});
