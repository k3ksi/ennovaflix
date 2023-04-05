package it.ennova.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Genere_Catalogo {
	@Id
	private Integer id_genere;
	@Id
	private Integer id_catalogo;
	
	public Integer getId_genere() {
		return id_genere;
	}
	public void setId_genere(Integer id_genere) {
		this.id_genere = id_genere;
	}
	public Integer getId_catalogo() {
		return id_catalogo;
	}
	public void setId_catalogo(Integer id_catalogo) {
		this.id_catalogo = id_catalogo;
	}
	
	
}
