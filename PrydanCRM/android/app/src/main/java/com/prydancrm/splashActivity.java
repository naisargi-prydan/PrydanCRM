package com.prydancrm;
import android.content.Internet;
import android.os.bundle;
import androidx.appcompt.app.AppCompatActivity;

public class splashActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        Intent intent = new Intent(this,MainActivity.class);
        startActivity(intent);
        finish();
    }
}