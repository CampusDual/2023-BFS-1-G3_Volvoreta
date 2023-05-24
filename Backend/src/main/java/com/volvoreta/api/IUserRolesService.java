package com.volvoreta.api;


import com.volvoreta.model.dto.UserDTO;
import com.volvoreta.model.dto.UserRolesDTO;

import java.util.List;

public interface IUserRolesService {

    //CRUD Operations
    UserRolesDTO queryUserRoles(UserRolesDTO userRolesDTO);
    UserRolesDTO queryUserRoles(int userId);
    List<UserRolesDTO> queryAllUserRoles();
    int insertUserRoles(UserRolesDTO userRolesDTO);
    int updateUserRoles(UserRolesDTO userRolesDTO);
    int deleteUserRoles(UserRolesDTO userRolesDTO);
}
