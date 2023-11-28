import { useI18n } from 'vue-i18n';
import { email, helpers, minLength, required, sameAs } from "@vuelidate/validators";

export function useRulesForForm() {
    const { t } = useI18n();
    const isCapitalLetter = helpers.regex(/[A-Z]/)
    const mustBeNumber = helpers.regex(/[0-9]/);
    const leastOneSpecialCharacter = helpers.regex(/[^a-zA-Z0-9]/);

    const RulesForFormEmail = () => {
        return {
            required: helpers.withMessage(t('form.errorForInput.email.required'), required),
            email: helpers.withMessage(t('form.errorForInput.email.email'), email)
        }
    };
    const RulesForFormPassword = () => {
        return {
            required: helpers.withMessage(t('form.errorForInput.password.required'), required),
            isCapitalLetter: helpers.withMessage(t('form.errorForInput.password.isCapitalLetter'), isCapitalLetter),
            mustBeNumber: helpers.withMessage(t('form.errorForInput.password.mustBeNumber'), mustBeNumber),
            leastOneSpecialCharacter: helpers.withMessage(t('form.errorForInput.password.leastOneSpecialCharacter'), leastOneSpecialCharacter),
            minLength: helpers.withMessage(t('form.errorForInput.password.minLength'), minLength(8))
        };
    };
    const RulesForFormConfirmPassword = (passwordInput) => {
        return {
            required: helpers.withMessage(t('form.errorForInput.confirmPassword.required'), required),
            sameAs: helpers.withMessage(t('form.errorForInput.confirmPassword.sameAs'), sameAs(passwordInput))
        };
    };
    const RulesForFormTwoFA = () => {
        return {
            required: helpers.withMessage(t('form.errorForInput.twoFA.required'), required)
        };
    };
    const RulesForFormCodeFromEmail = () => {
        return {
            required: helpers.withMessage(t('form.errorForInput.codeFromEmail.required'), required)
        };
    };

    return {
        t,
        RulesForFormEmail,
        RulesForFormPassword,
        RulesForFormConfirmPassword,
        RulesForFormTwoFA,
        RulesForFormCodeFromEmail
    };
}