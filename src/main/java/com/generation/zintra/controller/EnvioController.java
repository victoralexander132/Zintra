package com.generation.zintra.controller;

import com.generation.zintra.model.Envio;
import com.generation.zintra.service.EnvioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT })
@RequestMapping(value = "api/Envio")
public class EnvioController {

	private final EnvioService envioService;

  @Autowired
	public EnvioController(EnvioService envioService) {
		this.envioService = envioService;
	}

  // Leer
	@GetMapping("/{id}")
	public Envio getEnvio(@PathVariable Integer id) {
		return envioService.getEnvio(id);
	}

	@GetMapping("/all")
	public List<Envio> getEnvios() {
		return envioService.getEnvios();
	}

  // Escribir
	@PostMapping
	public Envio saveEnvio(@RequestBody Envio envio) {
		return envioService.saveEnvio(envio);
	}

  // Borrar
	@DeleteMapping("delete/{id}")
	public void deleteEnvio(@PathVariable Integer id) {
		envioService.deleteEnvio(id);
	}

  // Actualizar
	@PutMapping
	public Envio updateEnvio(@RequestBody Envio envio) {
		return envioService.updateEnvio(envio);
	}

}
