package qrwebsite.qrgen.dto.qr;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QrCreateRequest {

    @NotBlank
    @Size(max = 2048)
    private String originalUrl;
}
