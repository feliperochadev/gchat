package br.leosilvadev.gchat.listener

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.ApplicationListener
import org.springframework.stereotype.Component
import org.springframework.web.socket.messaging.SessionSubscribeEvent

import br.leosilvadev.gchat.manager.RoomsManager
import br.leosilvadev.gchat.wrapper.EventWrapper

@Component
class RoomLoginListener implements ApplicationListener<SessionSubscribeEvent> {

	@Autowired RoomsManager roomsManager
	
	def notifiers
	
	@Override
	void onApplicationEvent(SessionSubscribeEvent event) {
		def wrapper = new EventWrapper(event)
		def user = wrapper.sender()
		def destination = wrapper.destination()
		
		def roomCode = wrapper.loggedRoom(destination)
		if ( roomCode ) {
			roomsManager.login(user).to(roomCode)
			
		}
		
		
	}

}