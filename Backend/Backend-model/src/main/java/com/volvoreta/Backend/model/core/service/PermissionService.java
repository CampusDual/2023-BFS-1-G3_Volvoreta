package com.volvoreta.Backend.model.core.service;


import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.common.dto.EntityResultMapImpl;
import com.ontimize.jee.common.exceptions.OntimizeJEERuntimeException;
import com.volvoreta.Backend.api.core.service.IPermissionService;
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

	public static final String PLANNER_PERMISSION_USER =
			"{\"routes\": [{ \"permissionId\": \"users-permissions\", \"enabled\": false }," +
					"{ \"permissionId\": \"home-permissions\", \"enabled\": true }," +
					"{ \"permissionId\": \"products-permissions\", \"enabled\": false }]," +
			"\"menu\": [{ \"attr\": \"users\", \"visible\": false, \"enabled\": false }, " +
					"{ \"attr\": \"products\", \"visible\": false, \"enabled\": false }]}";
	public static final String PLANNER_PERMISSION_SECURITY =
			"{\"routes\": [{ \"permissionId\": \"users-permissions\", \"enabled\": true }," +
					"{ \"permissionId\": \"products-permissions\", \"enabled\": false }]," +
					"\"menu\": [{ \"attr\": \"users\", \"visible\": true, \"enabled\": true }, " +
					"{ \"attr\": \"products\", \"visible\": false, \"enabled\": false }]}";
	public static final String PLANNER_PERMISSION_MAINTENANCE =
			"{\"routes\": [{ \"permissionId\": \"users-permissions\", \"enabled\": false }," +
					"{ \"permissionId\": \"products-permissions\", \"enabled\": true }]," +
					"\"menu\": [{ \"attr\": \"users\", \"visible\": false, \"enabled\": false }, " +
					"{ \"attr\": \"products\", \"visible\": true, \"enabled\": true }]}";
	public static final String PLANNER_PERMISSION_DEFAULT =
			"{\"routes\": [{ \"permissionId\": \"users-permissions\", \"enabled\": false }," +
					"{ \"permissionId\": \"home-permissions\", \"enabled\": false }," +
					"{ \"permissionId\": \"products-permissions\", \"enabled\": false }]," +
					"\"menu\": [{ \"attr\": \"users\", \"visible\": false, \"enabled\": false }, " +
					"{ \"attr\": \"products\", \"visible\": false, \"enabled\": false }]}";

	@Override
	public EntityResult permissionQuery(Map<String, Object> keyMap, List<String> attrList)
			throws OntimizeJEERuntimeException {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		EntityResult e = new EntityResultMapImpl();
		Map<String, String> map = new HashMap<>();
		String role = null;
		if (authentication.getAuthorities().toArray().length > 0){
			role = authentication.getAuthorities().toArray()[0].toString();
		}

		if("security".equals(role)){
			map.put("permission", PermissionService.PLANNER_PERMISSION_SECURITY);
		} else if("maintenance".equals(role)){
			map.put("permission", PermissionService.PLANNER_PERMISSION_MAINTENANCE);
		} else if("user".equals(role)){
			map.put("permission", PermissionService.PLANNER_PERMISSION_USER);
		} else {
			map.put("permission", PermissionService.PLANNER_PERMISSION_DEFAULT);
		}

//		if (!role.equals("security")) {
//			map.put("permission", PermissionService.PLANNER_PERMISSION_SECURITY);
//		}
//		else if (!role.equals("maintenance")){
//			map.put("permission", PermissionService.PLANNER_PERMISSION_MAINTENANCE);
//		}
		e.addRecord(map);
		return e;
	}
}
