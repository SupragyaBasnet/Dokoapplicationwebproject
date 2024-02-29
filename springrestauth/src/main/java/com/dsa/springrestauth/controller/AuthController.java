package com.dsa.springrestauth.controller;

import com.dsa.springrestauth.model.LoginRequest;
import com.dsa.springrestauth.model.LoginResponse;
import com.dsa.springrestauth.model.RegisterRequest;
import com.dsa.springrestauth.security.JwtIssuer;
import com.dsa.springrestauth.security.UserPrincipal;
import com.dsa.springrestauth.security.UserPrincipalAuthenticationToken;
import com.dsa.springrestauth.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin
@RestController
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;


    @PostMapping("/auth/login")
    public LoginResponse login(@RequestBody @Validated LoginRequest request){
        return authService.attemptLogin(request.getEmail(), request.getPassword());
    }

    @PostMapping("/auth/register")
    public LoginResponse register(@RequestBody @Validated RegisterRequest request){
        return authService.attemptRegistration(request.getEmail(), request.getPassword());
    }
}
