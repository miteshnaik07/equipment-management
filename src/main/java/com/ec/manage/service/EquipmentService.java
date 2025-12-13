package com.ec.manage.service;

import com.ec.manage.model.Equipment;
import com.ec.manage.model.IssuedEquipment;
import com.ec.manage.repository.EquipmentRepository;
import com.ec.manage.repository.IssuedEquipmentRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class EquipmentService {

    private final EquipmentRepository equipmentRepository;
    private final IssuedEquipmentRepository issuedEquipmentRepository;

    public EquipmentService(EquipmentRepository equipmentRepository, 
                           IssuedEquipmentRepository issuedEquipmentRepository) {
        this.equipmentRepository = equipmentRepository;
        this.issuedEquipmentRepository = issuedEquipmentRepository;
    }

    // Initialize equipment data (call this once to populate database)
    public void initializeEquipment() {
        if (equipmentRepository.count() == 0) {
            equipmentRepository.save(new Equipment("Oscilloscope", 5));
            equipmentRepository.save(new Equipment("Multimeter", 10));
            equipmentRepository.save(new Equipment("Soldering Iron", 7));
            equipmentRepository.save(new Equipment("Microcontroller", 15));
            equipmentRepository.save(new Equipment("Sensors", 20));
            equipmentRepository.save(new Equipment("Line Follower Kit", 8));
            equipmentRepository.save(new Equipment("Soldering Equipment", 12));
        }
    }

    public List<Equipment> getInventory() {
        return equipmentRepository.findAll();
    }

    @Transactional
    public String issueItem(String equipmentId, int quantity, String userId, String userName) {
        Optional<Equipment> equipmentOpt = equipmentRepository.findById(equipmentId);
        
        if (equipmentOpt.isEmpty()) {
            return "Equipment not found!";
        }

        Equipment equipment = equipmentOpt.get();

        if (equipment.getAvailableQuantity() < quantity) {
            return "Insufficient quantity! Only " + equipment.getAvailableQuantity() + " available.";
        }

        // Reduce available quantity
        equipment.setAvailableQuantity(equipment.getAvailableQuantity() - quantity);
        equipmentRepository.save(equipment);

        // Create issued record
        IssuedEquipment issuedEquipment = new IssuedEquipment(
            equipmentId, 
            equipment.getName(), 
            userId, 
            userName, 
            quantity
        );
        issuedEquipmentRepository.save(issuedEquipment);

        return "Successfully issued " + quantity + " " + equipment.getName() + "(s) to " + userName;
    }

    @Transactional
    public String returnItem(String equipmentId, int quantity, String userId, String userName) {
        // Find issued equipment records for this user and equipment
        List<IssuedEquipment> issuedRecords = issuedEquipmentRepository
            .findByUserIdAndEquipmentIdAndStatus(userId, equipmentId, "ISSUED");

        if (issuedRecords.isEmpty()) {
            issuedRecords = issuedEquipmentRepository
                .findByUserIdAndEquipmentIdAndStatus(userId, equipmentId, "PARTIALLY_RETURNED");
        }

        if (issuedRecords.isEmpty()) {
            return "No issued equipment found for this user!";
        }

        // Calculate total quantity that can be returned
        int totalIssued = issuedRecords.stream()
            .mapToInt(IssuedEquipment::getRemainingQuantity)
            .sum();

        if (quantity > totalIssued) {
            return "Cannot return " + quantity + " items. You only have " + totalIssued + " item(s) issued.";
        }

        Optional<Equipment> equipmentOpt = equipmentRepository.findById(equipmentId);
        if (equipmentOpt.isEmpty()) {
            return "Equipment not found!";
        }

        Equipment equipment = equipmentOpt.get();

        // Process return
        int remainingToReturn = quantity;
        for (IssuedEquipment issued : issuedRecords) {
            if (remainingToReturn <= 0) break;

            int canReturn = Math.min(remainingToReturn, issued.getRemainingQuantity());
            issued.setQuantityReturned(issued.getQuantityReturned() + canReturn);
            
            if (issued.getQuantityReturned() == issued.getQuantityIssued()) {
                issued.setStatus("RETURNED");
                issued.setReturnDate(LocalDateTime.now());
            } else {
                issued.setStatus("PARTIALLY_RETURNED");
            }
            
            issuedEquipmentRepository.save(issued);
            remainingToReturn -= canReturn;
        }

        // Increase available quantity
        equipment.setAvailableQuantity(equipment.getAvailableQuantity() + quantity);
        equipmentRepository.save(equipment);

        return "Successfully returned " + quantity + " " + equipment.getName() + "(s) from " + userName;
    }

    public List<IssuedEquipment> getUserIssuedEquipment(String userId) {
        return issuedEquipmentRepository.findByUserId(userId);
    }

    public List<IssuedEquipment> getAllIssuedEquipment() {
        return issuedEquipmentRepository.findAll();
    }
}