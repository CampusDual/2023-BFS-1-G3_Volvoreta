package com.volvoreta.Backend.model.core.service;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import com.volvoreta.Backend.api.core.service.ILocationService;
import com.volvoreta.Backend.api.core.service.IStateService;
import com.volvoreta.Backend.model.core.dao.LocationDao;
import com.volvoreta.Backend.model.core.dao.StateDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Lazy
@Service("LocationService")
public class LocationService implements ILocationService {
    @Autowired
    private LocationDao locationDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult locationQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(locationDao, keyMap, attrList);
    }

    @Override
    //@Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult locationInsert(Map<?, ?> attrMap) {
        return this.daoHelper.insert(locationDao, attrMap);
    }

    @Override
    //@Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult locationUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
        return this.daoHelper.update(locationDao, attrMap, keyMap);
    }

    @Override
    //@Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult locationDelete(Map<?, ?> keyMap) {
        return this.daoHelper.delete(this.locationDao, keyMap);
    }


}
