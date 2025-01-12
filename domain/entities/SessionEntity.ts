export class SessionEntity {
  private constructor(
    public identifier: string,
    public userId: string,
    public expiresAt: Date,
    public createdAt: Date,
    public userAgent?: string | null
  ) {}

  public static create(
    userId: string,
    expiresAt: Date,
    userAgent?: string | null
  ): SessionEntity {
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
  public static reconstitute(data: {
    id: string;
    userId: string;
    expiresAt: Date;
    createdAt: Date;
    userAgent: string | null;
  }): SessionEntity {
    return new SessionEntity(
      data.id,
      data.userId,
      data.expiresAt,
      data.createdAt,
      data.userAgent
    );
  }
}
