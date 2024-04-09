
  document.addEventListener("DOMContentLoaded", function () {
    const feedbackForm = document.getElementById("feedbackForm");
  
    feedbackForm.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Thank you for your feedback!");
  
      feedbackForm.reset();
    });
  });