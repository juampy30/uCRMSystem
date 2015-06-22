var name = 'Java';
var number = 3;
var name1 = 'JavaScript';
var number1 = 5;
var name2 = 'CSS';
var number2 = 6;
var name3 = 'HTML5';
var number3 = 1;
var name4 = 'PHP';
var number4 = 7;
var name5 = '.NET';
var number5 = 2;

document.getElementById("technical").innerHTML +=
	' \
	\
	<div class="form-group">\
	<div class="btn-group btn-group">\
	<button  type="button" class="btn"  data-toggle="modal" data-target="#myModal" style="border-style:none; border-radius: 5pt; padding-left: 5pt; padding-right: 5pt; padding-top:5px; padding-bottom:5px; background-color:#646464; color: white; font-size:13pt;">'+name+'&nbsp;&nbsp;<span class="badge" style="background-color: white; color: #646464; font-size:11pt;">'+number+'</span></button> \
	</div> \
	<div class="btn-group btn-group">\
	<button type="button" class="btn"  data-toggle="modal" data-target="#myModal" style="border-style:none; border-radius: 5pt; padding-left: 5pt; padding-right: 5pt; padding-top:5px; padding-bottom:5px;  background-color:#646464; color: white; font-size:13pt;">'+name1+'&nbsp;&nbsp;<span class="badge" style="background-color: white; color: #646464; font-size:11pt;">'+number1+'</span></button> \
	</div> \
	<div class="btn-group btn-group">\
	<button type="button" class="btn"  data-toggle="modal" data-target="#myModal" style="border-style:none; border-radius: 5pt; padding-left: 5pt; padding-right: 5pt; padding-top:5px; padding-bottom:5px; background-color:#646464; color: white; font-size:13pt;">'+name2+'&nbsp;&nbsp;<span class="badge" style="background-color: white; color: #646464; font-size:11pt;">'+number2+'</span></button> \
	</div> \
	<div class="btn-group btn-group">\
	<button type="button" class="btn"  data-toggle="modal" data-target="#myModal" style="border-style:none; border-radius: 5pt; padding-left: 5pt; padding-right: 5pt; padding-top:5px; padding-bottom:5px;  background-color:#646464; color: white; font-size:13pt;">'+name3+'&nbsp;&nbsp;<span class="badge" style="background-color: white; color: #646464; font-size:11pt;">'+number3+'</span></button> \
	</div> \
	<div class="btn-group btn-group">\
	<button type="button" class="btn"  data-toggle="modal" data-target="#myModal" style="border-style:none; border-radius: 5pt; padding-left: 5pt; padding-right: 5pt; padding-top:5px; padding-bottom:5px;  background-color:#646464; color: white; font-size:13pt;">'+name4+'&nbsp;&nbsp;<span class="badge" style="background-color: white; color: #646464; font-size:11pt;">'+number4+'</span></button> \
	</div> \
	<br/>\<br>\
	<div class="input-group col-lg-4 col-md-8 col-sm-8 col-xs-8">\
	<input class="form-control" name="fields[]" type="text"\
	placeholder="Add Skill" /> <span class="input-group-btn">\
	<button class="btn btn-primary btn-add" type="button">\
	<span class="glyphicon glyphicon-plus"></span>\
	</button>\
	</span>\
	</div>\
	</div> \
	</div> \
	';

name = 'Scrum';
number = 10;
name1 = 'Public Speaking';
number1 = 3;
name2 = 'Project Management';
number2 = 5;

document.getElementById("business").innerHTML +=
	' \
	<div class="btn-group btn-group">\
	<button type="button" class="btn"  data-toggle="modal" data-target="#myModal" style="border-style:none; border-radius: 5pt; padding-left: 5pt; padding-right: 5pt; padding-top:5px; padding-bottom:5px; background-color:#646464; color: white; font-size:13pt;">'+name+'&nbsp;&nbsp;<span class="badge" style="background-color: white; color: #646464; font-size:11pt;">'+number+'</span></button> \
	</div> \
	<div class="btn-group btn-group">\
	<button type="button" class="btn"  data-toggle="modal" data-target="#myModal" style="border-style:none; border-radius: 5pt; padding-left: 5pt; padding-right: 5pt; padding-top:5px; padding-bottom:5px; background-color:#646464; color: white; font-size:13pt;">'+name1+'&nbsp;&nbsp;<span class="badge" style="background-color: white; color: #646464; font-size:11pt;">'+number1+'</span></button> \
	</div> \
	<div class="btn-group btn-group">\
	<button type="button" class="btn"  data-toggle="modal" data-target="#myModal" style="border-style:none; border-radius: 5pt; padding-left: 5pt; padding-right: 5pt; padding-top:5px; padding-bottom:5px; background-color:#646464; color: white; font-size:13pt;">'+name2+'&nbsp;&nbsp;<span class="badge" style="background-color: white; color: #646464; font-size:11pt;">'+number2+'</span></button> \
	</div> \
	<br/><br>\
	<div class="input-group col-lg-4 col-md-8 col-sm-8 col-xs-8">\
	<input class="form-control" name="fields[]" type="text"\
	placeholder="Add Skill" /> <span class="input-group-btn">\
	<button class="btn btn-primary btn-add" type="button">\
	<span class="glyphicon glyphicon-plus"></span>\
	</button>\
	</span>\
	</div>\
	</div> \
	</div> \
	';

name = 'openCL';
number = 0;

document.getElementById("aspiring").innerHTML +=
	' \
	<button type="button" class="btn" style="border-style:none; border-radius: 5pt; padding-left: 5pt; padding-right: 5pt; padding-top:5px; padding-bottom:5px;  background-color:#646464; color: white; font-size:13pt;">'+name+'&nbsp;&nbsp;<span class="badge" style="background-color: white; color: #646464; font-size:11pt;">'+number+'</span></button> \
	<br/>\
	<br/>\
	<div class="input-group col-lg-4 col-md-8 col-sm-8 col-xs-8">\
	<input class="form-control" name="fields[]" type="text"\
	placeholder="Add Skill" /> <span class="input-group-btn">\
	<button class="btn btn-primary btn-add" type="button">\
	<span class="glyphicon glyphicon-plus"></span>\
	</button>\
	</span>\
	</div>\
	</div> \
	';


$(document).ready(function() {
	var text_max = 99;
	$('#textarea_feedback').html(text_max + ' characters remaining');

	$('#textarea').keyup(function() {
		var text_length = $('#textarea').val().length;
		var text_remaining = text_max - text_length;

		$('#textarea_feedback').html(text_remaining + ' characters remaining');
	});
});