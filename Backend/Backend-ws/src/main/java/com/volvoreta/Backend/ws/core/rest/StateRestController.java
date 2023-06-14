package com.volvoreta.Backend.ws.core.rest;

import com.ontimize.jee.server.rest.ORestController;
import com.volvoreta.Backend.api.core.service.IStateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/states")
public class StateRestController extends ORestController<IStateService> {

    @Autowired
    private IStateService stateService;


    @Override
    public IStateService getService() {
         return this.stateService;
    }

}
