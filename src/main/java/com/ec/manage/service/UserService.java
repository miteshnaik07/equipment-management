package com.ec.manage.service;

import com.ec.manage.model.User;
import com.ec.manage.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void initializeUsers() {
        if (userRepository.count() == 0) {
            // Create admin account
            userRepository.save(new User("ADM001", "Admin User", "admin123", "ADMIN", "admin@equipment.com", "Administration"));
            
            // Create sample student accounts
            userRepository.save(new User("STU001", "John Doe", "student123", "STUDENT", "john@student.com", "Electronics"));
            userRepository.save(new User("STU002", "Jane Smith", "student123", "STUDENT", "jane@student.com", "Computer Science"));
            userRepository.save(new User("STU003", "Mike Johnson", "student123", "STUDENT", "mike@student.com", "Mechanical"));
        }
    }

    public Map<String, Object> login(String userId, String password) {
        Map<String, Object> response = new HashMap<>();
        
        Optional<User> userOpt = userRepository.findByUserIdAndPassword(userId, password);
        
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            response.put("success", true);
            response.put("message", "Login successful!");
            response.put("user", user);
        } else {
            response.put("success", false);
            response.put("message", "Invalid user ID or password!");
            response.put("user", null);
        }
        
        return response;
    }

    public Map<String, String> register(User user) {
        Map<String, String> response = new HashMap<>();
        
        Optional<User> existingUser = userRepository.findByUserId(user.getUserId());
        
        if (existingUser.isPresent()) {
            response.put("success", "false");
            response.put("message", "User ID already exists!");
        } else {
            user.setRole("STUDENT"); // Default role
            userRepository.save(user);
            response.put("success", "true");
            response.put("message", "Registration successful!");
        }
        
        return response;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public List<User> getStudentUsers() {
        return userRepository.findByRole("STUDENT");
    }

    public User getUserByUserId(String userId) {
        return userRepository.findByUserId(userId).orElse(null);
    }
}