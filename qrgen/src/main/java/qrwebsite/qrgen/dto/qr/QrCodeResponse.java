package qrwebsite.qrgen.dto.qr;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class QrCodeResponse {
    private Long id;
    private Long userId;
    private String originalUrl;
    private String shortCode;
    private String redirectUrl;
    private LocalDateTime createdAt;
}
