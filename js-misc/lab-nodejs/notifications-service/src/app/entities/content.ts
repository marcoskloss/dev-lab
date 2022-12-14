export class Content {
  private readonly content: string;

  constructor(content: string) {
    const isContentValid = this.validateContent(content);
    if (!isContentValid) {
      throw new Error(
        `Invalid Content length. Length must be between 5 and 240, got ${content.length}`,
      );
    }

    this.content = content;
  }

  public get value() {
    return this.content;
  }

  private validateContent(content: string) {
    return content.length >= 5 && content.length <= 240;
  }
}
