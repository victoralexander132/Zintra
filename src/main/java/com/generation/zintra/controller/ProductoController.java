package com.generation.zintra.controller;

import com.generation.zintra.model.Producto;
import com.generation.zintra.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT })
@RequestMapping(value = "api/Producto")
public class ProductoController {

  private final ProductoService productoService;

  @Autowired
  public ProductoController(ProductoService productoService) {
    this.productoService = productoService;
  }

  // Leer
  @GetMapping("/{id}")
  public Producto getProducto(@PathVariable Integer id) {
    return productoService.getProducto(id);
  }

  @GetMapping("/all")
  public List<Producto> getProductos() {
    return productoService.getProductos();
  }

  // Escribir
  @PostMapping
  public Producto saveProducto(@RequestBody Producto producto) {
    return productoService.saveProducto(producto);
  }

  // Borrar
  @DeleteMapping("delete/{id}")
  public void deleteProducto(@PathVariable Integer id) {
    productoService.deleteProducto(id);
  }

  // Actualizar
  @PutMapping
  public Producto updateProducto(@RequestBody Producto producto) {
    return productoService.updateProducto(producto);
  }

}