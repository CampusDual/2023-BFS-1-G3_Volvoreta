package com.volvoreta.model;

import javax.persistence.*;

@Entity
@Table(name = "USER_ROLES", schema = "public")
public class UserRoles {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private int user_Id;

    @Column
    private int role_Id;

    public UserRoles() {
    }

    public UserRoles(int id, int userId, int roleId) {
        this.id = id;
        this.user_Id = userId;
        this.role_Id = roleId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserId() {
        return user_Id;
    }

    public void setUserId(int userId) {
        this.user_Id = userId;
    }

    public int getRoleId() {
        return role_Id;
    }

    public void setRoleId(int roleId) {
        this.role_Id = roleId;
    }
}
