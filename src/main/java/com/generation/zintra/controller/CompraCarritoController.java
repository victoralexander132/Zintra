package com.generation.zintra.controller;

import com.generation.zintra.model.CompraCarrito;
import com.generation.zintra.service.CompraCarritoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT })
@RequestMapping(value = "api/CompraCarrito")
public class CompraCarritoController {
	
	private final CompraCarritoService compraCarritoService;

  @Autowired 
	public CompraCarritoController(CompraCarritoService compraCarritoService) {
		this.compraCarritoService = compraCarritoService;
	}

	// Leer
	@GetMapping("/{id}")
	public CompraCarrito getCompraCarrito(@PathVariable Integer id) {
		return compraCarritoService.getCompraCarrito(id);
	}

	@GetMapping("/all")
	public List<CompraCarrito> getCompraCarritos() {
		return compraCarritoService.getCompraCarritos();
	}

	// Escribir
	@PostMapping
	public CompraCarrito saveCompraCarrito(@RequestBody CompraCarrito compraCarrito) {
		return compraCarritoService.saveCompraCarrito(compraCarrito);
	}

	// Borrar
	@DeleteMapping("delete/{id}")
	public void deleteCompraCarrito(@PathVariable Integer id) {
		compraCarritoService.deleteCompraCarrito(id);
	}

	// Actualizar
	@PutMapping
	public CompraCarrito updateCompraCarrito(@RequestBody CompraCarrito compraCarrito) {
		return compraCarritoService.updateClase(compraCarrito);
	}
}
