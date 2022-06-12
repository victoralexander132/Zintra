package com.generation.zintra.repository;

import com.generation.zintra.model.ClienteRegistro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRegistroRepository extends JpaRepository<ClienteRegistro, Integer> {
}
