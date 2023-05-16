package com.volvoreta.model.dao;


import com.volvoreta.model.Contact;
import com.volvoreta.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserDao extends JpaRepository<User, Integer> {
}
