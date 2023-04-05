package it.ennova.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Video {
	@Id
	private Integer Id;
	private String Titolo;
	private Integer Id_Catalogo;
	private String Durata;
}
