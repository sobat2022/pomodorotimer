<script>
$(document).ready(function () {

  var shortsound = $('#shortsound')[0];
  var longsound = $('#longsound')[0];
  var img =1;
  
  $('form').submit(function() {
    return false;
  });

  function addTodoItem() {
    var todoItem = $("#new-todo-item").val();

    $("#list").append("<div class=" + "'list-group-item w-clearfix'" + "><div class=" + "'list-txt'" + "value='" + todoItem + "'>" + todoItem + "</div><div class=" + "'buttons-wrap'" + " > <img src="+ "'https://uploads-ssl.webflow.com/639a85a91680c4da0ff7a63e/64c1df3bd98897490efbbd73_iconcentanabu.png'" + " loading="+ "'lazy'" +" id="+"'image'"+" class=" + "'todo-item-done'" + "'grey'" + " alt="+"'done'"+"></div>");

$("#new-todo-item").val("");
  }

function deleteTodoItem(e, item) {
  e.preventDefault();
  $(item).parent().parent().fadeOut('slow', function () {
    $(item).parent().parent().remove();
  });
}

function completeTodoItem() {
if(this.img===1){
$(this).attr("src","https://uploads-ssl.webflow.com/639a85a91680c4da0ff7a63e/64c1df3bd98897490efbbd73_iconcentanabu.png");
//document.getElementById("image").src="https://uploads-ssl.webflow.com/639a85a91680c4da0ff7a63e/64c1df3b257a06c3e21b7ba2_iconcentangorange.png";
  this.img=2;
}
else{
$(this).attr("src","https://uploads-ssl.webflow.com/639a85a91680c4da0ff7a63e/64c1df3b257a06c3e21b7ba2_iconcentangorange.png");
this.img=1;
}
	$(this).toggleClass("grey");
  $(this).parent().parent().toggleClass("done");
}

$(function () {
  $("#add-todo-item").on('click', function (e) {
    e.preventDefault();
    addTodoItem()
  });

  var input = document.getElementById("new-todo-item");

  input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("add-todo-item").click();
    }
  });

	$("#list").on('click', '.remove', function (e) {
    var item = this;
    deleteTodoItem(e, item)
  })

  $(document).on('click', ".todo-item-done", completeTodoItem)
});
});
</script>
