import { mockBuilds } from "../data/mockBuilds.js";

function getPublicBuilds() {
  return mockBuilds.filter((b) => b.isPublic);
}

export async function getPopularBuilds(limit = 2) {
  // later: return fetch(`/api/builds/popular?limit=${limit}`).then(r => r.json());
  return getPublicBuilds()
    .sort((a, b) => b.likes - a.likes)
    .slice(0, limit);
}

export async function getRandomBuild() {
  // later: return fetch("/api/builds/random").then(r => r.json());
  const builds = getPublicBuilds();
  return builds[Math.floor(Math.random() * builds.length)];
}

export async function getUserBuilds(userId) {
  return mockBuilds.filter((b) => b.authorId === userId);
}