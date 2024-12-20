$(document).ready(function () {
    // Load To-Do items when the page loads
    loadToDo();

    // Add a new To-Do item when the button is clicked
    $("#newBtn").click(function () {
        const todoText = prompt("Enter your TO DO:");
        if (todoText && todoText.trim() !== "") {
            // Sanitize the input before adding it to the To-Do list
            const sanitizedText = sanitizeInput(todoText);
            addToDo(sanitizedText);
            saveToDo();
        }
    });

    // Add a new To-Do item to the list
    function addToDo(text) {
        const $toDo = $("<div>").text(decodeHTML(text));  // Decode HTML entities
        $toDo.click(function () { // Add a delete button
            deleteToDo($(this));
        });
        $("#ft_list").prepend($toDo); // Add to the top of the list
    }

    // Delete a To-Do item
    function deleteToDo($element) {
        if (confirm("Do you really want to delete this TO DO?")) {
            $element.remove();
            saveToDo();
        }
    }

    // Save the To-Do list to cookies
    function saveToDo() {
        const toDoArray = [];
        $("#ft_list div").each(function () { // Loop through the list
            toDoArray.push($(this).text());
        });
        try {
            const jsonToDo = JSON.stringify(toDoArray);
            document.cookie = "todo=" + encodeURIComponent(jsonToDo) + ";path=/";
        } catch (e) {
            console.error("Error saving To-Do list to cookie", e);
        }
    }

    // Load To-Do items from cookies
    function loadToDo() {
        const cookie = document.cookie.split("; ").find(row => row.startsWith("todo="));
        if (cookie) {
            try {
                const jsonToDo = decodeURIComponent(cookie.split("=")[1]);
                const toDoArray = JSON.parse(jsonToDo);
                toDoArray.forEach(text => addToDo(text));  // Add each To-Do
            } catch (e) {
                console.error("Error loading To-Do list from cookie", e);
            }
        }
    }

    // Function to sanitize input to prevent XSS
    function sanitizeInput(input) {
        return input.replace(/[&<>"'`=/]/g, function (match) {
            switch (match) {
                case '&': return '&amp;';
                case '<': return '&lt;';
                case '>': return '&gt;';
                case '"': return '&quot;';
                case "'": return '&#39;';
                case '`': return '&#96;';
                case '=': return '&#61;';
                case '/': return '&#47;';
                default: return match;
            }
        });
    }

    // Function to decode HTML entities back to their original characters
    function decodeHTML(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }
});
