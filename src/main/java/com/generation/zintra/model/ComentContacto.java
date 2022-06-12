package com.generation.zintra.model;

import lombok.Data;
import javax.persistence.*;

@Entity
@Table(name = "coment_contacto")
public @Data class ComentContacto {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Integer coment_id;

   @Column(nullable = false)
   private String nombre;

   @Column(nullable = false)
   private String email;

   @Column(nullable = false)
   private String asunto;

   @Column(nullable = false)
   private String mensaje;

}
