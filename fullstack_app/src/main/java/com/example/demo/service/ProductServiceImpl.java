
package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Product;
import com.example.demo.repositary.ProjectRepositary;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProjectRepositary repo;
	
	@Override
	public Product saveProduct(Product product) {
		
		return repo.save(product);
	}

	@Override
	public List<Product> getAllProduct() {
		
		return repo.findAll();
	}

	@Override
	public Product getProductById(Integer id) {
		return repo.findById(id).get();
	}

	@Override
	public String deleteProductById(Integer id) {
		Product pd=repo.findById(id).get();
	
		if(pd != null) {
			repo.delete(pd);
			return "Product Deleted Successfully";
		}
		return "Something Wrong please check";
	}

	@Override
	public Product editProduct(Product product, Integer id) {
		Product pd=repo.findById(id).get();
		pd.setDescription(product.getDescription());
		pd.setPrice(product.getPrice());
		pd.setProductName(product.getProductName());
		pd.setStatus(product.getStatus());
		return repo.save(pd);
	}

}
