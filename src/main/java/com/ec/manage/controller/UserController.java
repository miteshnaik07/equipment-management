package com.ec.manage.controller;

import com.ec.manage.model.User;
import com.ec.manage.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/initialize")
    public String initializeUsers() {
        userService.initializeUsers();
        return "Users initialized successfully!";
    }

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> credentials) {
        String userId = credentials.get("userId");
        String password = credentials.get("password");
        return userService.login(userId, password);
    }

    @PostMapping("/register")
    public Map<String, String> register(@RequestBody User user) {
        return userService.register(user);
    }

    @GetMapping("/all")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/students")
    public List<User> getStudents() {
        return userService.getStudentUsers();
    }

    @GetMapping("/{userId}")
    public User getUserById(@PathVariable String userId) {
        return userService.getUserByUserId(userId);
    }
}