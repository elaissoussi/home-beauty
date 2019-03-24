package com.elaissoussi.back.repositories;

import org.springframework.stereotype.Repository;
import com.elaissoussi.back.entities.User;

@Repository("userRepository")
public interface UserRepository extends UserBaseRepository<User> {
}
