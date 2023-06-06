package com.volvoreta.Backend.model.core.service;


import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.dto.EntityResultMapImpl;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;
import com.volvoreta.Backend.api.core.service.IPermissionService;
import com.volvoreta.Backend.api.core.service.IUserService;
import com.volvoreta.Backend.model.core.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service("PermissionService")
@Lazy

public class PermissionService implements IPermissionService {

	public static final String PLANNER_PERMISSION_SECURITY = "{\"routes\": [{ \"permissionId\": \"users-permissions\", \"enabled\": false }]," +
			"\"menu\": [{ \"attr\": \"users\", \"visible\": false, \"enabled\": false }]}";
	@Override
	public EntityResult permissionQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		EntityResult e = new EntityResultMapImpl();
		Map<String, String> map = new HashMap<>();
		String role = authentication.getAuthorities().toArray()[0].toString();
		if (!role.equals("security")) {
			map.put("permission", PermissionService.PLANNER_PERMISSION_SECURITY);
		}
		e.addRecord(map);
		return e;
	}
}
