package app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.entity.RoomDetails;
import app.entity.UserDetails;
import app.repository.RepositoryData;
import app.repository.RoomsRepository;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Service
public class RoomService {

	@Autowired
	RepositoryData repositoryData;
	@Autowired
	RoomsRepository roomsRepository;

	public RoomDetails saveAllData(RoomDetails data) {
		return roomsRepository.save(data);
	}

	public List<RoomDetails> getAllData() {
		List<RoomDetails> data = (roomsRepository.findAll());

		return data;
	}

	public Optional<RoomDetails> getData(String id) {
		// TODO Auto-generated method stub
		int newid = Integer.parseInt(id);
		return roomsRepository.findById(newid);
	}
	
	public UserDetails saveData(UserDetails userDetails) {
		return repositoryData.save(userDetails);
	}
}
