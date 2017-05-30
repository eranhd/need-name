package com.example.eranhadad.mysalary;

import android.content.ContentValues;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.provider.MediaStore;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Display;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.GeolocationPermissions;
import android.webkit.PermissionRequest;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import java.io.File;

public class MainActivity extends AppCompatActivity {


    private final static int CAPTURE_RESULTCODE = 1;
    private ValueCallback<Uri> mUploadMessage;
    private String filePath;
    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);

        this.requestWindowFeature(Window.FEATURE_NO_TITLE);
        this.getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
        setContentView(R.layout.activity_main);
        WebView view = (WebView) findViewById(R.id.webView);

        view.zoomOut();


        view.loadUrl("https://antidrugsjerusalem.firebaseapp.com");
        view.getSettings().setJavaScriptEnabled(true);
        view.getSettings().setBuiltInZoomControls(false);
        view.getSettings().setDomStorageEnabled(true);
        view.getSettings().setSupportZoom(false);
        view.setPadding(0, 0, 0, 0);
        view.getSettings().setJavaScriptCanOpenWindowsAutomatically(true);
        view.getSettings().setGeolocationEnabled(true);
        view.getSettings().setAllowFileAccessFromFileURLs(true);
//        view.setInitialScale(350);//getScale());
        view.setScrollBarStyle(WebView.SCROLLBARS_OUTSIDE_OVERLAY);
//        view.setScrollbarFadingEnabled(false);
        view.getSettings().setAllowFileAccess(true);
        view.setWebChromeClient(new WebChromeClient() {

            public void onGeolocationPermissionsShowPrompt(String origin, GeolocationPermissions.Callback callback) {
                callback.invoke(origin, true, false);
            }

            @SuppressWarnings("unused")
            public void openFileChooser(ValueCallback<Uri> uploadMsg, String acceptType, String capture) {
                openFileChooser(uploadMsg);
            }

            @SuppressWarnings("unused")
            public void openFileChooser(ValueCallback<Uri> uploadMsg, String acceptType) {
                openFileChooser(uploadMsg);
            }

            public void openFileChooser(ValueCallback<Uri> uploadMsg) {
//                this.mUploadMessage = uploadMsg;
//
//                File imageStorageDir = new File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES), "appName");
//                this.filePath = imageStorageDir + File.separator + "IMG_" + String.valueOf(System.currentTimeMillis()) + ".jpg";
                File file = new File("");

                Intent captureIntent = new Intent(android.provider.MediaStore.ACTION_IMAGE_CAPTURE);
                captureIntent.putExtra(MediaStore.EXTRA_OUTPUT, Uri.fromFile(file));
                MainActivity.this.startActivityForResult(captureIntent,  CAPTURE_RESULTCODE);
            }

        });
//        view.setWebViewClient(new WebViewClient(){
//             public void onGeolocationPermissionsShowPrompt(String origin, GeolocationPermissions.Callback callback) {
//                callback.invoke(origin, true, false);
//            }
//        });


    }

    private int getScale(){
//        Display display = ((WindowManager) getSystemService(Context.WINDOW_SERVICE)).getDefaultDisplay();
//        int width = display.getWidth();
//        Double val = new Double(width)/new Double(PIC_WIDTH);
//        val = val * 100d;
//        return val.intValue();
        return 0;
    }

    @Override
    public void onBackPressed() {
        return;
    }
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent intent) {
        if (requestCode == CAPTURE_RESULTCODE) {
            if (null == this.mUploadMessage || (resultCode != RESULT_OK && !new File(filePath).exists())) {
                this.mUploadMessage.onReceiveValue(null);
            } else {
                ContentValues values = new ContentValues();
                values.put(MediaStore.Images.Media.DATA, this.filePath);
                this.mUploadMessage.onReceiveValue(this.getContentResolver().insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, values));
            }
            this.mUploadMessage = null;
        }
    }
}
