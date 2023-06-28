package com.volvoreta.Backend.model.core.service;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import com.volvoreta.Backend.api.core.service.IReservationStatesService;
import com.volvoreta.Backend.model.core.dao.ReservationStatesDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
@Lazy
@Service("ReservationStatesService")
public class ReservationStatesService implements IReservationStatesService {
    @Autowired
    private ReservationStatesDao reservationStatesDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult reservationStateQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(reservationStatesDao, keyMap, attrList);
    }
    public EntityResult clientReservationStateQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(reservationStatesDao, keyMap, attrList, "clientReservationStateQuery");
    }

    @Override
    //@Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult reservationStateInsert(Map<?, ?> attrMap) {
        return this.daoHelper.insert(reservationStatesDao, attrMap);
    }

    @Override
    //@Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult reservationStateUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
        return this.daoHelper.update(reservationStatesDao, attrMap, keyMap);
    }

    @Override
    //@Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult reservationStateDelete(Map<?, ?> keyMap) {
        return this.daoHelper.delete(this.reservationStatesDao, keyMap);
    }


}
