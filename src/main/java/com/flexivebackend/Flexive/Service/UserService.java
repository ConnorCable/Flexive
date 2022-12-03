package com.flexivebackend.Flexive.Service;

import com.flexivebackend.Flexive.Model.User;

import java.util.List;

public interface UserService {

    public User saveUser(User user);
    public List<User> getAllUsers();

    public User getUser(int id);
}
