package com.volvoreta.service;

import com.volvoreta.api.IUserService;
import com.volvoreta.model.User;
import com.volvoreta.model.dao.UserDao;
import com.volvoreta.model.dto.UserDTO;
import com.volvoreta.model.dto.dtomapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("UserService")
@Lazy
public class UserService implements IUserService {

    @Autowired
    private UserDao userDao;

    @Override
    public UserDTO queryUser(UserDTO userDTO) {
        User user = UserMapper.INSTANCE.toEntity(userDTO);
        return UserMapper.INSTANCE.toDTO(userDao.getReferenceById(user.getId()));
    }
    @Override
    public UserDTO queryUser(String nif) {
        List<UserDTO> userDTOList = queryAllUser();
        for (UserDTO userDTO : userDTOList){
            if(nif.equals(userDTO.getNif())){
                User user = UserMapper.INSTANCE.toEntity(userDTO);
                return UserMapper.INSTANCE.toDTO(userDao.getReferenceById(user.getId()));
            }
        }
        return null;
    }

    @Override
    public boolean verifyPassword(UserDTO userDTO, String password) {
        if(userDTO.getPassword().equals(password)){
            return true;
        }
        return false;
    }

    @Override
    public List<UserDTO> queryAllUser() {
        return UserMapper.INSTANCE.toDTOList(userDao.findAll());
    }

    @Override
    public int insertUser(UserDTO userDTO) {
        User user = UserMapper.INSTANCE.toEntity(userDTO);
        userDao.saveAndFlush(user);
        return user.getId();
    }

    @Override
    public int updateUser(UserDTO userDTO) {
        // The save() method of JPARepository performs both insertion and update. Insert if no primary key is provided, update otherwise. For this reason, the method #insertUser() is called
        return insertUser(userDTO);
    }

    @Override
    public int deleteUser(UserDTO userDTO) {
        int id = userDTO.getId();
        User user = UserMapper.INSTANCE.toEntity(userDTO);
        userDao.delete(user);
        return id;
    }
}
