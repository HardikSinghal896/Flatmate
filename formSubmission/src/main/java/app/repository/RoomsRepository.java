package app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import app.entity.RoomDetails;

@Repository
public interface RoomsRepository extends JpaRepository<RoomDetails, Integer>{
//	List<RoomDetails> findAllData();
}
