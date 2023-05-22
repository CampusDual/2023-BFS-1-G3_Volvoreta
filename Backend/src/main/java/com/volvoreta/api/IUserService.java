package com.volvoreta.api;


import com.volvoreta.model.dto.UserDTO;

import java.util.List;

public interface IUserService {

    //CRUD Operations
    UserDTO queryUser(UserDTO userDTO);
    UserDTO queryUser(String nif);
    List<UserDTO> queryAllUser();
    boolean verifyPassword(UserDTO userDTO, String password);
    int insertUser(UserDTO userDTO);
    int updateUser(UserDTO userDTO);
    int deleteUser(UserDTO userDTO);
}
