package it.ennova.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Preferiti {
	@Id
	private Integer id_catalogo;
	@Id
	private Integer id_utente;
	
	public Integer getId_catalogo() {
		return id_catalogo;
	}
	public void setId_catalogo(Integer id_catalogo) {
		this.id_catalogo = id_catalogo;
	}
	public Integer getId_utente() {
		return id_utente;
	}
	public void setId_utente(Integer id_utente) {
		this.id_utente = id_utente;
	}
	
	
}
