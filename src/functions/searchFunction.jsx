import { z } from "zod";

export const searchFunction = z.object({
  title: z
    .string()
    .nonempty({ message: "A pesquisa não pode ser vazia" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "A pesquisa não ter apenas espaços",
    }),
});