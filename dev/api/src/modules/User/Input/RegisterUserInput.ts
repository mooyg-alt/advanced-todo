import { IsEmail } from "class-validator";
import { InputType, Field } from "type-graphql";
@InputType()
export class RegisterUserInput {
	@Field()
	username: string;

	@Field()
	@IsEmail()
	email: string;

	@Field()
	password: string;
}
