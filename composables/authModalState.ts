export function useAuthModalState() {

    const AuthModalState = Object.freeze({
        login: 0,
        GoogleTowFA: 1,
        changePassword: 2,
        ChangePasswordSuccessfully: 3,
        CodeFromEmail: 4,
        Registration: 5,
        RegistrationSuccessfully: 6,
        RestorePassword: 7,
        RestorePasswordSuccessfully: 8,
        WelcomeBackInGoogle: 9,
    })

    return {
        AuthModalState
    };
}