package com.generation.zintra.service;

import java.util.List;
import com.generation.zintra.model.CompraCarrito;

public interface CompraCarritoService {
	
	CompraCarrito getCompraCarrito(Integer id);
	List<CompraCarrito> getCompraCarritos();
	CompraCarrito saveCompraCarrito(CompraCarrito compraCarrito);
	CompraCarrito updateClase(CompraCarrito compraCarrito);
	Boolean deleteCompraCarrito(Integer id);
}
