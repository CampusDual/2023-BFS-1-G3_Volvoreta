package com.volvoreta.Backend.ws.core.rest;

import com.ontimize.jee.server.rest.ORestController;
import com.volvoreta.Backend.api.core.service.ILocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/locations")
public class LocationRestController extends ORestController<ILocationService> {

    @Autowired
    private ILocationService locationService;


    @Override
    public ILocationService getService() {
         return this.locationService;
    }

}
