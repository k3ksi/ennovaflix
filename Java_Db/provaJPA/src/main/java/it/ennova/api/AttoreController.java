package it.ennova.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import it.ennova.model.Attore;
import it.ennova.service.AttoreService;
@RestController
@RequestMapping(path = "/attore")
public class AttoreController {
	@Autowired
	AttoreService attoreservice;
	@GetMapping("/getattore/{id}")
	public Attore getAttoreById(@PathVariable("id") int id) {
		return attoreservice.getAttoreById(id);
	}
}
