package com.ec.manage.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDateTime;

@Document(collection = "issued_equipment")
public class IssuedEquipment {
    @Id
    private String id;
    private String equipmentId;
    private String equipmentName;
    private String userId;
    private String userName;
    private int quantityIssued;
    private int quantityReturned;
    private LocalDateTime issuedDate;
    private LocalDateTime returnDate;
    private String status;  // "ISSUED", "RETURNED", "PARTIALLY_RETURNED"

    public IssuedEquipment() {}

    public IssuedEquipment(String equipmentId, String equipmentName, String userId, 
                           String userName, int quantityIssued) {
        this.equipmentId = equipmentId;
        this.equipmentName = equipmentName;
        this.userId = userId;
        this.userName = userName;
        this.quantityIssued = quantityIssued;
        this.quantityReturned = 0;
        this.issuedDate = LocalDateTime.now();
        this.status = "ISSUED";
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getEquipmentId() {
        return equipmentId;
    }

    public void setEquipmentId(String equipmentId) {
        this.equipmentId = equipmentId;
    }

    public String getEquipmentName() {
        return equipmentName;
    }

    public void setEquipmentName(String equipmentName) {
        this.equipmentName = equipmentName;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public int getQuantityIssued() {
        return quantityIssued;
    }

    public void setQuantityIssued(int quantityIssued) {
        this.quantityIssued = quantityIssued;
    }

    public int getQuantityReturned() {
        return quantityReturned;
    }

    public void setQuantityReturned(int quantityReturned) {
        this.quantityReturned = quantityReturned;
    }

    public LocalDateTime getIssuedDate() {
        return issuedDate;
    }

    public void setIssuedDate(LocalDateTime issuedDate) {
        this.issuedDate = issuedDate;
    }

    public LocalDateTime getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(LocalDateTime returnDate) {
        this.returnDate = returnDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getRemainingQuantity() {
        return quantityIssued - quantityReturned;
    }
}