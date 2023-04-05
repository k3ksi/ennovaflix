package it.ennova.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.ennova.model.Attore;
import it.ennova.repository.IAttoreCrud;

@Service
public class AttoreService {
 @Autowired
 IAttoreCrud repository;
 
 public Attore getAttoreById(Integer id) {
	 return repository.findById(id).get();
 }
}
