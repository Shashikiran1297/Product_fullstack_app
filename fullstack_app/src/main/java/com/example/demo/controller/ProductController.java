package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Product;
import com.example.demo.service.ProductService;

@RestController
public class ProductController {

	@Autowired
	private ProductService service;
	
	@PostMapping("/addProduct")
	public ResponseEntity<?> AddProducts(@RequestBody Product product){
		
		return new ResponseEntity<>(service.saveProduct(product),HttpStatus.CREATED);
	}
	
	@GetMapping("/getAll")
	public ResponseEntity<?> getAllProducts(){
		
		return new ResponseEntity<>(service.getAllProduct(),HttpStatus.OK);	
	}
	
	@GetMapping("/byId/{Id}")
	public ResponseEntity<?> retriveOneProductById(@PathVariable Integer Id){
		return new ResponseEntity<>(service.getProductById(Id),HttpStatus.OK);
		
	}
	
	@DeleteMapping("/del/{Id}")
	public ResponseEntity<?> DeleteProductInDB(@PathVariable Integer Id){
	 
		return new ResponseEntity<>(service.deleteProductById(Id),HttpStatus.OK);
		
	}
	
    @PutMapping("/edit/{Id}")
	public ResponseEntity<?> Edit_Product(@RequestBody Product product,@PathVariable Integer Id){
		
		return new ResponseEntity<>(service.editProduct(product,Id),HttpStatus.CREATED);
		
	}
}
