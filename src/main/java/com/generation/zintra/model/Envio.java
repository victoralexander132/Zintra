package com.generation.zintra.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import lombok.Data;
import javax.persistence.*;


@Entity
@Table(name = "envio") //homologar nombres de las diferentes tablas

public @Data class Envio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer envio_id;

    @Column (nullable = false, name= "nombre_cliente")
		private String nombre;
		@Column (nullable = false, name= "apellido_cliente")
		private String apellido;
		@Column (nullable = false, name= "telefono")
		private String telefono;
		@Column (nullable = false, name= "email")
		private String email ;
		@Column (nullable = false, name= "estado")
		private String estado;
		@Column (nullable = false, name= "ciudad")
		private String ciudad;
		@Column (nullable = false, name= "cp")
		private Integer cp;
		@Column (nullable = false, name= "direccion")
		private String direccion;
		@Column (nullable = false, name= "referencias")
		private String referencias;	

		// Llave foránea
    @OneToOne
    @JoinColumn(nullable = false, name="compra_id")
    @JsonProperty(access = Access.WRITE_ONLY)
    private CompraCarrito compraCarrito;

		@OneToOne(mappedBy = "envio", cascade = CascadeType.REMOVE)
		private Pago pago;


}
