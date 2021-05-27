import * as Express from "express";
import "reflect-metadata";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import * as cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { HelloResolver } from "./modules/Hello.resolver";
import { PrismaClient } from ".prisma/client";
import * as connectRedis from "connect-redis";
import * as session from "express-session";
import { redis } from "./redis/redis";
import * as dotenv from "dotenv";
import {UserResolver} from "./modules/User/User.resolver"
dotenv.config();
const db = new PrismaClient()
const main = async () => {
  const schema = await buildSchema({
    resolvers: [HelloResolver, UserResolver],
  });

  const apolloServer = new ApolloServer({
    schema,
    context:({req})=>{
      return{
        prisma: db,
        req
      }
    }
  });
  const app = Express();

  const RedisStore = connectRedis(session);
  app.use(cors({
    credentials:true,
    origin: "*"
  }));
  app.use(
    session({
      store: new RedisStore({
        client: redis as any,
      }),
      name: "qid",
      secret: "shsaudasiua",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
      },
    })
  );
  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("Server launched on http://localhost:4000 🚀 ");
  });
};
main();
