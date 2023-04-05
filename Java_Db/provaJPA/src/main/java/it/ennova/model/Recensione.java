package it.ennova.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Recensione {
	
	private Integer voto;
	private String recensione;
	@Id
	private Integer id_catalogo;
	@Id
	private Integer id_utente;
	private String data_recensione;
	
	public Integer getVoto() {
		return voto;
	}
	public void setVoto(Integer voto) {
		this.voto = voto;
	}
	public String getRecensione() {
		return recensione;
	}
	public void setRecensione(String recensione) {
		this.recensione = recensione;
	}
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
	public String getData_recensione() {
		return data_recensione;
	}
	public void setData_recensione(String data_recensione) {
		this.data_recensione = data_recensione;
	}
	
	
}
