//your code here
var todoValue = document.getElemnetById("newTodoInput");
var btn =document.getElementById("addTodoBtn");
var ol = document.getElementById("todoList");

function addTodo(){
	if(todoValue.value){
		var li =document.createElement('li');
		li.textContent = todoValue.value;
		ol.appendChild(li);
		todoValue.value="";
	}
}
