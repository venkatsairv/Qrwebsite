package qrwebsite.qrgen.dto;

public class QRResponse {
    private String message;

    public QRResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}