document.addEventListener("DOMContentLoaded", function() {
    // // Show the first tab content and set the first tab button as active
    // var defaultTab = document.getElementById("tab1");
    // defaultTab.style.display = "block";
    var defaultButton = document.querySelector(".tab[data-target='tab1']");
    defaultButton.classList.add("active");
});

function changeTab(evt, tabId) {
    var i, tabcontent, tablinks;
  
    // Hide all tab content
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the "active" class from all tab buttons
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the selected tab content and set the button as active
    document.getElementById(tabId).style.display = "block";
    evt.currentTarget.className += " active";
}