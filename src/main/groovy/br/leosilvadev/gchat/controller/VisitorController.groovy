package br.leosilvadev.gchat.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/")
class VisitorController {

	@RequestMapping(method=RequestMethod.GET)
	def index(){
		"index"
	}
	
}
