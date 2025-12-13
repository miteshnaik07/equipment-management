package com.ec.manage.repository;

import com.ec.manage.model.IssuedEquipment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface IssuedEquipmentRepository extends MongoRepository<IssuedEquipment, String> {
    List<IssuedEquipment> findByUserIdAndEquipmentIdAndStatus(String userId, String equipmentId, String status);
    List<IssuedEquipment> findByUserId(String userId);
    List<IssuedEquipment> findByEquipmentId(String equipmentId);
    List<IssuedEquipment> findByStatus(String status);
}