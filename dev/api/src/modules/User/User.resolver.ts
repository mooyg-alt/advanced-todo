import { Resolver, Mutation, Arg, Ctx, Query } from "type-graphql";
import { Context } from "../../context/context";
import * as bcrypt from "bcryptjs";
import { RegisterUserInput } from "./Input/RegisterUserInput";
import { User } from "@models/User";
import { LoginInput } from "./Input/LoginInput";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
class FieldError {
	@Field()
	message: string;
}

@ObjectType()
export class UserResponse {
	@Field(() => [FieldError], { nullable: true })
	errors?: FieldError[];

	@Field(() => User, { nullable: true })
	user?: User;
}

@Resolver()
export class UserResolver {
	@Query(() => [User])
	async getUsers(@Ctx() ctx: Context) {
		console.log(ctx.req.session.userId);
		return await ctx.prisma.user.findMany();
	}

	@Query(() => User, { nullable: true })
	async Login(
		@Ctx() ctx: Context,
		@Arg("data") { email, password }: LoginInput
	): Promise<null | User> {
		const findUser = await ctx.prisma.user.findUnique({
			where: {
				email,
			},
		});
		if (!findUser) return null;
		const valid: boolean | null = await bcrypt.compare(
			password,
			findUser.password
		);
		if (!valid) return null;

		ctx.req.session!.userId = findUser.id;
		return findUser;
	}

	@Mutation(() => UserResponse)
	async createUser(
		@Ctx() ctx: Context,
		@Arg("data") { email, password, username }: RegisterUserInput
	): Promise<UserResponse | null> {
		const verifyEmail = await ctx.prisma.user.findUnique({
			where:{
				email
			}
		})
		console.log(verifyEmail)	
		if(verifyEmail) {
			console.log("here")
			return {errors:[{message:"e-mail already exists"}]}
		}
		const hashedPassword = await bcrypt.hash(password, 12);
		const newUser = await ctx.prisma.user.create({
			data: {
				email,
				username,
				password: hashedPassword,
			},
		});
		console.log(newUser)
		return { user: newUser };
	}
}
