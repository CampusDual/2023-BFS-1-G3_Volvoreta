package com.volvoreta.Backend.ws.core.rest;

import com.ontimize.jee.server.rest.ORestController;
import com.volvoreta.Backend.api.core.service.IBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/bookings")
public class BookingRestController extends ORestController<IBookingService> {

    @Autowired
    private IBookingService bookingService;


    @Override
    public IBookingService getService() {
         return this.bookingService;
    }

}
