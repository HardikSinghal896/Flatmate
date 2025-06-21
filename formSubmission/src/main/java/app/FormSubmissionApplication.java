package app;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.batch.BatchProperties.Jdbc;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class FormSubmissionApplication {
	@GetMapping("/")	
	public ResponseEntity<String> get() {
		System.out.println("jhghjvhvnvbv--------");
		return new ResponseEntity<>("hi abhinay chaturvedi", HttpStatus.OK);
	}
	public static void main(String[] args) throws SQLException {
		SpringApplication.run(FormSubmissionApplication.class, args);
		System.out.println("Hello");
	}
}