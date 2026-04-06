package qrwebsite.qrgen.service;

import java.security.SecureRandom;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import qrwebsite.qrgen.dto.qr.QrCodeResponse;
import qrwebsite.qrgen.dto.qr.QrCreateRequest;
import qrwebsite.qrgen.entity.QRCode;
import qrwebsite.qrgen.entity.User;
import qrwebsite.qrgen.repository.QRCodeRepository;
import qrwebsite.qrgen.repository.UserRepository;

@Service
public class QRCodeService {

    private static final String ALPHANUM = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    private static final int SHORT_CODE_LENGTH = 8;
    private static final int MAX_GENERATION_ATTEMPTS = 20;

    private final QRCodeRepository qrCodeRepository;
    private final UserRepository userRepository;
    private final SecureRandom secureRandom = new SecureRandom();

    @Value("${app.base-url:http://localhost:8080}")
    private String baseUrl;

    public QRCodeService(QRCodeRepository qrCodeRepository, UserRepository userRepository) {
        this.qrCodeRepository = qrCodeRepository;
        this.userRepository = userRepository;
    }

    public QrCodeResponse createQr(String userEmail, QrCreateRequest request) {
        User user = getUserByEmail(userEmail);

        QRCode qrCode = new QRCode();
        qrCode.setUser(user);
        qrCode.setOriginalUrl(request.getOriginalUrl().trim());
        qrCode.setShortCode(generateUniqueShortCode());

        QRCode saved = qrCodeRepository.save(qrCode);
        return toResponse(saved);
    }

    public QrCodeResponse getByIdForUser(Long qrId, String userEmail) {
        User user = getUserByEmail(userEmail);
        QRCode qrCode = qrCodeRepository.findById(qrId)
                .orElseThrow(() -> new IllegalArgumentException("QR code not found"));

        if (!qrCode.getUser().getId().equals(user.getId())) {
            throw new SecurityException("You are not allowed to access this QR code");
        }

        return toResponse(qrCode);
    }

    public List<QrCodeResponse> getByUserId(Long requestedUserId, String userEmail) {
        User user = getUserByEmail(userEmail);

        if (!requestedUserId.equals(user.getId())) {
            throw new SecurityException("You can only access your own QR codes");
        }

        return qrCodeRepository.findByUserIdOrderByCreatedAtDesc(requestedUserId)
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public List<QrCodeResponse> getByCurrentUser(String userEmail) {
        User user = getUserByEmail(userEmail);

        return qrCodeRepository.findByUserIdOrderByCreatedAtDesc(user.getId())
                .stream()
                .map(this::toResponse)
                .toList();
    }

    private User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));
    }

    private String generateUniqueShortCode() {
        for (int attempt = 0; attempt < MAX_GENERATION_ATTEMPTS; attempt++) {
            String code = randomCode();
            if (!qrCodeRepository.existsByShortCode(code)) {
                return code;
            }
        }
        throw new IllegalStateException("Unable to generate unique short code");
    }

    private String randomCode() {
        StringBuilder code = new StringBuilder(SHORT_CODE_LENGTH);
        for (int i = 0; i < SHORT_CODE_LENGTH; i++) {
            code.append(ALPHANUM.charAt(secureRandom.nextInt(ALPHANUM.length())));
        }
        return code.toString();
    }

    private QrCodeResponse toResponse(QRCode qrCode) {
        return new QrCodeResponse(
                qrCode.getId(),
                qrCode.getUser().getId(),
                qrCode.getOriginalUrl(),
                qrCode.getShortCode(),
                baseUrl + "/r/" + qrCode.getShortCode(),
                qrCode.getCreatedAt());
    }
}
