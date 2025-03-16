import { IsString, IsEmail, MinLength, IsDefined } from 'class-validator';

export class SignUpDto {
  @IsString()
  @IsDefined()
  name: string;

  @IsEmail()
  @IsDefined()
  email: string;

  @IsString()
  @IsDefined()
  @MinLength(6)
  password: string;
}
