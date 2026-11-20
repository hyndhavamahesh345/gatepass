// GatePass configuration. This is the only file you edit to host your own copy.
// Supabase → Project Settings → API: copy the Project URL and the anon / public key.
// The anon key is meant to be public; Row Level Security in schema.sql protects the data.
// Never put the service_role key here.
window.GATEPASS = {
  supabaseUrl: "https://gnzokwqhkjfzrikmkzil.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imduem9rd3Foa2pmenJpa21remlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTUxNTU1NTAsImV4cCI6MjExMDczMTU1MH0.r1t56FXIFaFv2yu9nV4APx-IvaLFwJNaASB89alGBTQ",

  // Organiser sign-in methods.
  // emailSignIn: magic link by email (needs the Email provider on; for more than a few emails an hour, custom SMTP).
  // googleSignIn: "Continue with Google" (needs the Google provider set up in Supabase → Authentication → Providers).
  // The hosted copy uses Google only, because its shared Supabase project has email sign-ups switched off.
  emailSignIn: true,
  googleSignIn: true,
};
