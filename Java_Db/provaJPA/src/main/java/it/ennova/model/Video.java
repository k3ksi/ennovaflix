package it.ennova.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Video {
	@Id
	private Integer id;
	private String titolo;
	private Integer id_catalogo;
	private String durata;
	private String url;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTitolo() {
		return titolo;
	}
	public void setTitolo(String titolo) {
		this.titolo = titolo;
	}
	public Integer getId_catalogo() {
		return id_catalogo;
	}
	public void setId_catalogo(Integer id_catalogo) {
		this.id_catalogo = id_catalogo;
	}
	public String getDurata() {
		return durata;
	}
	public void setDurata(String durata) {
		this.durata = durata;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	
	
}
