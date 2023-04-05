package it.ennova.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Utente {
	@Id // la chiave primaria
	private Integer Id;
	private String NickName;
	private String Email;
	private String Password;
	private String Immagine;
	
	@GeneratedValue(strategy=GenerationType.IDENTITY)// controllo di corretezza
	
	//@Temporal (TemporalType.DATE) // i dati temporali
	
	public Integer getId() {
		return Id;
	}
	public void setId(Integer id) {
		Id = id;
	}
	public String getNickName() {
		return NickName;
	}
	public void setNickName(String nickName) {
		NickName = nickName;
	}
	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public String getImmagine() {
		return Immagine;
	}
	public void setImmagine(String immagine) {
		Immagine = immagine;
	}
	
	
}
