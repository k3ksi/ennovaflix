package it.ennova.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Tipologia {
	@Id
	private Integer id;
	private String tipologia;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTipologia() {
		return tipologia;
	}
	public void setTipologia(String tipologia) {
		this.tipologia = tipologia;
	}
	
}
