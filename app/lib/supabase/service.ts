import { createClient } from "@supabase/supabase-js";

import { getSupabaseConfig } from "./config";

export function createRoleForgeServiceClient() {
  const config = getSupabaseConfig();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() ?? "";

  if (!config.url || !serviceRoleKey) {
    return null;
  }

  return createClient(config.url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
