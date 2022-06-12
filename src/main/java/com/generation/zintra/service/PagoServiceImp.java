package com.generation.zintra.service;

import com.generation.zintra.model.Pago;
import com.generation.zintra.repository.PagoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PagoServiceImp implements PagoService{

    PagoRepository pagoRepository;

    @Autowired
    public PagoServiceImp(PagoRepository pagoRepository) {
        this.pagoRepository = pagoRepository;
    }

    @Override
    public Pago getPago(Integer id) {
        Optional<Pago> pago = pagoRepository.findById(id);
        return pago.orElse(null);
    }

    @Override
    public List<Pago> getPagos() {
        return pagoRepository.findAll();
    }

    @Override
    public Pago savePago(Pago pago) {
        return pagoRepository.save(pago);
    }

    @Override
    public Boolean deletePago(Integer id) {
        try {
            pagoRepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }

    @Override
    public Pago updatePago(Pago pago) {
        return pagoRepository.save(pago);
    }
}
