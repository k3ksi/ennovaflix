package it.ennova.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Catalogo {
	@Id
	private Integer id;
	private String titolo;
	private Integer id_tipologia;
	private String descrizione;
	private String locandina;
	private String anno_uscita;
	private String data_inserimento;
	
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
	public Integer getId_tipologia() {
		return id_tipologia;
	}
	public void setId_tipologia(Integer id_tipologia) {
		this.id_tipologia = id_tipologia;
	}
	public String getDescrizione() {
		return descrizione;
	}
	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}
	public String getLocandina() {
		return locandina;
	}
	public void setLocandina(String locandina) {
		this.locandina = locandina;
	}
	public String getAnno_uscita() {
		return anno_uscita;
	}
	public void setAnno_uscita(String anno_uscita) {
		this.anno_uscita = anno_uscita;
	}
	public String getData_inserimento() {
		return data_inserimento;
	}
	public void setData_inserimento(String data_inserimento) {
		this.data_inserimento = data_inserimento;
	}
	

}
