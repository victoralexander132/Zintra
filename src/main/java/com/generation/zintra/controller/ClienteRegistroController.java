package com.generation.zintra.controller;

import com.generation.zintra.model.ClienteRegistro;
import com.generation.zintra.service.ClienteRegistroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT })
@RequestMapping(value = "api/ClienteRegistro")
public class ClienteRegistroController {

  private final ClienteRegistroService clienteRegistroService;

  @Autowired
  public ClienteRegistroController(ClienteRegistroService clienteRegistroService) {
    this.clienteRegistroService = clienteRegistroService;
  }

  // Leer
  @GetMapping("/{id}")
  public ClienteRegistro getClienteRegistro(@PathVariable Integer id) {
    return clienteRegistroService.getClienteRegistro(id);
  }

  @GetMapping("/all")
  public List<ClienteRegistro> getClienteRegistros() {
    return clienteRegistroService.getClienteRegistros();
  }

  // Escribir
  @PostMapping
  public ClienteRegistro saveClienteRegistro(@RequestBody ClienteRegistro clienteRegistro) {
    return clienteRegistroService.saveClienteRegistro(clienteRegistro);
  }

  // Borrar
  @DeleteMapping("delete/{id}")
  public void deleteClienteRegistro(@PathVariable Integer id) {
    clienteRegistroService.deleteClienteRegistro(id);
  }

  // Actualizar
  @PutMapping
  public ClienteRegistro updateClienteRegistro(@RequestBody ClienteRegistro clienteRegistro) {
    return clienteRegistroService.updateClienteRegistro(clienteRegistro);
  }

}
