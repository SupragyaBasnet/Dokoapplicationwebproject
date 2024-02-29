//package com.dsa.springrestauth;
//
//import com.dsa.springrestauth.controller.AuthController;
//import com.dsa.springrestauth.model.LoginRequest;
//import com.dsa.springrestauth.model.LoginResponse;
//import com.dsa.springrestauth.model.RegisterRequest;
//import com.dsa.springrestauth.service.AuthService;
//import org.junit.jupiter.api.BeforeEach;
//import org.junit.jupiter.api.Test;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.MockitoAnnotations;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//
//import static org.mockito.ArgumentMatchers.any;
//import static org.mockito.Mockito.when;
//import static org.junit.jupiter.api.Assertions.assertEquals;
//
//public class AuthControllerTest {
//
//    @Mock
//    private AuthService authService;
//
//    @InjectMocks
//    private AuthController authController;
//
//    @BeforeEach
//    public void setUp() {
//        MockitoAnnotations.initMocks(this);
//    }
//
//    @Test
//    public void testLogin() {
//        LoginRequest loginRequest = new LoginRequest("test@example.com", "password");
//        LoginResponse expectedResponse = new LoginResponse("token");
//
//        when(authService.attemptLogin(any(String.class), any(String.class))).thenReturn(expectedResponse);
//
//        ResponseEntity<LoginResponse> responseEntity = authController.login(loginRequest);
//        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
//        assertEquals(expectedResponse, responseEntity.getBody());
//    }
//
//    @Test
//    public void testRegister() {
//        RegisterRequest registerRequest = new RegisterRequest("test@example.com", "password");
//        LoginResponse expectedResponse = new LoginResponse("token");
//
//        when(authService.attemptRegistration(any(String.class), any(String.class))).thenReturn(expectedResponse);
//
//        ResponseEntity<LoginResponse> responseEntity = authController.register(registerRequest);
//        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
//        assertEquals(expectedResponse, responseEntity.getBody());
//    }
//}
