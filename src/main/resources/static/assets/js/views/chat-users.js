define(['backbone', 
        'views/chat-user',
        'models/chat-user',
        'collections/chat-users',
		'connectors/stomp-connector',], function(Backbone, ChatUserView, ChatUser, ChatUsers, StompConnector){
	
	var ChatUsersView = Backbone.View.extend({
		
		initialize: function(options){
			this.roomCode = options.roomCode;
			this.collection = new ChatUsers({room: this.roomCode});
			this.collection.on('reset', this.render, this);
			this.collection.on('add', this.renderOne, this);
			
			this.collection.fetch({reset: true});
			
			this.chatUserViews = [];
		},
		
		addUser: function(chatUser){
			this.collection.add(chatUser);
		},
		
		hide: function(){
			this.$el.hide();
		},
		
		show: function(){
			this.$el.show();
		},
		
		destroy: function(){
			this.chatUserViews.forEach(function(view){
				view.destroy();
			});
			this.remove();
		},
		
		renderOne: function(user){
			var chatUserView = new ChatUserView({model: user});
			this.chatUserViews.push( chatUserView );
			this.$el.append(chatUserView.render().el);
		},
		
		render: function(){
			this.$el.html('');
			this.collection.each(function(user){
				if(user.has('id')){
					this.renderOne(user);
				}
			}, this);
			return this;
		}
		
	});
	
	return ChatUsersView;
	
});