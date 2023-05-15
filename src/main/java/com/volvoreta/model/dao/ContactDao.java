package com.volvoreta.model.dao;


import com.volvoreta.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactDao extends JpaRepository<Contact, Integer> {
}
