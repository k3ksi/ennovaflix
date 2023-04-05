package it.ennova.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Tipologia {
	@Id
	private Integer Id;
	private String Tipologia;
}
