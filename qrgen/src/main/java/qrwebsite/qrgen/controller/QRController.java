package qrwebsite.qrgen.controller;

import qrwebsite.qrgen.dto.QRRequest;
import qrwebsite.qrgen.service.QRService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/qr")
public class QRController {

    private final QRService qrService;

    public QRController(QRService qrService) {
        this.qrService = qrService;
    }

    @PostMapping("/generate")
    public ResponseEntity<byte[]> generateQR(@RequestBody QRRequest request) {

        byte[] image = qrService.generateQR(
                request.getText(),
                request.getWidth(),
                request.getHeight()
        );

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=qr.png")
                .contentType(MediaType.IMAGE_PNG)
                .body(image);
    }
}