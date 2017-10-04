// Initial array of makeup
      var makeup = ["NARS", "MAC", "Yves Saint Laurent", "Dior", "Fenty", "Chanel", "Tom Ford"];



           function renderButtons() {
        $("#makeupButtons").empty();

        for (var i = 0; i < makeup.length; i++) {
          var a = $("<button>");
          a.addClass("makeup");
          a.text(makeup[i]);
          a.attr("data-name", makeup[i]);
          // Adding the button to the HTML
          $("#makeupButtons").append(a);
        }
      }

         $("#add-makeup").on("click", function(event) {
        // Preventing the buttons default behavior when clicked (which is submitting a form)
        event.preventDefault();
        // This line grabs the input from the textbox
        var makeup = $("#makeup-input").val().trim();
        makeup.push(makeup);
        // Calling renderButtons which handles the processing of our movie array
        renderButtons();

      });