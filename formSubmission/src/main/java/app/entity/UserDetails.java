package app.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "product_table")
public class UserDetails {

	public UserDetails(String email2, int number2, String passw, String URL) {
		// TODO Auto-generated constructor stub
		email = email2;
		number = number2;
		password = passw;
		fileName = URL;
	}
	public UserDetails() {
		
	}

	@Id
	@GeneratedValue
	public int id;
	public String email;
	public int number;
	public String password;
	public String fileName;

}
