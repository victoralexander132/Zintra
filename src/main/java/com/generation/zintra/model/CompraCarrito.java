package com.generation.zintra.model;

import javax.persistence.*;
import lombok.Data;


@Entity
@Table(name = "CompraCarrito")
public @Data class CompraCarrito {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, name = "compra_id")
    private Integer compra_id;

    @Column(nullable = false, name = "cant_productos")
    private Integer cant_productos;

    @Column(nullable = false, name = "total")
    private Float total;

    //Se envia carrito_id a direccion
    @OneToOne(mappedBy = "compraCarrito", cascade = CascadeType.REMOVE)
    private Envio envio;

    //Recibe cliente_id
    @OneToOne
    @JoinColumn(nullable = false, name = "cliente_id")
    private ClienteRegistro clienteRegistro;

    //Recibe producto_id
    @ManyToOne
    @JoinColumn(nullable = false, name = "producto_id")
    private Producto producto;


}

