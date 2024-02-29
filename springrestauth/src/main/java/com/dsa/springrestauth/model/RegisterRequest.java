package com.dsa.springrestauth.model;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class RegisterRequest {
    String email;
    String password;
}
