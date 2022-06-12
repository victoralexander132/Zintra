package com.generation.zintra.service;

import com.generation.zintra.model.ComentContacto;
import com.generation.zintra.repository.ComentContactoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ComentContactoImp implements ComentContactoService{

    ComentContactoRepository comentContactoRepository;
    @Autowired //Si algo falla cambiar esta línea a la de abajo justo depués del paréntesis
    public ComentContactoImp(ComentContactoRepository comentContactoRepository) {
        this.comentContactoRepository = comentContactoRepository;
    }

    @Override
    public ComentContacto getComentContacto(Integer id) {
        Optional<ComentContacto> comentContacto = comentContactoRepository.findById(id);
        return comentContacto.orElse(null);
    }

    @Override
    public List<ComentContacto> getComentContactos() {
        return comentContactoRepository.findAll();
    }

    @Override
    public ComentContacto saveComentContacto(ComentContacto comentContacto) {
        return comentContactoRepository.save(comentContacto);
    }

    @Override
    public Boolean deleteComentContacto(Integer id) {
        try {
            comentContactoRepository.deleteById(id);
            return true;
        }
        catch (Exception e){
            return false;
        }
    }

    @Override
    public ComentContacto updateComentContacto(ComentContacto comentContacto) {
        return comentContactoRepository.save(comentContacto);
    }
}
