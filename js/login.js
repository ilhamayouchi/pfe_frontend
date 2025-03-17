
    // Function to open the overlay
    function openOverlay() {
        document.getElementById("overlay").classList.add("active");
    }

    // Function to close the overlay (optional)
    function closeOverlay() {
        document.getElementById("overlay").classList.remove("active");
    }

    // Function to switch between tabs
    function openTab(tabName) {
        // Hide all tab contents
        var tabContents = document.getElementsByClassName("tab-content");
        for (var i = 0; i < tabContents.length; i++) {
            tabContents[i].classList.remove("active");
        }
        
        // Remove active class from all tab buttons
        var tabButtons = document.getElementsByClassName("tab-btn");
        for (var i = 0; i < tabButtons.length; i++) {
            tabButtons[i].classList.remove("active");
        }
        
        // Show the selected tab content and mark the button as active
        document.getElementById(tabName).classList.add("active");
        
        // Find and activate the corresponding button
        var buttons = document.getElementsByClassName("tab-btn");
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].textContent.toLowerCase().includes(tabName.toLowerCase())) {
                buttons[i].classList.add("active");
            }
        }
    }

    // Close overlay when clicking outside the auth container
    document.getElementById("overlay").addEventListener("click", function(event) {
        if (event.target === this) {
            closeOverlay();
        }
    });


