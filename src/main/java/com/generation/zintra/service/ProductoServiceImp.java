package com.generation.zintra.service;

import com.generation.zintra.model.Producto;
import com.generation.zintra.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoServiceImp implements ProductoService{

    ProductoRepository productoRepository;
    @Autowired //Si algo falla cambiar esta línea a la de abajo justo depués del paréntesis
    public ProductoServiceImp(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    @Override
    public Producto getProducto(Integer id) {
        Optional<Producto> producto = productoRepository.findById(id);
        return producto.orElse(null);
    }

    @Override
    public List<Producto> getProductos() {
        return productoRepository.findAll();
    }

    @Override
    public Producto saveProducto(Producto producto) {
        return productoRepository.save(producto);
    }

    @Override
    public Boolean deleteProducto(Integer id) {
        try {
            productoRepository.deleteById(id);
            return true;
        }
        catch (Exception e){
            return false;
        }
    }

    @Override
    public Producto updateProducto(Producto producto) {
        return productoRepository.save(producto);
    }
}
