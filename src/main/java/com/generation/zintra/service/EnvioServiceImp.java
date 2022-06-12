package com.generation.zintra.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.zintra.model.Envio;
import com.generation.zintra.repository.EnvioRepository;

@Service
public class EnvioServiceImp implements EnvioService{
	EnvioRepository envioRepository;
	
	public EnvioServiceImp(@Autowired EnvioRepository envioRepository) {
		this.envioRepository = envioRepository;
	}
	
	@Override
	public Envio getEnvio(Integer id) {
		Optional<Envio> envio = envioRepository.findById(id);
		return envio.orElse(null);
	}

	@Override
	public List<Envio> getEnvios() {
		return envioRepository.findAll();
	}

	@Override
	public Envio saveEnvio(Envio envio) {
		return envioRepository.save(envio);
	}

	@Override
		public Boolean deleteEnvio(Integer id) {
			try {
				envioRepository.deleteById(id);
				return true;
			}catch(Exception er){
				return false;
			}			
		}	

	@Override
	public Envio updateEnvio(Envio envio) {
		return envioRepository.save(envio);
	}

}
