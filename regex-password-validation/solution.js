function validate(password) {
  console.log(password);
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])[\w]{6,}$/.test(password);
}
