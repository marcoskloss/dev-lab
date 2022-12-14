import { Content } from './content';

describe('Entity - Notification Content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('some text that is long enough');
    expect(content).toBeTruthy();
  });

  it.each(['', 'xxxx', 'x'.repeat(241), 'x'.repeat(999)])(
    'should throw when creating a too short or too long notification content',
    (content: string) => {
      expect(() => new Content(content)).toThrow();
    },
  );
});
