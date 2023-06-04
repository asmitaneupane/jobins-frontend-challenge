document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("dateRangeFilter").addEventListener("change", function () {
        var selectedValue = this.value;
        var rows = document.getElementById("tableBody").getElementsByTagName("tr");

        var visibleRowCount = 0; // Track the number of visible rows

        for (var i = 0; i < rows.length; i++) {
            var dateCell = rows[i].getElementsByTagName("td")[2]; // Assuming date cell is at index 2

            if (dateCell) {
                var dateString = dateCell.textContent.trim();
                var date = new Date(dateString);

                var isVisible = false;

                switch (selectedValue) {
                    case "today":
                        isVisible = isToday(date);
                        break;
                    case "this week":
                        isVisible = isThisWeek(date);
                        break;
                    case "last week":
                        isVisible = isLastWeek(date);
                        break;
                    case "this month":
                        isVisible = isThisMonth(date);
                        break;
                    default:
                        isVisible = true;
                        break;
                }

                if (isVisible) {
                    rows[i].style.display = "";
                    visibleRowCount++;
                } else {
                    rows[i].style.display = "none";
                }

                console.log("Row", i + 1, "- Date:", dateString, "Visible:", isVisible);
            }
        }

        console.log("Visible row count:", visibleRowCount);
        if (visibleRowCount === 0) {
            console.log("No rows match the selected date range.");
        }
    });

    // Helper function to check if a date is today
    function isToday(date) {
        var today = new Date();
        return date.toLocaleDateString() === today.toLocaleDateString();
    }

    // Helper function to check if a date is within the current week
    function isThisWeek(date) {
        var today = new Date();
        var firstDayOfWeek = today.getDate() - today.getDay();
        var lastDayOfWeek = firstDayOfWeek + 6;

        var dateDay = date.getDate();
        return (
            dateDay >= firstDayOfWeek &&
            dateDay <= lastDayOfWeek &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        );
    }

    // Helper function to check if a date is within the previous week
    function isLastWeek(date) {
        var today = new Date();
        var firstDayOfPrevWeek = today.getDate() - today.getDay() - 7;
        var lastDayOfPrevWeek = firstDayOfPrevWeek + 6;

        var dateDay = date.getDate();
        return (
            dateDay >= firstDayOfPrevWeek &&
            dateDay <= lastDayOfPrevWeek &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        );
    }

    // Helper function to check if a date is within the current month
    function isThisMonth(date) {
        var today = new Date();
        return (
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        );
    }
});
