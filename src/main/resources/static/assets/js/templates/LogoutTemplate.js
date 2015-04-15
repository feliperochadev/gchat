define([], function(){
	
	var LogoutTemplate = 
		['<div class="modal-dialog">',
			 '<div class="modal-content">', 
			 	'<div class="modal-header">', 
			 		'<button type="button" class="close" data-dismiss="modal" arial-label="Close">', 
			 			'<span aria-label="true">&times;</span>', 
					 '</button>', 
					 '<h4>', 
					 	'<span>Logout - Are you sure?</span>', 
				 	'</h4>', 
				 '</div>', 
				 '<div class="modal-body">', 
				 	'<span>Are you sure you want to logout?<span>',
				 '</div>', 
				 '<div class="modal-footer">', 
					'<button type="button" class="btn btn-default" data-dismiss="modal">',
				 		'<span class="glyphicon glyphicon-remove"></span> No',
				 	'</button>', 
				 	'<a href="logout" class="btn btn-primary" external="true">',
				 		'<span class="glyphicon glyphicon-ok"></span> Yes',
				 	'</a>', 
				 '</div>', 
			 '</div>',
		 '</div>'].join("\n");

	return LogoutTemplate;
	
});