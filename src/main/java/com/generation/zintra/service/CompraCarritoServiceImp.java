package com.generation.zintra.service;

import com.generation.zintra.model.CompraCarrito;
import com.generation.zintra.repository.CompraCarritoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompraCarritoServiceImp implements CompraCarritoService{
    CompraCarritoRepository compraCarritoRepository;

    @Autowired
    public CompraCarritoServiceImp(CompraCarritoRepository compraCarritoRepository) {
        this.compraCarritoRepository = compraCarritoRepository;
    }


    @Override
    public CompraCarrito getCompraCarrito(Integer id) {
        Optional<CompraCarrito> compraCarrito = compraCarritoRepository.findById(id);
        return compraCarrito.orElse(null);
    }

    @Override
    public List<CompraCarrito> getCompraCarritos() {
        return compraCarritoRepository.findAll();
    }

    @Override
    public CompraCarrito saveCompraCarrito(CompraCarrito compraCarrito) {
        return compraCarritoRepository.save(compraCarrito);
    }

    @Override
    public CompraCarrito updateClase(CompraCarrito compraCarrito) {
        return compraCarritoRepository.save(compraCarrito);
    }

    @Override
    public Boolean deleteCompraCarrito(Integer id) {
        try {
            compraCarritoRepository.deleteById(id);
            return true;
        }
        catch (Exception e){
            return false;
        }
    }
}
