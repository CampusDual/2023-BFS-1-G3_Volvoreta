package com.volvoreta.Backend.model.core.service;

import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import com.volvoreta.Backend.api.core.service.IStateService;
import com.volvoreta.Backend.model.core.dao.StateDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Lazy
@Service("StateService")
public class StateService implements IStateService {
    @Autowired
    private StateDao stateDao;

    @Autowired
    private DefaultOntimizeDaoHelper daoHelper;

    @Override
    public EntityResult stateQuery(Map<?, ?> keyMap, List<?> attrList) {
        return this.daoHelper.query(stateDao, keyMap, attrList);
    }

    @Override
    //@Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult stateInsert(Map<?, ?> attrMap) {
        return this.daoHelper.insert(stateDao, attrMap);
    }

    @Override
    //@Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult stateUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
        return this.daoHelper.update(stateDao, attrMap, keyMap);
    }

    @Override
    //@Secured({ PermissionsProviderSecured.SECURED })
    public EntityResult stateDelete(Map<?, ?> keyMap) {
        return this.daoHelper.delete(this.stateDao, keyMap);
    }


}
