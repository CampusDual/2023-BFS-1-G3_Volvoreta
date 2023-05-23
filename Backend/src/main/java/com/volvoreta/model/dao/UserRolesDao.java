package com.volvoreta.model.dao;


import com.volvoreta.model.UserRoles;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRolesDao extends JpaRepository<UserRoles, Integer> {
}
