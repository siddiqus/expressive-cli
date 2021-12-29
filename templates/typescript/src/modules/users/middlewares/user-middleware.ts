import { Handler } from "@siddiqus/expressive";

export const someMiddleware: Handler = async (req, res) => {
  console.log(`some user middleware`)
}