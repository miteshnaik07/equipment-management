package com.ec.manage.controller;

import com.ec.manage.model.Equipment;
import com.ec.manage.service.EquipmentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/equipment")
public class EquipmentController {

    private final EquipmentService service;

    public EquipmentController(EquipmentService service) {
        this.service = service;
    }

    @GetMapping("/inventory")
    public List<Equipment> getInventory() {
        return service.getInventory();
    }

    @PostMapping("/issue")
    public String issueItem(@RequestParam int id, @RequestParam String user) {
        return service.issueItem(id, user);
    }

    @PostMapping("/return")
    public String returnItem(@RequestParam int id, @RequestParam String user) {
        return service.returnItem(id, user);
    }
}
