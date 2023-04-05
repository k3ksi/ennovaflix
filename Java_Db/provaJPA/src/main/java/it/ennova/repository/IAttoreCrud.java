package it.ennova.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import it.ennova.model.Attore;

@Repository
public interface IAttoreCrud extends CrudRepository<Attore, Integer> {

}
