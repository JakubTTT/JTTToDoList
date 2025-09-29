$(document).ready(function(){
    $(".btn").click(function(){
       var text = $("#textcontent").val();
       var paragraph = $("<p></p>").text("- "+text)
       var todolist = $("<div></div>").html(paragraph);
       todolist.addClass("product");
       $(".list").append(todolist);
    });
  
    $(".list").on("click", ".product", function() {
        $(this).remove();
    });
});