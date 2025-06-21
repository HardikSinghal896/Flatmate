//package app.service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import app.entity.UserDetails;
//import app.entity.UserPrinciple;
//import app.entity.Users;
//
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import app.repository.RepositoryData;
//import app.repository.UserRepo;
//
//@Service
//public class MyUserDetailsService implements UserDetailsService {
//
//	@Autowired
//	private UserRepo repo;
//	
//	@Override
//	public UserPrinciple loadUserByUsername(String username) throws UsernameNotFoundException {
//		// TODO Auto-generated method stub
//		Users user= repo.findByName(username);
//		System.out.println(user);
//		
//		if(user == null) {
//			System.out.println("User not found");
//			throw new UsernameNotFoundException("user not found");
//		}
//
//		return new UserPrinciple(user);
//	}
//}
