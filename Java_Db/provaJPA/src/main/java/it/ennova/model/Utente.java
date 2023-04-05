package it.ennova.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Utente {
	@Id // la chiave primaria
	private Integer id;
	private String nickname;
	private String email;
	private String password;
	private String immagine;
	private String notifiche;
	
@GeneratedValue(strategy=GenerationType.IDENTITY) // controllo di corretezza
	
		//@Temporal (TemporalType.DATE) // i dati temporali


	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getImmagine() {
		return immagine;
	}
	public void setImmagine(String immagine) {
		this.immagine = immagine;
	}
	public String getNotifiche() {
		return notifiche;
	}
	public void setNotifiche(String notifiche) {
		this.notifiche = notifiche;
	}
	


	
	
}
