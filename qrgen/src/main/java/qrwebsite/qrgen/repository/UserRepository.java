package qrwebsite.qrgen.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import qrwebsite.qrgen.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    boolean existsByEmail(String email);
}
