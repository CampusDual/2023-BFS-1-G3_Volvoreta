package com.volvoreta.model.dto.dtomapper;

import com.volvoreta.model.User;
import com.volvoreta.model.dto.UserDTO;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-05-16T10:00:20+0200",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.18 (Eclipse Adoptium)"
)
public class UserMapperImpl implements UserMapper {

    @Override
    public UserDTO toDTO(User user) {
        if ( user == null ) {
            return null;
        }

        UserDTO userDTO = new UserDTO();

        userDTO.setId( user.getId() );
        userDTO.setNif( user.getNif() );
        userDTO.setName( user.getName() );
        userDTO.setSurname1( user.getSurname1() );
        userDTO.setSurname2( user.getSurname2() );
        userDTO.setLogin( user.getLogin() );
        userDTO.setPassword( user.getPassword() );

        return userDTO;
    }

    @Override
    public List<UserDTO> toDTOList(List<User> users) {
        if ( users == null ) {
            return null;
        }

        List<UserDTO> list = new ArrayList<UserDTO>( users.size() );
        for ( User user : users ) {
            list.add( toDTO( user ) );
        }

        return list;
    }

    @Override
    public User toEntity(UserDTO userdto) {
        if ( userdto == null ) {
            return null;
        }

        int id = 0;
        String nif = null;
        String name = null;
        String surname1 = null;
        String surname2 = null;
        String login = null;
        String password = null;

        id = userdto.getId();
        nif = userdto.getNif();
        name = userdto.getName();
        surname1 = userdto.getSurname1();
        surname2 = userdto.getSurname2();
        login = userdto.getLogin();
        password = userdto.getPassword();

        User user = new User( id, nif, name, surname1, surname2, login, password );

        return user;
    }
}
