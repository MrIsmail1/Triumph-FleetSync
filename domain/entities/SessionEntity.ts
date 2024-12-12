export class SessionEntity {
  private constructor(
    public identifier: string,
    public userId: string,
    public expiresAt: Date,
    public createdAt: Date,
    public userAgent?: string
  ) {}

  public static create(userId: string, expiresAt: Date, userAgent?: string) {
    const identifier = crypto.randomUUID();
    const createdAt = new Date();
    return new SessionEntity(
      identifier,
      userId,
      expiresAt,
      createdAt,
      userAgent
    );
  }
}
