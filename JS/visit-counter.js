document.addEventListener("DOMContentLoaded", function () {
    let visitCount = localStorage.getItem("page_visits");
  
    if (visitCount === null) {
      visitCount = 1;
    } else {
      visitCount = parseInt(visitCount) + 1;
    }
  
    localStorage.setItem("page_visits", visitCount);
    document.getElementById("visit-count").textContent = visitCount;
  });
  