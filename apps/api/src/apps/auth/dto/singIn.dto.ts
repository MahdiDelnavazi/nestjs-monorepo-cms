import { IsDefined, IsEmail, IsString, MinLength } from 'class-validator';

export class SignInDto {
  @IsEmail()
  @IsDefined()
  email: string;

  @IsString()
  @IsDefined()
  @MinLength(6)
  password: string;
}
