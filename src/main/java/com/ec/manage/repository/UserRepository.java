package com.ec.manage.repository;

import com.ec.manage.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByUserId(String userId);
    Optional<User> findByUserIdAndPassword(String userId, String password);
    List<User> findByRole(String role);
}