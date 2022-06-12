package com.generation.zintra.repository;

import com.generation.zintra.model.ComentContacto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ComentContactoRepository extends JpaRepository<ComentContacto, Integer> {
}