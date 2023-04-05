package it.ennova.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Genere {
	@Id
	private Integer Id;
	private String Genere;
}
