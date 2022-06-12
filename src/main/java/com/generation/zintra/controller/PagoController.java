package com.generation.zintra.controller;

import com.generation.zintra.model.Pago;
import com.generation.zintra.service.PagoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT })
@RequestMapping(value = "api/Pago")
public class PagoController {

  private final PagoService pagoService;

  @Autowired
  public PagoController(PagoService pagoService) {
    this.pagoService = pagoService;
  }

  // Leer
  @GetMapping("/{id}")
  public Pago getPago(@PathVariable Integer id) {
    return pagoService.getPago(id);
  }

  @GetMapping("/all")
  public List<Pago> getPagos() {
    return pagoService.getPagos();
  }

  // Escribir
  @PostMapping
  public Pago savePago(@RequestBody Pago pago) {
    return pagoService.savePago(pago);
  }

  // Borrar
	@DeleteMapping("delete/{id}")
	public void deletePago(@PathVariable Integer id) {
		pagoService.deletePago(id);
	}

  // Actualizar
  @PutMapping
  public Pago updatePago(@RequestBody Pago pago) {
    return pagoService.updatePago(pago);
  }
}
