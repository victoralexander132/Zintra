package com.generation.zintra.repository;

import com.generation.zintra.model.CompraCarrito;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;




@Repository
public interface CompraCarritoRepository extends JpaRepository<CompraCarrito, Integer>{


}
