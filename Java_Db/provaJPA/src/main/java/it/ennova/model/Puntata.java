package it.ennova.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Puntata {
	@Id
	private Integer id_stagione;
	@Id
	private Integer id_video;
	private Integer numero_puntata;
	private String data_uscita;
	
	public Integer getId_stagione() {
		return id_stagione;
	}
	public void setId_stagione(Integer id_stagione) {
		this.id_stagione = id_stagione;
	}
	public Integer getId_video() {
		return id_video;
	}
	public void setId_video(Integer id_video) {
		this.id_video = id_video;
	}
	public Integer getNumero_puntata() {
		return numero_puntata;
	}
	public void setNumero_puntata(Integer numero_puntata) {
		this.numero_puntata = numero_puntata;
	}
	public String getData_uscita() {
		return data_uscita;
	}
	public void setData_uscita(String data_uscita) {
		this.data_uscita = data_uscita;
	}
	
	
}
