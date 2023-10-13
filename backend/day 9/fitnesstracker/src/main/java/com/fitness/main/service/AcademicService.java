package com.fitness.main.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitness.main.model.Academic;
import com.fitness.main.repository.AcademicRepo;

@Service
public class AcademicService {
	@Autowired
	AcademicRepo ar;
	public Academic create(Academic acad) {
        return ar.save(acad);
    }

	public List<Academic> getAllAcademicData() {
		return ar.findAll();
	}

    public Academic update(Academic a) {
        return ar.save(a);
    }

    public void delete(Long id) {
        ar.deleteById(id);
    }
}
