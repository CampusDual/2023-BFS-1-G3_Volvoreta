package com.volvoreta.Backend.ws.core.rest;

import com.ontimize.jee.server.rest.ORestController;


import com.volvoreta.Backend.api.core.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
public class ProductRestController extends ORestController<IProductService> {

    @Autowired
    private IProductService productService;


    @Override
    public IProductService getService() {
         return this.productService;
    }

}
