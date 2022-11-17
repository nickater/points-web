import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://zidpldecibkojlglfmlb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppZHBsZGVjaWJrb2psZ2xmbWxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMDc3NzksImV4cCI6MTk4Mzc4Mzc3OX0.6gvzWwaMnu4nE0RJXKv8mXt-5Q3zAL8ZWSrp9bI9HMM"
);

export { supabase };
