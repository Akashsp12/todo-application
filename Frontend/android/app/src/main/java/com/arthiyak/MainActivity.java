package com.arthiyak;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    public void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        this.registerPlugin(GoogleAuth.class);
      }
}
