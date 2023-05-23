package com.volvoreta.service;

import com.volvoreta.api.IUserRolesService;
import com.volvoreta.model.User;
import com.volvoreta.model.UserRoles;
import com.volvoreta.model.dao.UserRolesDao;
import com.volvoreta.model.dto.UserDTO;
import com.volvoreta.model.dto.UserRolesDTO;
import com.volvoreta.model.dto.dtomapper.UserMapper;
import com.volvoreta.model.dto.dtomapper.UserRolesMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("UserRolesService")
@Lazy
public class UserRolesService implements IUserRolesService {

    @Autowired
    private UserRolesDao userRolesDao;

    @Override
    public UserRolesDTO queryUserRoles(UserRolesDTO userRolesDTO) {
        UserRoles userRoles = UserRolesMapper.INSTANCE.toEntity(userRolesDTO);
        return UserRolesMapper.INSTANCE.toDTO(userRolesDao.getReferenceById(userRoles.getId()));
    }
    @Override
    public UserRolesDTO queryUserRoles(int userId) {
        List<UserRolesDTO> userRolesDTOList = queryAllUserRoles();
        for (UserRolesDTO userRolesDTO : userRolesDTOList){
            if(userId == userRolesDTO.getUserId()){
                UserRoles userRoles = UserRolesMapper.INSTANCE.toEntity(userRolesDTO);
                return UserRolesMapper.INSTANCE.toDTO(userRolesDao.getReferenceById(userRoles.getId()));
            }
        }
        return null;
    }
    @Override
    public List<UserRolesDTO> queryAllUserRoles() {
        return UserRolesMapper.INSTANCE.toDTOList(userRolesDao.findAll());
    }

    @Override
    public int insertUserRoles(UserRolesDTO userRolesDTO) {
        UserRoles userRoles = UserRolesMapper.INSTANCE.toEntity(userRolesDTO);
        userRolesDao.saveAndFlush(userRoles);
        return userRoles.getId();
    }

    @Override
    public int updateUserRoles(UserRolesDTO userRolesDTO) {
        // The save() method of JPARepository performs both insertion and update. Insert if no primary key is provided, update otherwise. For this reason, the method #insertUserRoles() is called
        return insertUserRoles(userRolesDTO);
    }

    @Override
    public int deleteUserRoles(UserRolesDTO userRolesDTO) {
        int id = userRolesDTO.getId();
        UserRoles userRoles = UserRolesMapper.INSTANCE.toEntity(userRolesDTO);
        userRolesDao.delete(userRoles);
        return id;
    }
}
