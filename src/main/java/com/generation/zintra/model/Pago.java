package com.generation.zintra.model;

import lombok.Data;
import javax.persistence.*;

@Entity
@Table(name = "Pago")
public @Data class Pago {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer pago_id;

    @Column(nullable = false)
    private Integer cvc;

    @Column(nullable = false)
    private Integer fecha_vencim;

    @Column(nullable = false)
    private String nombre_tarjeta;

    @Column(nullable = false)
    private Integer numero_tarjeta;

    @OneToOne
    @JoinColumn(nullable = false, name = "envio_id")
    private Envio envio;

}
