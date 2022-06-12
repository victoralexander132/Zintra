package com.generation.zintra.service;

import com.generation.zintra.model.ComentContacto;

import java.util.List;


public interface ComentContactoService {
    // Leer
    ComentContacto getComentContacto(Integer id);
    List<ComentContacto> getComentContactos();

    // Guardar
    ComentContacto saveComentContacto(ComentContacto ComentContacto);

    // Borrar
    Boolean deleteComentContacto(Integer id);

    // Actualizar
    ComentContacto updateComentContacto(ComentContacto ComentContacto);

}