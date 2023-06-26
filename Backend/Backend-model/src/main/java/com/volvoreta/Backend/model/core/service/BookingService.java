package com.volvoreta.Backend.model.core.service;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import com.volvoreta.Backend.api.core.service.IBookingService;
import com.volvoreta.Backend.model.core.dao.BookingDao;
import com.volvoreta.Backend.model.core.dao.ProductDao;
import org.apache.commons.math3.stat.descriptive.summary.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.util.*;

@Lazy
@Service("BookingService")
public class BookingService implements IBookingService {
    @Autowired
    private BookingDao bookingDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;
    private Enumeration enumeration;
    private Enumeration enumeration1;

    @Override
    public EntityResult bookingQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(bookingDao, keyMap, attrList);
    }
    @Override
    public EntityResult reserveStockQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(bookingDao, keyMap, attrList, "reserveStockQuery");
    }
    @Override
    public EntityResult myBookingQuery(Map<String, Object> keyMap, List<?> attrList) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        keyMap.put("id_user", auth.getName());
        return this.daoHelper.query(bookingDao, keyMap, attrList);
    }

    //@Secured({ PermissionsProviderSecured.SECURED })
    @Override
    public EntityResult bookingInsert(Map<String, Object> attrMap) {
        Calendar endDate = Calendar.getInstance();
        endDate.add(Calendar.DAY_OF_YEAR, 15);
        Timestamp timestamp = new Timestamp(endDate.getTime().getTime());
        attrMap.put("end_date", timestamp);
        return this.daoHelper.insert(bookingDao, attrMap);
    }

    @Override
    //@Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult bookingUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
        return this.daoHelper.update(bookingDao, attrMap, keyMap);
    }

    @Override
    //@Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult bookingDelete(Map<?, ?> keyMap) {
        return this.daoHelper.delete(this.bookingDao, keyMap);
    }


}
