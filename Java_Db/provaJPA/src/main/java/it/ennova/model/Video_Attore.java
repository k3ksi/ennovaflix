package it.ennova.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Video_Attore {
	@Id
	private Integer id_attore;
	@Id
	private Integer id_video;
	
	public Integer getId_attore() {
		return id_attore;
	}
	public void setId_attore(Integer id_attore) {
		this.id_attore = id_attore;
	}
	public Integer getId_video() {
		return id_video;
	}
	public void setId_video(Integer id_video) {
		this.id_video = id_video;
	}
	
	
}
