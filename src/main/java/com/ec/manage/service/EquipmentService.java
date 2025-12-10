package com.ec.manage.service;

import com.ec.manage.model.Equipment;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EquipmentService {

    private List<Equipment> inventory = new ArrayList<>();
    private List<String> issuedLog = new ArrayList<>();

    public EquipmentService() {
        inventory.add(new Equipment(1, "Oscilloscope", 5));
        inventory.add(new Equipment(2, "Multimeter", 10));
        inventory.add(new Equipment(3, "Soldering Iron", 7));
    }

    public List<Equipment> getInventory() {
        return inventory;
    }

    public String issueItem(int id, String user) {
        for (Equipment e : inventory) {
            if (e.getId() == id && e.getQuantity() > 0) {
                e.setQuantity(e.getQuantity() - 1);
                issuedLog.add(user + " issued " + e.getName());
                return "Issued successfully!";
            }
        }
        return "Item not available!";
    }

    public String returnItem(int id, String user) {
        for (Equipment e : inventory) {
            if (e.getId() == id) {
                e.setQuantity(e.getQuantity() + 1);
                issuedLog.add(user + " returned " + e.getName());
                return "Returned successfully!";
            }
        }
        return "Invalid item!";
    }
}
