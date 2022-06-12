package com.generation.zintra.service;

import com.generation.zintra.model.ClienteRegistro;

import java.util.List;

public interface ClienteRegistroService {
    // Leer
    ClienteRegistro getClienteRegistro(Integer id);

    List<ClienteRegistro> getClienteRegistros();

    // Guardar
    ClienteRegistro saveClienteRegistro(ClienteRegistro clienteRegistro);

    // Borrar
    Boolean deleteClienteRegistro(Integer id);

    // Actualizar
    ClienteRegistro updateClienteRegistro(ClienteRegistro clienteRegistro);

}
