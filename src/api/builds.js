import { mockBuilds } from "../data/mockBuilds.js";

export async function getPopularBuilds(limit = 2) {
  // later: return fetch(`/api/builds/popular?limit=${limit}`).then(r => r.json());
  return [...mockBuilds].sort((a, b) => b.likes - a.likes).slice(0, limit);
}

export async function getRandomBuild() {
  // later: return fetch("/api/builds/random").then(r => r.json());
  return mockBuilds[Math.floor(Math.random() * mockBuilds.length)];
}