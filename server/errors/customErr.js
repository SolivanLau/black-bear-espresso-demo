class CustomApiErr extends Error {
  constructor(message, info) {
    super(message);
    this.success = false;
    this.info = info || `No additional error info`;
  }
}

module.exports = CustomApiErr;
