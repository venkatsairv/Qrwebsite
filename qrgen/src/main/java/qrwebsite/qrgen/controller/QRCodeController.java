package qrwebsite.qrgen.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;
import qrwebsite.qrgen.dto.qr.QrCodeResponse;
import qrwebsite.qrgen.dto.qr.QrCreateRequest;
import qrwebsite.qrgen.service.QRCodeService;

@RestController
@RequestMapping("/api/qr")
public class QRCodeController {

    private final QRCodeService qrCodeService;

    public QRCodeController(QRCodeService qrCodeService) {
        this.qrCodeService = qrCodeService;
    }

    @PostMapping("/create")
    public ResponseEntity<QrCodeResponse> create(@Valid @RequestBody QrCreateRequest request, Authentication auth) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(qrCodeService.createQr(auth.getName(), request));
    }

    @GetMapping("/{id}")
    public ResponseEntity<QrCodeResponse> getById(@PathVariable Long id, Authentication auth) {
        return ResponseEntity.ok(qrCodeService.getByIdForUser(id, auth.getName()));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<QrCodeResponse>> getByUser(@PathVariable Long userId, Authentication auth) {
        return ResponseEntity.ok(qrCodeService.getByUserId(userId, auth.getName()));
    }

    @GetMapping("/my")
    public ResponseEntity<List<QrCodeResponse>> getMine(Authentication auth) {
        return ResponseEntity.ok(qrCodeService.getByCurrentUser(auth.getName()));
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handleBadRequest(IllegalArgumentException ex) {
        return ResponseEntity.badRequest().body(ex.getMessage());
    }

    @ExceptionHandler(SecurityException.class)
    public ResponseEntity<String> handleForbidden(SecurityException ex) {
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(ex.getMessage());
    }
}
