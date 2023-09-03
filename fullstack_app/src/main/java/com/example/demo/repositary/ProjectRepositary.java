package com.example.demo.repositary;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Product;

public interface ProjectRepositary extends JpaRepository<Product, Integer>{

}
