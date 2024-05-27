// styles.js
import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    height: 300,
    width: 300,
    position: 'absolute',
    top: 140,
    left: 100,
    transform: [
      { translateX: -50 },
      { translateY: -20 },
    ],
  },
  content: {
    paddingHorizontal: 22,
    position: 'absolute',
    top: 450,
    width: '100%',
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    color: COLORS.primary,
  },
  descriptionContainer: {
    marginVertical: 10,
  },
  descriptionText: {
    fontSize: 15,
    color: COLORS.black,
  },
  button: {
    marginTop: 22,
    width: '100%',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 16,
    color: COLORS.black,
  },
  loginText: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: 'bold',
    marginLeft: 4,
  },
});

const signupStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: 22,
  },
  headerContainer: {
    marginTop: 10
  },
  headerText: {
    fontSize: 38,
    fontWeight: '800',
    color: COLORS.primary,
    marginVertical: 10,
  },
  inputContainer: {
    marginBottom: 12,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 8,
  },
  inputWrapper: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22,
  },
  inputField: {
    width: "100%",
  },
  passwordWrapper: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 12,
  },
  passwordInput: {
    flex: 1,
    paddingRight: 36, // Ensure padding right to accommodate the eye icon
  },
  togglePassword: {
    position: 'absolute',
    right: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginVertical: 6,
  },
  checkbox: {
    marginRight: 8,
  },
  button: {
    marginTop: 18,
    marginBottom: 4,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.grey,
    marginHorizontal: 10,
  },
  dividerText: {
    fontSize: 14,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 52,
    borderWidth: 1,
    borderColor: COLORS.grey,
    marginRight: 4,
    borderRadius: 10,
  },
  socialIcon: {
    height: 36,
    width: 36,
    marginRight: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 22,
  },
  footerText: {
    fontSize: 16,
    color: COLORS.black,
  },
  loginText: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: "bold",
    marginLeft: 6,
  },
});

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: 22,
  },
  headerContainer: {
    marginTop: 22,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '700',
    marginVertical: 12,
    color: COLORS.primary,
  },
  inputContainer: {
    marginBottom: 12,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 8,
  },
  inputWrapper: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22,
  },
  inputField: {
    width: "100%",
  },
  passwordWrapper: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 12,
  },
  passwordInput: {
    flex: 1,
    paddingRight: 36, // Ensure padding right to accommodate the eye icon
  },
  togglePassword: {
    position: 'absolute',
    right: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginVertical: 6,
  },
  checkbox: {
    marginRight: 8,
  },
  button: {
    marginTop: 18,
    marginBottom: 4,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.grey,
    marginHorizontal: 10,
  },
  dividerText: {
    fontSize: 14,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 52,
    borderWidth: 1,
    borderColor: COLORS.grey,
    marginRight: 4,
    borderRadius: 10,
  },
  socialIcon: {
    height: 36,
    width: 36,
    marginRight: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 22,
  },
  footerText: {
    fontSize: 16,
    color: COLORS.black,
  },
  registerText: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: "bold",
    marginLeft: 6,
  },
});

export { welcomeStyles, signupStyles, loginStyles };
