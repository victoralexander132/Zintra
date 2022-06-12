package com.generation.zintra.service;

import com.generation.zintra.model.Producto;

import java.util.List;

public interface ProductoService {
    // Leer
    Producto getProducto(Integer id);

    List<Producto> getProductos();

    // Guardar
    Producto saveProducto(Producto producto);

    // Borrar
    Boolean deleteProducto(Integer id);

    // Actualizar
    Producto updateProducto(Producto producto);

}