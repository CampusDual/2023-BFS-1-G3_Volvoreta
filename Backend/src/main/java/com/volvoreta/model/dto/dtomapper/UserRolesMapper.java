package com.volvoreta.model.dto.dtomapper;

import com.volvoreta.model.User;
import com.volvoreta.model.UserRoles;
import com.volvoreta.model.dto.UserDTO;
import com.volvoreta.model.dto.UserRolesDTO;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper
public interface UserRolesMapper {

    UserRolesMapper INSTANCE = Mappers.getMapper(UserRolesMapper.class);

    UserRolesDTO toDTO(UserRoles userRole);
    List<UserRolesDTO> toDTOList(List<UserRoles> userRole);
    UserRoles toEntity(UserRolesDTO userRolesdto);
}
