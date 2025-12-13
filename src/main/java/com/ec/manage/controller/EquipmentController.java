package com.ec.manage.controller;

import com.ec.manage.model.Equipment;
import com.ec.manage.model.IssuedEquipment;
import com.ec.manage.service.EquipmentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/equipment")
public class EquipmentController {

    private final EquipmentService service;

    public EquipmentController(EquipmentService service) {
        this.service = service;
    }

    @PostMapping("/initialize")
    public String initializeData() {
        service.initializeEquipment();
        return "Equipment data initialized successfully!";
    }

    @GetMapping("/inventory")
    public List<Equipment> getInventory() {
        return service.getInventory();
    }

    @PostMapping("/issue")
    public Map<String, String> issueItem(@RequestBody Map<String, Object> request) {
        String equipmentId = (String) request.get("equipmentId");
        int quantity = (Integer) request.get("quantity");
        String userId = (String) request.get("userId");
        String userName = (String) request.get("userName");
        
        String result = service.issueItem(equipmentId, quantity, userId, userName);
        return Map.of("message", result);
    }

    @PostMapping("/return")
    public Map<String, String> returnItem(@RequestBody Map<String, Object> request) {
        String equipmentId = (String) request.get("equipmentId");
        int quantity = (Integer) request.get("quantity");
        String userId = (String) request.get("userId");
        String userName = (String) request.get("userName");
        
        String result = service.returnItem(equipmentId, quantity, userId, userName);
        return Map.of("message", result);
    }

    @GetMapping("/issued/{userId}")
    public List<IssuedEquipment> getUserIssuedEquipment(@PathVariable String userId) {
        return service.getUserIssuedEquipment(userId);
    }

    @GetMapping("/issued")
    public List<IssuedEquipment> getAllIssuedEquipment() {
        return service.getAllIssuedEquipment();
    }
}