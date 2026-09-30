export const mockUser = {
  id: 1,
  username: "Okun",
  joined: "2026-09-01",
};

// ⚠️ Mock only. A real backend NEVER stores plain passwords, only bcrypt hashes.
export const mockUsers = [
  { id: 1, username: "Okun",       email: "okun@dnd.build",   password: "dragon123" },
  { id: 2, username: "MossKeeper", email: "moss@dnd.build",   password: "firbolg42" },
  { id: 3, username: "RollCrit",   email: "crit@dnd.build",   password: "natural20" },
];