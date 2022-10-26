package com.open_lookout.qrcodeframeprocessor;


import androidx.camera.core.ImageProxy;
import com.mrousavy.camera.frameprocessor.FrameProcessorPlugin;

public class QRCodeFrameProcessorPlugin extends FrameProcessorPlugin {

    @Override
    public Object callback(ImageProxy image, Object[] params) {
        // code goes here
//        return null;
        return "cat";
    }

    QRCodeFrameProcessorPlugin() {
        super("scanQRCodes");
    }
}