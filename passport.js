import passport from "passport";
import GithubStrategy from "passport-local-mongoose";
import User from "./models/User";
import { githubLoginCallback } from "./controllers/userController";

passport.use(User.createStrategy());

passport.use(
  new GithubStrategy({
    clientID: process.env.GH_ID,
    clientSecret: process.env.GH_SECRET,
    callbackURL: "http://localhost:4000/auth/github/callback"
  }),
  githubLoginCallback
);
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
