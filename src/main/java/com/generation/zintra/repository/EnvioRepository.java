package com.generation.zintra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.generation.zintra.model.Envio;

@Repository
public interface EnvioRepository extends JpaRepository<Envio,Integer> {

}

