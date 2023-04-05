package it.ennova.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Catalogo {
	@Id
	private Integer Id;
	private String Titolo;
	private Integer Id_Tipologia;
	private String Descrizione;
	private String Locandina;
	private Double Media_Recensioni;
	private Boolean Is_Serie;
	
	
	public String getTitolo() {
		return Titolo;
	}
	public void setTitolo(String titolo) {
		Titolo = titolo;
	}
	public String getDescrizione() {
		return Descrizione;
	}
	public void setDescrizione(String descrizione) {
		Descrizione = descrizione;
	}
	public String getLocandina() {
		return Locandina;
	}
	public void setLocandina(String locandina) {
		Locandina = locandina;
	}
	public Double getMedia_Recensioni() {
		return Media_Recensioni;
	}
	public void setMedia_Recensioni(Double media_Recensioni) {
		Media_Recensioni = media_Recensioni;
	}
	public Boolean getIs_Serie() {
		return Is_Serie;
	}
	public void setIs_Serie(Boolean is_Serie) {
		Is_Serie = is_Serie;
	}
	public Integer getId() {
		return Id;
	}
	public Integer getId_Tipologia() {
		return Id_Tipologia;
	}
	
	

}
