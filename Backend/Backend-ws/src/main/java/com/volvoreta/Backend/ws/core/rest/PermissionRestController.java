package com.volvoreta.Backend.ws.core.rest;

import com.ontimize.jee.server.rest.ORestController;
import com.volvoreta.Backend.api.core.service.IPermissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/permissions")
public class PermissionRestController extends ORestController<IPermissionService> {

	@Autowired
	private IPermissionService permissionService;

	@Override
	public IPermissionService getService() {
		return this.permissionService;
	}
}