import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://utgctwoowiqypoudvxjc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV0Z2N0d29vd2lxeXBvdWR2eGpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwNDUyODEsImV4cCI6MjA3ODYyMTI4MX0.MTamlK-a6GGLs-Jb1ZfWQZFyjPY5PMzxYpgPBUkS1g8'     // From Supabase settings

export const supabase = createClient(supabaseUrl, supabaseKey)  