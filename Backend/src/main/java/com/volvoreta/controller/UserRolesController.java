package com.volvoreta.controller;


import com.volvoreta.api.IUserRolesService;
import com.volvoreta.model.dto.UserRolesDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController()
@RequestMapping("/roles")
public class UserRolesController {

    @Autowired
    private IUserRolesService userRolesService;

    @GetMapping(value = "/testController")
    public String testUsersRolesController() {
        return "UsersRoles controller works!";
    }

    @PostMapping(value = "/get")
    public UserRolesDTO queryUserRoles(@RequestBody UserRolesDTO userRolesDTO) {
        return userRolesService.queryUserRoles(userRolesDTO);
    }
    @PostMapping(value = "/getuserid")
    public UserRolesDTO queryUserRoles(@RequestBody int idUser) {
        return userRolesService.queryUserRoles(idUser);
    }

    @GetMapping(value = "/getAll")
    public List<UserRolesDTO> queryAllUserRoles() {
        return userRolesService.queryAllUserRoles();
    }

    @PostMapping(value = "/add")
    public int addUserRoles(@RequestBody UserRolesDTO userRolesDTO) {
        return userRolesService.insertUserRoles(userRolesDTO);
    }

    @PutMapping(value = "/update")
    public int updateUserRoles(@RequestBody UserRolesDTO userRolesDTO) {
        return userRolesService.updateUserRoles(userRolesDTO);
    }

    @DeleteMapping(value = "/delete")
    public int deleteUserRoles(@RequestBody UserRolesDTO userRolesDTO) {
        return userRolesService.deleteUserRoles(userRolesDTO);
    }
}
