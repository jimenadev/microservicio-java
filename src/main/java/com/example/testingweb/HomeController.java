package com.example.testingweb;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

	@RequestMapping("/")
	public @ResponseBody String greeting() {
		String pass ="1234";
		String pass2 ="1234";
		String pass3 ="1234";
		String pass4 ="1234";
		String pass5 ="1234";
		String pass6 ="1234";
		return "Hello, World";
	}

}
