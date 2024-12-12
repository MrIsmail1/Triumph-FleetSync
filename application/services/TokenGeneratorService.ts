export interface TokenGeneratorService {
  generateToken(payload: Record<string, any>): string;
  generateVerificationToken(): string;
  verify(token: string): Record<string, any>;
}
