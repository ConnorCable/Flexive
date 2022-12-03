package com.flexivebackend.Flexive.Controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.flexivebackend.Flexive.Model.User;
import com.flexivebackend.Flexive.Service.UserService;
import com.flexivebackend.Flexive.Service.UserServiceImpl;
import com.github.fge.jsonpatch.JsonPatch;
import com.github.fge.jsonpatch.JsonPatchException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;
    private UserServiceImpl userServiceImpl;

    @PostMapping("/register")
    public String add(@RequestBody User user){
        userService.saveUser(user);
        return "New User Added";
    }

    @GetMapping("/getAll")
    public List<User> list(){
        return userService.getAllUsers();
    }

    @GetMapping("/getWallet/{id}")
    public ResponseEntity<?> getWallet(@PathVariable int id){
        User user = userServiceImpl.getUser(id);
        int wallet = user.getWallet();
        return ResponseEntity.ok(wallet);
    }

    @PatchMapping(path = "/users/account/{id}", consumes = "application/json-patch+json")
    public ResponseEntity<User> addFunds(@PathVariable int id, @RequestBody JsonPatch patch){
        try{
            User user = userServiceImpl.getUser(id);
            User patchedUser = userServiceImpl.applyPatchToUser(patch, user);
            userServiceImpl.saveUser(patchedUser);
            return ResponseEntity.ok(patchedUser);
        }
        catch(JsonPatchException | JsonProcessingException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
        catch(UsernameNotFoundException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }






}
