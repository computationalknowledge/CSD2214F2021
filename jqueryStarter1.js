<html>
   <head>
      <title>The jQuery Example</title>
      <script type = "text/javascript" 
         src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">
      </script>

      <script type = "text/javascript" language = "javascript">
         $(document).ready(function() {
            $("div").click(function() {alert("Hello, world!");});
         });
      </script>
   </head>
	
   <body>
      <div id = "mydiv">
         Click on this to see a dialogue box.
      </div>
   </body>
</html>

/////////////////////////////////////////////////////////////////////////////////////

<html>
   <head>
      <title>The jQuery Example</title>
      <script type = "text/javascript" 
         src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">
      </script>

      <script type = "text/javascript" language = "javascript">
         $(document).ready(function() {
            $("p").css("background-color", "yellow");
         });
      </script>
   </head>
	
   <body>
      <div>
         <p class = "myclass">This is a paragraph.</p>
         <p id = "myid">This is second paragraph.</p>
         <p>This is third paragraph.</p>
      </div>
   </body>
</html>



