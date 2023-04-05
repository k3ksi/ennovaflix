package it.ennova.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Stagione {
	@Id
	private Integer id;
	private String titolo_stagione;
	private Integer id_catalogo;
	private Integer numero_stagione;
	private String data_uscita;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTitolo_stagione() {
		return titolo_stagione;
	}
	public void setTitolo_stagione(String titolo_stagione) {
		this.titolo_stagione = titolo_stagione;
	}
	public Integer getId_catalogo() {
		return id_catalogo;
	}
	public void setId_catalogo(Integer id_catalogo) {
		this.id_catalogo = id_catalogo;
	}
	public Integer getNumero_stagione() {
		return numero_stagione;
	}
	public void setNumero_stagione(Integer numero_stagione) {
		this.numero_stagione = numero_stagione;
	}
	public String getData_uscita() {
		return data_uscita;
	}
	public void setData_uscita(String data_uscita) {
		this.data_uscita = data_uscita;
	}
	
	
}
