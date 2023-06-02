package com.volvoreta.Backend.model.core.service;


import java.sql.Timestamp;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import com.volvoreta.Backend.api.core.service.IUserService;
import com.volvoreta.Backend.model.core.dao.UserDao;
import com.ontimize.jee.common.dto.EntityResult;
import com.ontimize.jee.server.dao.DefaultOntimizeDaoHelper;


@Lazy
@Service("UserService")
public class UserService implements IUserService {

	@Autowired
	private UserDao userDao;

	@Autowired
	private DefaultOntimizeDaoHelper daoHelper;

	public void loginQuery(Map<?, ?> key, List<?> attr) {
	}

	//Sample to permission
	//@Secured({ PermissionsProviderSecured.SECURED })
	public EntityResult userQuery(Map<?, ?> keyMap, List<?> attrList) {
		return this.daoHelper.query(userDao, keyMap, attrList);
	}

	public EntityResult userInsert(Map<?, ?> attrMap) {
		return this.daoHelper.insert(userDao, attrMap);
	}

	public EntityResult userUpdate(Map<?, ?> attrMap, Map<?, ?> keyMap) {
		return this.daoHelper.update(userDao, attrMap, keyMap);
	}

	public EntityResult userDelete(Map<?, ?> keyMap) {
		return this.daoHelper.delete(this.userDao, keyMap);
	}

	@Override
	public EntityResult newRandomPass(String username) {
		String pass = genPass();
		Map<String, Object> attrMap = new HashMap<>();
		attrMap.put("PASSWORD",pass);
		Map<String, Object> keyMap = new HashMap<>();
		keyMap.put("USER_",username);
		EntityResult e = this.daoHelper.update(this.userDao,attrMap ,keyMap);
		return e;
	}

	private String genPass(){
		String password = new Random().ints(16, 33, 122).collect(StringBuilder::new,
						StringBuilder::appendCodePoint, StringBuilder::append)
				.toString();
		return password;
	}

}
