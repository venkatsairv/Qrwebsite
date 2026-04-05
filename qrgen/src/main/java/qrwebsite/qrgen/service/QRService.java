package qrwebsite.qrgen.service;

import qrwebsite.qrgen.util.QRGeneratorUtil;
import org.springframework.stereotype.Service;

@Service
public class QRService {

    public byte[] generateQR(String text, int width, int height) {
        return QRGeneratorUtil.generateQRCode(text, width, height);
    }
}