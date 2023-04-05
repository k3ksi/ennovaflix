package it.ennova.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Recensione {
	@Id
	private Integer Id_Stagione;
	@Id
	private Integer Id_Video;
	private Integer Numero_Puntata;
	
}
