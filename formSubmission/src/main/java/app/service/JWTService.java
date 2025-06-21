//package app.service;
//
//import java.security.Key;
//import java.util.Date;
//import java.util.HashMap;
//import java.util.Map;
//
//import org.springframework.stereotype.Service;
//
//import io.jsonwebtoken.JwtBuilder;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.io.Decoders;
//import io.jsonwebtoken.security.Keys;
//
//
//@Service
//public class JWTService{
//
////	private String secretKey = "hardiksinghal";
////	
////	
////	
////	public String generateToken(String username) {
////		Map<String, Object> claims = new HashMap<String, Object>();
////		return Jwts.builder().claims().add(claims).subject(username)
////				.issuedAt(new Date(System.currentTimeMillis()))
////				.expiration(new Date(System.currentTimeMillis()*60*60*30))
////				.and()
////				.signWith(getKey())
////				.compact();
////	}
////
////	private Key getKey() {
////		// TODO Auto-generated method stub
////		byte[] keyBytes = Decoders.BASE64.decode(secretKey);
////		return Keys.hmacShaKeyFor(keyBytes);
////	}
//}