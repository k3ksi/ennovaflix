package it.ennova.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Attore {
	@Id
	private Integer Id;
	private String Nome;
	private String Cognome;

}
