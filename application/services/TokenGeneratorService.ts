interface TokenGeneratorService {
  generateToken(payload: Record<string, any>): string;
  verify(token: string): Record<string, any>;
}
