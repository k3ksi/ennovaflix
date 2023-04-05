package it.ennova.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Preferiti {
	@Id
	private Integer Id_Catalogo;
	@Id
	private Integer Id_Utente;
}
