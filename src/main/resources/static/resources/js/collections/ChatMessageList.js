var ChatMessageList = Backbone.Collection.extend({

	model : ChatMessage,
	url : function(){
		return '/chat/' + this.get('roomCode') + '/messages';
	}

});