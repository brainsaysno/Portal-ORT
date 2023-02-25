import { z } from "zod";

export const ID = z.number().positive().int();
