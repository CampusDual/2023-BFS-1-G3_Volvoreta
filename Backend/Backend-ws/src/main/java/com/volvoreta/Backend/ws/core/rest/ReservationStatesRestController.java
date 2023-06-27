package com.volvoreta.Backend.ws.core.rest;

import com.ontimize.jee.server.rest.ORestController;
import com.volvoreta.Backend.api.core.service.IReservationStatesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/reservationStates")
public class ReservationStatesRestController extends ORestController<IReservationStatesService> {

    @Autowired
    private IReservationStatesService reservationStatesService;


    @Override
    public IReservationStatesService getService() {
         return this.reservationStatesService;
    }

}
