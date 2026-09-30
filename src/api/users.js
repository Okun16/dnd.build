import { mockUser } from "../data/mockUser.js";

export async function getCurrentUser() {
  // later: return fetch("/api/me", { credentials: "include" }).then(r => r.json());
  return mockUser;
}