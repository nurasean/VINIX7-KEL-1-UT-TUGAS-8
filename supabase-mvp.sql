-- Jalankan di Supabase SQL Editor untuk Tugas 8.
-- Tabel ini mengikuti skema sederhana di PPT: id, content, created_at.
create table if not exists public.mvp_interactions (
  id uuid primary key default gen_random_uuid(),
  content text not null,
  created_at timestamptz not null default now()
);

alter table public.mvp_interactions enable row level security;

create policy "allow anon insert mvp interactions"
on public.mvp_interactions
for insert
to anon
with check (true);
