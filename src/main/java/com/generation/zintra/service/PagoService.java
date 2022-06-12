package com.generation.zintra.service;

import com.generation.zintra.model.Pago;

import java.util.List;

public interface PagoService {

    Pago getPago(Integer id);
    List<Pago> getPagos();
    Pago savePago(Pago pago);
    Boolean deletePago(Integer id);
    Pago updatePago(Pago pago);
}
