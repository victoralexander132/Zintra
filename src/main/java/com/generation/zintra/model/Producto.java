package com.generation.zintra.model;

import javax.persistence.*;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import java.util.List;

@Entity
@Table(name = "producto")
public @Data class Producto {

    /*============================================================*/

    //    Llave primaria - auto incrementada
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer producto_id;

    @Column(nullable = false)
    private String nomProduct;

    @Column(nullable = false)
    private String modelo;

    @Column(nullable = false)
    private String descripcion;

    @Column(nullable = false)
    private Integer precio;

    @Column(nullable = false)
    private String tamanio;

    @Column(nullable = false)
    private String color;

    @Column(nullable = false)
    private String uso;

    @Column(nullable = false)
    private String url;

    @OneToMany(mappedBy = "producto")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private List<CompraCarrito> compraCarrito;

}
