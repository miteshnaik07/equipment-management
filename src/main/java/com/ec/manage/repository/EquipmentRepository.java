package com.ec.manage.repository;

import com.ec.manage.model.Equipment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface EquipmentRepository extends MongoRepository<Equipment, String> {
    Optional<Equipment> findByName(String name);
}