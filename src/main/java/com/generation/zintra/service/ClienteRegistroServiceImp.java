package com.generation.zintra.service;

import com.generation.zintra.model.ClienteRegistro;
import com.generation.zintra.repository.ClienteRegistroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteRegistroServiceImp implements ClienteRegistroService{

    ClienteRegistroRepository clienteRegistroRepository;
    @Autowired //Si algo falla cambiar esta línea a la de abajo justo depués del paréntesis
    public ClienteRegistroServiceImp(ClienteRegistroRepository clienteRegistroRepository) {
        this.clienteRegistroRepository = clienteRegistroRepository;
    }

    @Override
    public ClienteRegistro getClienteRegistro(Integer id) {
        Optional<ClienteRegistro> clienteRegistro = clienteRegistroRepository.findById(id);
        return clienteRegistro.orElse(null);
    }

    @Override
    public List<ClienteRegistro> getClienteRegistros() {
        return clienteRegistroRepository.findAll();
    }

    @Override
    public ClienteRegistro saveClienteRegistro(ClienteRegistro clienteRegistro) {
        return clienteRegistroRepository.save(clienteRegistro);
    }

    @Override
    public Boolean deleteClienteRegistro(Integer id) {
        try {
            clienteRegistroRepository.deleteById(id);
            return true;
        }
        catch (Exception e){
            return false;
        }
    }

    @Override
    public ClienteRegistro updateClienteRegistro(ClienteRegistro clienteRegistro) {
        return clienteRegistroRepository.save(clienteRegistro);
    }
}
