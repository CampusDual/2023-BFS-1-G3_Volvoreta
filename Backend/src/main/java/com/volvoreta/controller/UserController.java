package com.volvoreta.controller;


import com.volvoreta.api.IUserService;
import com.volvoreta.model.dto.UserDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController()
@RequestMapping("/users")
public class UserController {

    @Autowired
    private IUserService userService;

    @GetMapping(value = "/testController")
    public String testUsersController() {
        return "Users controller works!";
    }

    @PostMapping(value = "/get")
    public UserDTO queryUser(@RequestBody UserDTO userDTO) {
        return userService.queryUser(userDTO);
    }

    @GetMapping(value = "/getAll")
    public List<UserDTO> queryAllUser() {
        return userService.queryAllUser();
    }

    @PostMapping(value = "/login")
    public UserDTO queryUser(@RequestBody String nif, @RequestBody String password) {
        UserDTO userDTO = userService.queryUser(nif);
        if(userDTO != null){
            if(userService.verifyPassword(userDTO, password)){
                return userService.queryUser(nif);
            }
        }
        return null;
    }
    @PostMapping(value = "/add")
    public int addUser(@RequestBody UserDTO userDTO) {
        return userService.insertUser(userDTO);
    }

    @PutMapping(value = "/update")
    public int updateUser(@RequestBody UserDTO userDTO) {
        return userService.updateUser(userDTO);
    }

    @DeleteMapping(value = "/delete")
    public int deleteUser(@RequestBody UserDTO userDTO) {
        return userService.deleteUser(userDTO);
    }
}
