package com.generation.zintra.service;

import java.util.List;

import com.generation.zintra.model.Envio;

public interface EnvioService {

	//Read
	Envio getEnvio (Integer id);
	List<Envio> getEnvios();
	
	//Create
	Envio saveEnvio (Envio envio);
	
	//Delete
	Boolean deleteEnvio (Integer id);
	
	//Update
	Envio updateEnvio (Envio envio);
}