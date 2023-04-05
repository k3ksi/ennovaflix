package it.ennova.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Video_Attore {
	@Id
	private Integer Id_Attore;
	@Id
	private Integer Id_Video;
}
