package qrwebsite.qrgen.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import qrwebsite.qrgen.entity.QRCode;

public interface QRCodeRepository extends JpaRepository<QRCode, Long> {
    boolean existsByShortCode(String shortCode);

    Optional<QRCode> findByShortCode(String shortCode);

    List<QRCode> findByUserIdOrderByCreatedAtDesc(Long userId);
}
