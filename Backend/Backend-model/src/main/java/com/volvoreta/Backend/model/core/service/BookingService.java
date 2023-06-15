package com.volvoreta.Backend.model.core.service;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import com.volvoreta.Backend.api.core.service.IBookingService;
import com.volvoreta.Backend.model.core.dao.BookingDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Lazy
@Service("BookingService")
public class BookingService implements IBookingService {
    @Autowired
    private BookingDao bookingDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    public EntityResult bookingQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(bookingDao, keyMap, attrList);
    }

    //@Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult bookingInsert(Map<?, ?> attrMap) {
        return this.daoHelper.insert(bookingDao, attrMap);
    }

    //@Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult bookingUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
        return this.daoHelper.update(bookingDao, attrMap, keyMap);
    }
    //@Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult bookingDelete(Map<?, ?> keyMap) {
        return this.daoHelper.delete(this.bookingDao, keyMap);
    }


}
