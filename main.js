$(document).on('ready', start);

function start(e) {

	var $inputBox = $('#todo-input');
	var $todoButton = $('#add-todo-button');
	var $todoForm = $('#todo-form');
	var $list = $('#list');
	var list = [];

	$todoForm.on('submit', addTodo);
	$list.on('click', strikeThru);

	function addTodo(e) {
		e.preventDefault();
		list.push($inputBox.val());
		$inputBox.val('');
		var listHtml = render(list);
		$list.html(listHtml);
	}

	function render(todoList) {
		return '<ol><li>'+todoList.join('</li><li>')+'</li></ol>';
	}

	function strikeThru() {
		$(event.target).css(
			'text-decoration', 'line-through');
	}

}