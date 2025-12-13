package com.ec.manage.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "equipment")
public class Equipment {
    @Id
    private String id;
    private String name;
    private int totalQuantity;  // Fixed total quantity
    private int availableQuantity;  // Current available quantity

    public Equipment() {}

    public Equipment(String name, int totalQuantity) {
        this.name = name;
        this.totalQuantity = totalQuantity;
        this.availableQuantity = totalQuantity;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getTotalQuantity() {
        return totalQuantity;
    }

    public void setTotalQuantity(int totalQuantity) {
        this.totalQuantity = totalQuantity;
    }

    public int getAvailableQuantity() {
        return availableQuantity;
    }

    public void setAvailableQuantity(int availableQuantity) {
        this.availableQuantity = availableQuantity;
    }
}