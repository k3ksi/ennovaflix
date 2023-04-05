package it.ennova.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Genere_Catalogo {
	@Id
	private Integer Id_Genere;
	@Id
	private Integer Id_Catalogo;
	
}
