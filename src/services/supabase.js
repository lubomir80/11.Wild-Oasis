import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://icdpmcxailuuqmjctfcq.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljZHBtY3hhaWx1dXFtamN0ZmNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYyNzEyOTEsImV4cCI6MjAxMTg0NzI5MX0.YXD3l88QqNJvRjQaRMT3oo81kGMckOKzL3U_QMFA_tc"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase