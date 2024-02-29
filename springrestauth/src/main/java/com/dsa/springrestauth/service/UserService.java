package com.dsa.springrestauth.service;

import com.dsa.springrestauth.entity.UserEntity;
import com.dsa.springrestauth.repository.UserRepository;
import com.dsa.springrestauth.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private static final String Existing_Email = "test@test.com";

    private static final String Another_Email = "next@test.com";

    private final UserRepository userRepository;

    public Optional<UserEntity> findByEmail(String email){
        var user = userRepository.findByEmail(email);
        return user;
        //Todo: move this to a database
//        if(Existing_Email.equalsIgnoreCase(email)) {
//            UserEntity userEntity = new UserEntity();
//            userEntity.setId(1L);
//            userEntity.setEmail(email);
//            userEntity.setPassword("$2a$12$wmK0kAIMwHhlk2BzCiyPveSbeTU4tzBx2tLRVS6l/OaOyjR09dDvy"); //test
//            userEntity.setRole("ROLE_ADMIN");
//            userEntity.setExtraInfo("My nice admin");
//            return Optional.of(userEntity);
//        } else if(Another_Email.equalsIgnoreCase(email)) {
//            UserEntity userEntity = new UserEntity();
//            userEntity.setId(1L);
//            userEntity.setEmail(email);
//            userEntity.setPassword("$2a$12$wmK0kAIMwHhlk2BzCiyPveSbeTU4tzBx2tLRVS6l/OaOyjR09dDvy"); //test
//            userEntity.setRole("ROLE_USER");
//            userEntity.setExtraInfo("My nice user");
//            return Optional.of(userEntity);
//        }

//        return Optional.empty();
    }

    public Optional<UserEntity> getCurrentUser(){
        UserPrincipal userPrincipal = (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        var user = userRepository.findById(userPrincipal.getUserId());
        return  user;
    }

    public boolean createUser(String email, String password){
        var user = userRepository.findByEmail(email);
        if(!user.isEmpty()) return false;

        UserEntity userEntity = new UserEntity();
        userEntity.setEmail(email);
        userEntity.setRole("ROLE_USER");
        userEntity.setPassword(new BCryptPasswordEncoder().encode(password));

        userRepository.save(userEntity);
        return true;
    }
}
