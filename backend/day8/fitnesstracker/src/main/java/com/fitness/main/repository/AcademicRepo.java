package com.fitness.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fitness.main.model.Academic;

@Repository
public interface AcademicRepo extends JpaRepository<Academic,Long> {

}
