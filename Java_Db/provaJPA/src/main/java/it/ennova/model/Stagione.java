package it.ennova.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Stagione {
	@Id
	private Integer Id;
	private String Titolo_Stagione;
	private Integer Id_Catalogo;
	private Integer Numero_Stagione;
}
