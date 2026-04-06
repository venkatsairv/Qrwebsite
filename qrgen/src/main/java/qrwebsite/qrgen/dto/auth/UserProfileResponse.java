package qrwebsite.qrgen.dto.auth;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UserProfileResponse {
    private final Long id;
    private final String email;
    private final LocalDateTime createdAt;
}
