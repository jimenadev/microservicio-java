package com.example.testingweb;

import org.springframework.stereotype.Service;

@Service
public class GreetingService {
	public String greet() {
		String pass ="1234";
		return "Hola, soy Jimena Silva";
	}
}
