package com.generation.zintra.controller;

import com.generation.zintra.model.ComentContacto;
import com.generation.zintra.service.ComentContactoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT })
@RequestMapping(value = "api/ComentContacto")
public class ComentContactoController {

  private final ComentContactoService comentContactoService;

  @Autowired
  public ComentContactoController(ComentContactoService comentContactoService) {
    this.comentContactoService = comentContactoService;
  }

  // Leer
  @GetMapping("/{id}")
  public ComentContacto getComentContacto(@PathVariable Integer id) {
    return comentContactoService.getComentContacto(id);
  }

  @GetMapping("/all")
  public List<ComentContacto> getComentContactos() {
    return comentContactoService.getComentContactos();
  }

  // Escribir
  @PostMapping
  public ComentContacto saveComentContacto(@RequestBody ComentContacto comentContacto) {
    return comentContactoService.saveComentContacto(comentContacto);
  }

  // Borrar
  @DeleteMapping("delete/{id}")
  public void deleteComentContacto(@PathVariable Integer id) {
    comentContactoService.deleteComentContacto(id);
  }

  // Actualizar
  @PutMapping
  public ComentContacto updateComentContacto(@RequestBody ComentContacto comentContacto) {
    return comentContactoService.updateComentContacto(comentContacto);
  }


}
