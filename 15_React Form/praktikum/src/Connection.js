import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wgoqotzgmnlnlfaqxwle.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indnb3FvdHpnbW5sbmxmYXF4d2xlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzMDkyNzcsImV4cCI6MjAyNzg4NTI3N30.WWBFKf7nCDpY4WVU7b_kmTpgiWUeOoxqJffMZQ6b2Qo";

export const supabase = createClient(supabaseUrl, supabaseKey);