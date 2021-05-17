class ApiError {

  messages = {};

  constructor(messages: object, status: number) {
    this.addAll(messages, status);
  }

  private add(field: string, message: string) {
    const messages = (field in this.messages) ? this.messages[field] : [];
    messages.push(message);
    this.messages[field] = messages;
  }

  private addAll(messages: object, status: number) {
    for (let [field, message] of Object.entries(messages)) {
      field = status !== 400 ? 'non_field_errors' : field;
      this.add(field, message);
    }
  }
}

export { ApiError };
