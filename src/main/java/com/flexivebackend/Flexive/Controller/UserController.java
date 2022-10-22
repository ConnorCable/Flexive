package com.flexivebackend.Flexive.Controller;

import com.flexivebackend.Flexive.Model.User;
import com.flexivebackend.Flexive.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public String add(@RequestBody User user){
        userService.saveUser(user);
        return "New User Added";
    }

    @GetMapping("/getAll")
    public List<User> list(){
        return userService.getAllUsers();
    }

}
