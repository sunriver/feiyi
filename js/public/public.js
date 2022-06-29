function save(telephone, username){
	$.ajax({
		type: "POST",
		url: "php/public/saveSession.php",
		async: false,
		// dataType: "json",
		data: {
			id: 'telephone',
			telephone: telephone
		},
		success: function(data) {
			if(data != "Success") alert(data);
		},
		error: function() {
			alert("postError：保存会话'telephone'错误");
		}
	});
	$.ajax({
		type: "POST",
		url: "php/public/saveSession.php",
		async: false,
		// dataType: "json",
		data: {
			id: 'username',
			username: username
		},
		success: function(data) {
			if(data != "Success") alert(data);
		},
		error: function() {
			alert("postError：保存会话'username'错误");
		}
	});
};
function read(id){
	var result;
	$.ajax({
		type: "POST",
		url: "php/public/readSession.php",
		async: false,
		dataType: "json",
		data: {
			id: id
		}, 
		success: function(data) {
			if(data != '') result = data;
			else alert("sessionError：会话'" + id + "'为空");
		},
		error: function() {
			alert("postError：读取会话'" + id + "'错误");
		}
	});
	return result;
}
function connectDatabase(query){
	var result;
	$.ajax({
		type: "POST",
		url: "php/public/connectDatabase.php",
		async: false,
		dataType: "json",
		data: {
			query: query
		},
		success: function(data) {
			result = data[0];
		},
		error: function() {
			alert("postError：连接MySQL数据库错误");
		}
	});
	return result;
}
function selectDatabase(table, id, telephone = 0){
	var result, query;
	if(telephone == 0) telephone = read("telephone");
	query = "select " + id + " from " + table + " where telephone = " + telephone + ";";
	result = connectDatabase(query);
	if(result == '') alert("databaseError：找不到数据'" + id + "'");
	return result;
}
function updateDatabase(table, id, data, telephone = 0, type = 0){
	var result, query;
	if(telephone == 0) telephone = read("telephone");
	if(type == 0) query = "update " + table + " set " + id + " = " + data + " where telephone = " + telephone + ";";
	else query = "update " + table + " set " + id + " = '" + data + "' where telephone = " + telephone + ";";
	result = connectDatabase(query);
	return result;
}