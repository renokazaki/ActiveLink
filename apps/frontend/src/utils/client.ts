import { hc } from "hono/client";
import { AppType } from "backend/api";

export const client = hc<AppType>(process.env.NEXT_PUBLIC_API_URL!);
