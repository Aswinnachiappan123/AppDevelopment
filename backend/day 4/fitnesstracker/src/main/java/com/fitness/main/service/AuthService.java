package com.fitness.main.service;

import com.fitness.main.dto.request.AuthenticationRequest;
import com.fitness.main.dto.request.RegisterRequest;
import com.fitness.main.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);

}
