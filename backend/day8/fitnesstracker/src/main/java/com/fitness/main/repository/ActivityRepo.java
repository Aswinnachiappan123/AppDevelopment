package com.fitness.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fitness.main.model.Activity;

public interface ActivityRepo extends JpaRepository<Activity,Long> {

}
